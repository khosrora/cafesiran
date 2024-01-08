import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getCategories } from '../../redux/category/actions';
import { createItemMenu } from '../../redux/cafe/actions';
import { CheckIcon, UploadIcon } from '@heroicons/react/outline';
import Alert from '../shared/other/alert';




const createItemMenuSchema = Yup.object().shape({
    title: Yup.string().min(2, 'نام آیتم منو بیش از حد کوتاه است').max(50, 'نام آیتم منو بیش از حد بزرگ است').required('وارد کردن نام آیتم منو الزامی است'),
    price: Yup.number().typeError("قیمت باید به صورت عددی وارد شود").required('وارد کردن قیمت آیتم منو الزامی است'),
    desc: Yup.string().min(20, 'توضیحات آیتم منو بیش از حد کوتاه است').max(1000, 'توضیحات آیتم منو بیش از حد بزرگ است').required('وارد کردن توضیحات آیتم منو الزامی است'),
    category: Yup.string().required("انتخاب دسته بندی الزامی است"),
    sort_index: Yup.string().required("انتخاب اولویت نمایش الزامی است"),
});


const CreateItemCafe = ({ title, cateId, setGallery, imageUrl }) => {


    const dispatch = useDispatch();
    const { categoryDetails, utilities } = useSelector(state => state);
    const categories = categoryDetails.categories;
    const load = categoryDetails.load;
    const connection = utilities.connection;

    useEffect(() => {
        if (connection) dispatch(getCategories());
    }, [connection])


    return (
        <>
            <h1 className="text-xs lg:text-xl w-3/4 lg:m-auto dark:text-white">فرم ایجاد آیتم</h1>
            <div className="w-3/4 m-auto my-4">
                <Alert
                    message={`این آیتم در زیر مجموعه دسته بندی ${title} ثبت می شود`}
                />
            </div>
            <Formik
                initialValues={{
                    title: '',
                    image_url: '',
                    price: '',
                    desc: '',
                    is_active: true,
                    category: cateId,
                    sort_index: 1
                }}
                validationSchema={createItemMenuSchema}
                onSubmit={(values, { resetForm }) => {
                    // values.image_url = imageUrl;
                    // if (values.image_url === null) return errorMessage("لطفا عکس آیتم منو را انتخاب کنید")
                    dispatch(createItemMenu(values));
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="mt-8 flex flex-col gap-y-8 m-auto lg:w-3/4 text-sm" action="">
                        <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                <label className="" htmlFor="per-name">نام محصول</label>
                                <Field name="title" className="w-full p-2 rounded-md border focus:outline-none dark:border-none dark:bg-zinc-700" id="per-name" type="text" placeholder="نام محصول خود را به فارسی وارد کنید" />
                                {errors.title && touched.title ? (<span className='text-red-600'>{errors.title}</span>) : null}
                            </div>
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                <label className="" htmlFor="en-name">قیمت <span className='text-green-600 text-xs'>(تومان)</span></label>
                                <Field name="price" className="w-full p-2 rounded-md border focus:outline-none dark:border-none dark:bg-zinc-700" id="en-name" type="text" placeholder="قیمت خود را به انگلیسی وارد کنید" />
                                {errors.price && touched.price ? (<span className='text-red-600'>{errors.price}</span>) : null}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                <label className="" htmlFor="mobile">آدرس تصویر</label>
                                <div onClick={() => setGallery(true)} className="flex items-center gap-x-2 w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:border-none dark:bg-zinc-700">
                                    {
                                        imageUrl === null ?
                                            <UploadIcon className='w-6 h-6' />
                                            :
                                            <CheckIcon className='w-6 h-6 text-green-600' />
                                    }
                                    {
                                        imageUrl === null ?
                                            <span>انتخاب عکس</span>
                                            :
                                            <span>عکس انتخاب شد</span>
                                    }
                                </div>
                            </div>

                            {/* <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                <label htmlFor="type">دسته بندی</label>
                                <Field name="category" as="select" className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:border-none dark:bg-zinc-700">
                                    <option>دسته بندی آیتم</option>
                                    {
                                        categories.map((i, index) => <option key={index} value={i.id}>{i.title}</option>)
                                    }
                                </Field>
                                {errors.category && touched.category ? (<span className='text-red-600'>{errors.category}</span>) : null}
                            </div> */}
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                <label htmlFor="type">اولویت نمایش</label>
                                <Field name="sort_index" as="select" className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:border-none dark:bg-zinc-700">
                                    <option value={1}>اولویت نمایش آیتم</option>
                                    <option value={1}>اول</option>
                                    <option value={2}>دوم</option>
                                    <option value={3}>سوم</option>
                                    <option value={4}>چهارم</option>
                                    <option value={5}>پنجم</option>
                                    <option value={6}>ششم</option>
                                    <option value={7}>هفتم</option>
                                    <option value={8}>هشتم</option>
                                    <option value={9}>نهم</option>
                                    <option value={10}>دهم</option>
                                </Field>
                                {errors.sort_index && touched.sort_index ? (<span className='text-red-600'>{errors.sort_index}</span>) : null}
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
                                    load ? "لطفا منتظر بمانید" : "ثبت آیتم"
                                }
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CreateItemCafe;