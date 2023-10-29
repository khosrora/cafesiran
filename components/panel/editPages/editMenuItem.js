import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { editItemMenu, getOneItemMenu } from '../../../redux/cafe/actions';
import { getCategories } from '../../../redux/category/actions';
import Sform from '../../skillton/Sform';
import Link from 'next/link';
import { ArrowRightIcon, UploadIcon, CheckIcon } from '@heroicons/react/outline';



const createItemMenuSchema = Yup.object().shape({
    title: Yup.string().min(2, 'نام آیتم منو بیش از حد کوتاه است').max(50, 'نام آیتم منو بیش از حد بزرگ است').required('وارد کردن نام آیتم منو الزامی است'),
    price: Yup.number().typeError("قیمت باید به صورت عددی وارد شود").required('وارد کردن قیمت آیتم منو الزامی است'),
    desc: Yup.string().min(20, 'توضیحات آیتم منو بیش از حد کوتاه است').max(1000, 'توضیحات آیتم منو بیش از حد بزرگ است').required('وارد کردن توضیحات آیتم منو الزامی است'),
    category: Yup.string().required("انتخاب دسته بندی الزامی است")
});



const EditMenuItem = ({ setGallery, imageUrl }) => {

    const [callBack, setCallBack] = useState(false)

    const router = useRouter();
    const id = router.query.id;
    const dispatch = useDispatch();
    const { categoryDetails, cafeDetails } = useSelector(state => state);
    const categories = categoryDetails.categories;
    const item = cafeDetails.item;
    const load = categoryDetails.load;

    useEffect(() => {
        if (id) {
            dispatch(getOneItemMenu(id))
            dispatch(getCategories());
        };
    }, [id, dispatch, callBack]);

    if (!item) return <Sform />
    return (
        <>
            <div className="flex justify-start items-center mt-4">
                <Link href="/dashboard/allItems?page=1">
                    <div className="border rounded-full flex justify-center items-center p-1 ml-2 cursor-pointer">
                        <ArrowRightIcon className='w-4 h-4' />
                    </div>
                </Link>
                <h1 className="text-xs lg:text-xl w-3/4 lg:m-auto dark:text-white">فرم ویرایش آیتم منو</h1>
            </div>
            {
                load ? <Sform /> :
                    <Formik
                        initialValues={{
                            title: item?.title,
                            price: item?.price,
                            desc: item?.desc,
                            is_active: item?.is_active,
                            category: item.category.id
                        }}
                        validationSchema={createItemMenuSchema}
                        onSubmit={(values , { resetForm }) => {
                            console.log(imageUrl);
                            values.image_url = imageUrl;
                            console.log(values);
                            // if (values.image_url === null) return errorMessage("لطفا عکس آیتم منو را انتخاب کنید")
                            dispatch(editItemMenu(id, values))
                            setCallBack(!callBack)
                            resetForm();
                            router.back();
                        }}
                    >
                        {({ errors, touched, values }) => (
                            <Form className="mt-8 flex flex-col gap-y-8 m-auto lg:w-3/4" action="">
                                <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                                    <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                        <label className="" htmlFor="per-name">نام محصول</label>
                                        <Field name="title" className="w-full p-2 rounded-md border focus:outline-none dark:border-none dark:bg-zinc-700" id="per-name" type="text" placeholder="نام محصول خود را به فارسی وارد کنید" />
                                        {errors.title && touched.title ? (<span className='text-red-600'>{errors.title}</span>) : null}
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                        <label className="" htmlFor="en-name">قیمت</label>
                                        <Field name="price" className="w-full p-2 rounded-md border focus:outline-none dark:border-none dark:bg-zinc-700" id="en-name" type="text" placeholder="قیمت خود را به انگلیسی وارد کنید" />
                                        {errors.price && touched.price ? (<span className='text-red-600'>{errors.price}</span>) : null}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                                    <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                        <label className="" htmlFor="mobile">آدرس تصویر</label>
                                        <div onClick={() => setGallery(true)} className="flex items-center gap-x-2 w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:border-none dark:bg-zinc-700">
                                            {
                                                imageUrl === null   ?
                                                    <UploadIcon className='w-6 h-6' />
                                                    :
                                                    <CheckIcon className='w-6 h-6 text-green-600' />
                                            }
                                            {
                                                imageUrl === null  ?
                                                    <span>انتخاب عکس</span>
                                                    :
                                                    <span>عکس انتخاب شد</span>
                                            }
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                        <label htmlFor="type">دسته بندی</label>
                                        <Field name="category" as="select" defaultValue={values.category} className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:border-none dark:bg-zinc-700">
                                            <option>دسته بندی آیتم</option>
                                            {
                                                categories.map((i, index) => <option key={index} value={i.id}>{i.title}</option>)
                                            }
                                        </Field>
                                        {errors.category && touched.category ? (<span className='text-red-600'>{errors.category}</span>) : null}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between gap-y-8 text-slate-600 dark:text-white">
                                    <div className="flex flex-col justify-start items-start gap-y-2">
                                        <label className="" htmlFor="address">توضیحات</label>
                                        <Field name="desc" component="textarea" rows="6" className="w-full p-2 rounded-md border focus:outline-none dark:border-none dark:bg-zinc-700" id="address" placeholder="توضیحات آیتم" />
                                        {errors.desc && touched.desc ? (<span className='text-red-600'>{errors.desc}</span>) : null}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button type='submit' className="bg-[#FF7129] w-48 px-4 py-2 rounded-md text-white" disabled={load}>
                                        {
                                            load ? "لطفا منتظر بمانید" : "ویرایش آیتم"
                                        }
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
            }
        </>
    );
}

export default EditMenuItem;