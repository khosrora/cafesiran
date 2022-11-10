import { useState , useEffect , useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { CheckOtp, getOtp, handleSendAgainCode, show_Modal_Login } from '../../../redux/auth/actions';



// ! validations
const getOtpSchema = Yup.object().shape({
    phone: Yup.string().matches("^09([1-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
});

const checkOtpSchema = Yup.object().shape({
    password: Yup.string().required("وارد کردن کد الزامی است").min(5, "لطفا در وارد کردن کد دقت کنید").max(8, "لطفا در وارد کردن کد دقت کنید")
});

const GetOtp = () => {
    const [phone, setPhone] = useState(null)
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);
    const sendCode = auth.getOtp;
    const load = auth.load;


    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {
        setTimer('00:02:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 120);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);



    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-75 z-40" onClick={() => dispatch(show_Modal_Login(false))}></div>
            <div className="fixed w-80 m-auto h-auto top-2 py-4 bg-slate-100 z-50 mt-8 rounded-md overflow-auto md:w-2/4 lg:w-1/4 dark:bg-zinc-900">
                <div className="px-8">
                    <div className="w-full" dir="ltr" onClick={() => dispatch(show_Modal_Login(false))}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="py-8 text-center">
                        <p className="text-4xl">کافه <span className="text-[#FF7129]">ایران</span></p>
                    </div>
                    {
                        sendCode ?
                            <Formik
                                initialValues={{
                                    password: ""
                                }}
                                validationSchema={checkOtpSchema}
                                onSubmit={values => {
                                    values.phone = phone;
                                    dispatch(CheckOtp(values))
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="flex flex-col justify-start items-start gap-y-8 py-8">
                                        <p className="">اعتبار سنجی صحت شماره همراه</p>
                                        <div className="flex flex-col gap-y-4 w-full">
                                            <label htmlFor="">کد 6 رقمی</label>
                                            <Field type="password" name='password' id="" className="border-2 border-zinc-900 p-2  rounded-md bg-slate-100 dark:bg-zinc-800 dark:outline-none" placeholder="لطفا کد پیامک شده را وارد کنید" />
                                            {errors.password && touched.password ? <span className='text-xs text-red-600'>{errors.password}</span> : null}
                                        </div>
                                        <button type="submit" className="w-full rounded-md bg-zinc-900 py-2 text-white dark:bg-[#FF7129]" disabled={load}>
                                            {
                                                load ? "لطفا منتظر بمانید" : "ورود"
                                            }
                                        </button>
                                        {
                                            timer === "00:00:00" ?
                                                <span onClick={() => dispatch(handleSendAgainCode())} className='text-xs text-sky-400 cursor-pointer'>ارسال مجدد کد</span>
                                                : timer
                                        }
                                    </Form>
                                )}
                            </Formik>
                            :
                            <>
                                <Formik
                                    initialValues={{
                                        phone: ""
                                    }}
                                    validationSchema={getOtpSchema}
                                    onSubmit={values => {
                                        dispatch(getOtp(values));
                                        setPhone(values.phone);
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="flex flex-col justify-start items-start gap-y-8 py-8">
                                            <p className="">  دریافت کد ورود به حساب کاربری</p>
                                            <div className="flex flex-col gap-y-4 w-full">
                                                <label htmlFor="">شماره همراه</label>
                                                <Field type="phone" name='phone' id="" className="border-2 border-zinc-900 p-2  rounded-md bg-slate-100 dark:bg-zinc-800 dark:outline-none" placeholder="شماره همراه خود را وارد کنید" />
                                                {errors.phone && touched.phone ? <span className='text-xs text-red-600'>{errors.phone}</span> : null}
                                            </div>
                                            <button type="submit" className="w-full rounded-md bg-zinc-900 py-2 text-white dark:bg-[#FF7129]" disabled={load}>
                                                {
                                                    load ? "لطفا منتظر بمانید" : "دریافت کد"
                                                }
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                                <span className="text-xs text-zinc-500 dark:text-white">
                                    ثبت نام در کافه ایران به منزبه موافقت با <span className="text-sky-400">قوانین</span> است
                                </span>
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default GetOtp;