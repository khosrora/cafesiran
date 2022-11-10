import { useDispatch, useSelector } from 'react-redux';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { sendContactUs } from '../../redux/global/actions';


const SignupSchema = Yup.object().shape({
    full_name: Yup.string().min(2, 'نام و نام خانوادگی کوتاه است').required('وارد کردن نام و نام خانوادگی الزامی است'),
    message: Yup.string().min(20, 'متن پیام بیش از حد کوتاه است').max(2000, 'متن پیام بیش از حد بزرگ است').required('وارد کردن متن پیام الزامی است'),
    phone: Yup.string().matches(/^09[0-9]{9}$/, "شماره تماس وارد شده معتبر نیست").required('وارد کردن شماره تماس الزامی است'),
});



const ContactUsPage = () => {

    const dispatch = useDispatch()
    const { global } = useSelector(state => state);
    const load = global.load;

    return (
        <div className="my-16 px-8 w-full lg:my-16">
            <Formik
                initialValues={{
                    full_name: '',
                    message: '',
                    phone: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values , {resetForm}) => {
                    dispatch(sendContactUs(values))
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="max-w-7xl m-auto">
                        <div className="w-full text-center bg-zinc-50 py-2 rounded-md dark:bg-zinc-800">
                            <h1 className="text-lg">تماس با ما</h1>
                        </div>
                        <div className="my-4 lg:flex justify-between">
                            <div className="my-2 p-4 flex flex-col justify-center items-center  rounded-md lg:px-16 ">
                                <PhoneIcon className="h-8 w-8 text-[#FF7129]" />
                                <p className="text-sm mt-8">09332829823</p>
                            </div>
                            <div className="my-2 p-4 flex flex-col justify-center items-center bg-zinc-50 rounded-md lg:px-16 dark:bg-zinc-800">
                                <MailIcon className="h-8 w-8 text-[#FF7129]" />
                                <p className="text-sm mt-8">khosrora153333@gmail.com</p>
                            </div>
                            <div className="my-2 p-4 flex flex-col justify-center items-center rounded-md lg:px-16 ">
                                <LocationMarkerIcon className="h-8 w-8 text-[#FF7129]" />
                                <p className="text-sm mt-8">زاهدان پارک علم و فناوری</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start my-4 bg-zinc-50 py-4 px-4 gap-y-8 dark:bg-zinc-900">
                            <div className="flex flex-col justify-center items-start w-full gap-y-4 lg:flex-row lg:gap-x-2">
                                <div className="flex flex-col justify-center items-start w-full">
                                    <label htmlFor="">نام و نام خانوادگی</label>
                                    <Field name="full_name" className="w-full border p-2 mt-2 bg-zinc-100 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="نام و نام خانوادگی خود را اینجا بنویسید" type="text" />
                                    {errors.full_name && touched.full_name ? <span className='text-xs text-red-600'>{errors.full_name}</span> : null}
                                </div>
                                <div className="flex flex-col justify-center items-start w-full">
                                    <label htmlFor="">شماره تماس</label>
                                    <Field name="phone" className="w-full border p-2 mt-2 bg-zinc-100 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="شماره تماس خود را اینجا بنویسید" />
                                    {errors.phone && touched.phone ? <span className='text-xs text-red-600'>{errors.phone}</span> : null}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start w-full">
                                <label htmlFor="">پیام</label>
                                <Field as="textarea" name="message" className="w-full border bg-zinc-100 mt-2 p-2 rounded-md focus:outline-none dark:bg-zinc-800 dark:border-none" placeholder="متن پیام خود را اینجا بنویسید" cols="30" rows="10" />
                                {errors.message && touched.message ? <div className='text-xs text-red-600'>{errors.message}</div> : null}
                            </div>
                            {
                                load ? 
                                <button type='submit' className="bg-[#FF7129] w-full text-white py-2 rounded-md" disabled>در حال ارسال پیام</button>
                                :
                                <button type='submit' className="bg-[#FF7129] w-full text-white py-2 rounded-md">ارسال پیام</button>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactUsPage;