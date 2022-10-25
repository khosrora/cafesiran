import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { convertToSlug, getCities } from '../../utils/functions';
import { province } from '../shared/utilities/constance/province';
import { requestForCafe } from '../../redux/user/actions';
import { useRouter } from "next/router";


const RequestValidationSchema = Yup.object().shape({
    persian_title: Yup.string().min(2, 'نام کافه بیش از حد کوتاه است').max(50, 'نام کافه بیش از حد بزرگ است').required('وارد کردن نام کافه الزامی است'),
    english_title: Yup.string().min(2, 'نام کافه بیش از حد کوتاه است').max(50, 'نام کافه بیش از حد بزرگ است').required('وارد کردن نام کافه الزامی است'),
    phone: Yup.string().matches(/^09[0-9]{9}$/, "شماره تماس وارد شده معتبر نیست").required('وارد کردن شماره تماس کافه الزامی است'),
    street: Yup.string().min(5, 'آدرس کافه بیش از حد کوتاه است').max(100, 'آدرس کافه بیش از حد بزرگ است').required('وارد کردن آدرس کافه الزامی است'),
    type: Yup.string().required('وارد کردن دسته الزامی است'),
    province: Yup.string().required('وارد کردن استان  کافه الزامی است'),
    city: Yup.string().required('وارد کردن شهر  کافه الزامی است'),
});


const Request = () => {

    const { userDetails } = useSelector(state => state);
    const dispatch = useDispatch();
    const [cities, setCities] = useState([]);
    const [provinceSelect, setProvince] = useState();
    const router = useRouter()
    const load = userDetails.load;
    console.log(load);

    return (
        <>
            <h1 className="text-xl mt-4 w-3/4 lg:m-auto dark:text-white">فرم ثبت درخواست مجموعه</h1>
            <Formik
                initialValues={{
                    persian_title: '',
                    english_title: '',
                    phone: '',
                    street: '',
                    desc: '',
                    type: '',
                    province: '',
                    city: '',
                    slug: ''
                }}
                validationSchema={RequestValidationSchema}
                onSubmit={values => {
                    values.province = parseInt(values.province);
                    values.city = parseInt(values.city);
                    values.slug = convertToSlug(values.english_title);
                    dispatch(requestForCafe(values));
                    router.push("/dashboard");
                }}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form className="mt-8 flex flex-col gap-y-8 m-auto lg:w-3/4" action="">
                        <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                <label className="" htmlFor="per-name">نام مجموعه به فارسی</label>
                                <Field name="persian_title" className="w-full p-2 rounded-md border focus:outline-none dark:bg-zinc-700 dark:border-none" id="per-name" type="text" placeholder="نام مجموعه خود را به فارسی وارد کنید" />
                                {errors.persian_title && touched.persian_title ? (<span className='text-red-600'>{errors.persian_title}</span>) : null}
                            </div>
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                <label className="" htmlFor="en-name">نام مجموعه به انگلیسی</label>
                                <Field name="english_title" className="w-full p-2 rounded-md border focus:outline-none dark:bg-zinc-700 dark:border-none" id="en-name" type="text" placeholder="نام مجموعه خود را به انگلیسی وارد کنید" />
                                {errors.english_title && touched.english_title ? (<span className='text-red-600'>{errors.english_title}</span>) : null}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                <label className="" htmlFor="mobile">شماره تماس</label>
                                <Field name="phone" className="w-full p-2 rounded-md border focus:outline-none dark:bg-zinc-700 dark:border-none" id="mobile" type="text" placeholder="شماره تماس مجموعه را وارد کنید" />
                                {errors.phone && touched.phone ? (<span className='text-red-600'>{errors.phone}</span>) : null}
                            </div>
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6 lg:mr-4">
                                <label htmlFor="type">نوع</label>
                                <Field name='type' as="select" id="type" className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:bg-zinc-700 dark:border-none">
                                    <option selected>نوع پنل کاربری خود را انتخاب کنید</option>
                                    <option value="R">رستوران</option>
                                    <option value="C">کافه</option>
                                    <option value="CR">کافه رستوران</option>
                                    <option value="IC">آبمیوه و بستنی</option>
                                </Field>
                                {errors.type && touched.type ? (<span className='text-red-600'>{errors.type}</span>) : null}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-y-8 text-slate-600 lg:flex-row lg:justify-between dark:text-white">
                            <div className="flex flex-col justify-start items-start gap-y-2 lg:w-3/6">
                                <label htmlFor="state">استان</label>
                                <select name="province" onChange={(e) => {
                                    const res = getCities(e.target.value);
                                    setFieldValue("province", e.target.value)
                                    setProvince(e.target.value);
                                    setCities(res)
                                }} id="state" className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:bg-zinc-700 dark:border-none">
                                    <option selected>استان خود را انتخاب کنید</option>
                                    {
                                        province.map(i => <option key={i.pk} value={i.pk} >{i.fields.name}</option>)
                                    }
                                </select>
                                {errors.province && touched.province ? (<span className='text-red-600'>{errors.province}</span>) : null}
                            </div>
                            <div className="flex flex-col justify-start items-start gap-y-2  lg:w-3/6 lg:mr-4">
                                <label htmlFor="city">شهر</label>
                                <Field name="city" as="select" id="city" className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:bg-zinc-700 dark:border-none">
                                    object                                    {
                                        cities.map(i => <option key={i.pk} value={i.pk}>{i.fields.name}</option>)
                                    }
                                </Field>
                                {errors.city && touched.city ? (<span className='text-red-600'>{errors.city}</span>) : null}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-y-8 text-slate-600 dark:text-white">
                            <div className="flex flex-col justify-start items-start gap-y-2">
                                <label className="" htmlFor="address">آدرس</label>
                                <Field name="street" component="textarea" rows="6" className="w-full p-2 rounded-md border focus:outline-none dark:bg-zinc-700 dark:border-none" id="address" placeholder="آدرس کافه خود را وارد کنید" />
                                {errors.street && touched.street ? (<span className='text-red-600'>{errors.street}</span>) : null}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <button type="submit" className="bg-amber-600 w-48 px-4 py-2 rounded-md text-white">
                                {
                                    load ? "لطفا منتظر بمانید" : "ثبت درخواست"
                                }
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Request;