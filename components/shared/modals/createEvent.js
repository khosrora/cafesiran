import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XIcon } from '@heroicons/react/outline';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addEvent } from "../../../redux/cafeFeatures/actions";

// ! DATE IMPORT
import DatePicker from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"


const addEventValidation = Yup.object().shape({
    title: Yup.string("وارد کردن عنوان الزامی است").required("وارد کردن عنوان الزامی است").min(5, "بیش از حد کوتاه است").max(50, "بیش از حد بزرگ است"),
    content: Yup.string("وارد کردن عنوان الزامی است").required("وارد کردن عنوان الزامی است").min(10, "بیش از حد کوتاه است").max(255, "بیش از حد بزرگ است")
});

const CreateEvent = ({ setCreateForm }) => {

    const [startDate, setStartDate] = useState();
    const [time, setTime] = useState();
    const { cafeFaetures } = useSelector(state => state);
    const dispatch = useDispatch();
    const load = cafeFaetures.load;

    return (
        <>
            <div onClick={() => setCreateForm(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-4 rounded-md z-50 md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">ثبت رویداد</p>
                        <XIcon className="h-6 w-6 cursor-pointer" onClick={() => setCreateForm(false)} />
                    </div>
                    <Formik
                        initialValues={{
                            title: "",
                            content: "",
                        }}
                        validationSchema={addEventValidation}
                        onSubmit={values => {
                            values.date = startDate.toDate().toLocaleDateString('en-CA').replace("/", "-");
                            values.status = true;
                            values.time = `${time.toDate().getHours()}:${time.toDate().getMinutes()}`
                            dispatch(addEvent(values))
                            setCreateForm(false)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="flex flex-col justify-center gap-y-8 w-full mt-4">
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">عنوان</label>
                                    <Field name="title" type="text" className="rounded-md p-1 focus:outline-none dark:bg-zinc-800" />
                                    {errors.title && touched.title ? (<span className='text-red-600'>{errors.title}</span>) : null}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">توضیحات رویداد</label>
                                    <Field name="content" component="textarea" className="rounded-md p-1 focus:outline-none dark:bg-zinc-800" id="" cols="30" rows="5" />
                                    {errors.content && touched.content ? (<span className='text-red-600'>{errors.content}</span>) : null}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">تاریخ شروع رویداد</label>
                                    <DatePicker
                                        value={startDate}
                                        onChange={setStartDate}
                                        key={`${1}`}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        style={{
                                            width: "100%",
                                            boxSizing: "border-box",
                                            padding: "1.3rem",
                                            border: '1px solid rgb(226 232 240)'
                                        }}
                                        containerStyle={{
                                            width: "100%"
                                        }}
                                        placeholder="تاریخ شروع رویداد"
                                        className="rmdp-mobile" />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="">زمان شروع رویداد</label>
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
                                <button type='submit' className="w-full text-white bg-[#FF7129] rounded-md py-2 text-xs" disabled={load}>{load ? "در حال ارسال اطلاعات" : "ایجاد رویداد"}</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default CreateEvent;