import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { XIcon } from '@heroicons/react/outline';

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { errorMessage } from '../../../utils/toast';
import { requestVip } from '../../../redux/user/actions';


const customerSchema = Yup.object().shape({
    firstName: Yup.string().max(50, "نام بیش از حد بزرگ است").min(2, "نام بیش از حد کوتاه است").required("وارد کردن نام الزامی است"),
    lastName: Yup.string().max(50, "نام خانوادگی بیش از حد بزرگ است").min(2, "نام خانوادگی بیش از حد کوتاه است").required("وارد کردن نام خانوادگی الزامی است"),
});


const VipModal = ({ customerClubModal, SetCustomerClubModal }) => {

    const dispatch = useDispatch();

    const { auth, userDetails } = useSelector(state => state);
    const login = auth.login;
    const load = userDetails.load;
    console.log(load);
    const [date, setDate] = useState();



    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center">
                <div onClick={() => SetCustomerClubModal(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50"></div>
                <div className="bg-white rounded-md w-5/6 h-auto mt-12 m-auto p-2 px-4 py-6 overflow-y-scroll md:w-2/4 lg:w-1/4 md:py-8 dark:bg-zinc-900 z-[999]">
                    <div className="flex justify-between items-center">
                        <p className='text-lg font-bold'>عضویت در باشگاه</p>
                        <XIcon className='w-6 h-6' onClick={() => SetCustomerClubModal(false)} />
                    </div>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                        }}
                        validationSchema={customerSchema}
                        onSubmit={values => {
                            if (!login) return errorMessage("لطفا ابتدا وارد شوید");
                            if (!date) return errorMessage("لطفا تاریخ تولد را مشخص کنید");
                            values.birthdate = date?.toDate().toLocaleDateString('zh-Hans-CN').replaceAll("/", "-");
                            values.cafe = customerClubModal;
                            console.log(values);
                            dispatch(requestVip(values))
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="flex flex-col gap-y-4 mt-14">
                                <div className="flex flex-col gap-y-4">
                                    <p>نام<span className='text-red-600 text-xs'>(ضروری)</span></p>
                                    <Field type="text" name="firstName" className='w-full py-3 border rounded-md px-2' placeholder='نام خود را وارد کنید' />
                                    {errors.firstName && touched.firstName ? (<span className="text-xs text-red-600">{errors.firstName}</span>) : null}
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <p>نام خانوادگی<span className='text-red-600 text-xs'>(ضروری)</span></p>
                                    <Field type="text" name="lastName" className='w-full py-3 border rounded-md px-2' placeholder='نام خانوادگی خود را وارد کنید' />
                                    {errors.lastName && touched.lastName ? (<span className="text-xs text-red-600">{errors.lastName}</span>) : null}
                                </div>
                                <label htmlFor="">تاریخ <span className='text-red-600 text-xs'>(ضروری)</span></label>
                                <DatePicker
                                    value={date}
                                    onChange={setDate}
                                    key={`${1}`}
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    style={{
                                        width: "100%",
                                        boxSizing: "border-box",
                                        padding: "1.3rem",
                                        marginTop: ".5rem",
                                        border: '1px solid rgb(226 232 240)'
                                    }}
                                    containerStyle={{
                                        width: "100%"
                                    }}
                                    placeholder="مثال :‌ 1 / 2 / 1400"
                                    className="rmdp-mobile"
                                />
                                {
                                    load ?
                                    <button type='submit' className="bg-[#FF7129] w-full text-white py-3 rounded-md lg:w-1/2 lg:m-auto">
                                        در حال ارسال اطلاعات
                                    </button>
                                    :
                                        <button type='submit' className="bg-[#FF7129] w-full text-white py-3 rounded-md lg:w-1/2 lg:m-auto">
                                            عضویت
                                        </button>
                                }
                            </Form>
                        )}
                    </Formik>
                </div>


            </div>
        </>
    );
}

export default VipModal;


