import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { errorMessage } from '../../../utils/toast';
import { sendReserve } from '../../../redux/global/actions';

const reserveSchema = Yup.object().shape({
    full_name: Yup.string().max(50, "نام بیش از حد بزرگ است").min(2, "نام بیش از حد کوتاه است").required("وارد کردن نام الزامی است"),
    phone: Yup.string().matches("^09([1-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
    message: Yup.string().max(500, "توضیحات بیش از حد بزرگ است").min(10, "توضیحات بیش از حد کوتاه است").required("وارد کردن توضیحات الزامی است"),
});



const Reserve = ({ cafeId }) => {

    const { global , auth } = useSelector(state => state);
    const login = auth.login;
    const load = global.load;
    const dispatch = useDispatch();
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    
    return (
        <Formik
            initialValues={{
                full_name: '',
                phone: '',
                message: ''
            }}
            validationSchema={reserveSchema}
            onSubmit={values => {
                if(!login) return errorMessage("لطفا ابتدا وارد شوید");
                if (!time || !date) return errorMessage("لطفا تاریخ و زمان را مشخص کنید");
                values.time = `${time.toDate().getHours()}:${time.toDate().getMinutes()}`;
                values.date = date?.toDate().toLocaleDateString('zh-Hans-CN').replaceAll("/", "-");
                values.cafe = cafeId;
                dispatch(sendReserve(values))
            }}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col justify-center items-start my-4 border  py-8 px-4  gap-y-8 max-w-7xl mx-auto rounded-md lg:my-16 dark:bg-zinc-800 dark:border-zinc-800 ">
                    <div className="flex flex-col justify-center items-start w-full gap-y-4 lg:flex-row lg:gap-x-2">
                        <div className="flex flex-col justify-center items-start w-full">
                            <label htmlFor="">نام و نام خانوادگی <span className='text-red-600 text-xs'>(ضروری)</span></label>
                            <Field className="w-full border p-2 mt-2  rounded-md " placeholder="نام خود را اینجا بنویسید" type="text" name="full_name" id="" />
                            {errors.full_name && touched.full_name ? (<span className="text-xs text-red-600">{errors.full_name}</span>) : null}
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label htmlFor="">شماره تماس <span className='text-red-600 text-xs'>(ضروری)</span></label>
                            <Field className="w-full border p-2 mt-2  rounded-md " placeholder="شماره تماس خود را اینجا بنویسید" name="phone" id="" />
                            {errors.phone && touched.phone ? (<span className="text-xs text-red-600">{errors.phone}</span>) : null}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full gap-y-4 lg:flex-row lg:gap-x-2">
                        <div className="flex flex-col justify-center items-start w-full">
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
                                className="rmdp-mobile" />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label htmlFor="">ساعت <span className='text-red-600 text-xs'>(ضروری)</span></label>
                            <DatePicker
                                disableDayPicker
                                format="HH:mm"
                                plugins={[
                                    <TimePicker hideSeconds key="1" />
                                ]}
                                value={time} onChange={setTime}
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
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                placeholder="مثال :‌18:‌00" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="">پیام <span className='text-red-600 text-xs'>(ضروری)</span></label>
                        <Field component="textarea" className="w-full border  mt-2 p-2 rounded-md " placeholder="پیام خود را اینجا بنویسید" name="message" id="" cols="30" rows="10"></Field>
                        {errors.message && touched.message ? (<span className="text-xs text-red-600">{errors.message}</span>) : null}
                    </div>
                    <button type='submit' className="bg-amber-600 w-full text-white py-2 rounded-md lg:w-1/2 lg:m-auto" disabled={load}>
                        {
                            load ? "لطفا منتظر بمانید" : "ارسال درخواست رزرو"
                        }
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default Reserve;