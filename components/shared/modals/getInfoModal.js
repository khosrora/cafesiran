import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('وارد کردن نام و نام خانوادگی الزامی است'),
    address: Yup.string().min(5).max(200).required('وارد کردن آدرس الزامی است'),
    postal_code: Yup.string().required('وارد کردن کد پستی الزامی است'),
    phone: Yup.string().matches(/^09[0-9]{9}$/, "شماره تماس وارد شده معتبر نیست").required('وارد کردن شماره تماس الزامی است'),
});

const GetInfoModal = ({ setInfoModal, setInfo }) => {

    return (
        <>
            <div onClick={() => setInfoModal(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-2 rounded-md z-50 md:w-3/6 lg:w-3/6 dark:bg-zinc-900">
                <Formik
                    initialValues={{
                        fullName: '',
                        phone: '',
                        address: '',
                        postal_code: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        setInfo({
                            fullName: values.fullName,
                            phone: values.phone,
                            address: values.address,
                            postal_code: values.postal_code,
                        })
                        setInfoModal(false)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="text-xs p-2 space-y-4">
                            <div className="flex flex-col justify-center items-start w-full">
                                <label htmlFor="">نام و نام خانوادگی</label>
                                <Field name="fullName" className="w-full border p-2 mt-2 bg-zinc-100 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="نام و نام خانوادگی گیرنده را اینجا بنویسید" type="text" />
                                {errors.fullName && touched.fullName ? <span className='text-xs text-red-600'>{errors.fullName}</span> : null}
                            </div>
                            <div className="flex flex-col justify-center items-start w-full">
                                <label htmlFor="">شماره تماس</label>
                                <Field name="phone" className="w-full border p-2 mt-2 bg-zinc-100 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="شماره تماس گیرنده را اینجا بنویسید" type="text" />
                                {errors.phone && touched.phone ? <span className='text-xs text-red-600'>{errors.phone}</span> : null}
                            </div>
                            <div className="flex flex-col justify-center items-start w-full">
                                <label htmlFor="">کد پستی</label>
                                <Field name="postal_code" className="w-full border p-2 mt-2 bg-zinc-100 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="کد پستی مکان دریافت کالا را اینجا بنویسید" type="text" />
                                {errors.postal_code && touched.postal_code ? <span className='text-xs text-red-600'>{errors.postal_code}</span> : null}
                            </div>
                            <br />
                            <div className="flex flex-col justify-center items-start w-full col-span-2">
                                <label htmlFor="">آدرس</label>
                                <Field as="textarea" name="address" className="w-full border p-2 mt-2 bg-zinc-100 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="ادرس  مکان دریافت کالا را اینجا بنویسید" type="text" />
                                {errors.address && touched.address ? <span className='text-xs text-red-600'>{errors.address}</span> : null}
                            </div>
                            <button type='submit' className="bg-[#FF7129] w-full text-white py-2 rounded-md">ثبت</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default GetInfoModal;