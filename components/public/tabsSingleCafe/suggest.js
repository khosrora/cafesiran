import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { sendSuggest } from '../../../redux/global/actions';

const suggestSchema = Yup.object().shape({
    full_name: Yup.string().max(50, "نام بیش از حد بزرگ است").min(2, "نام بیش از حد کوتاه است"),
    message: Yup.string().max(1000, "توضیحات بیش از حد بزرگ است").min(10, "توضیحات بیش از حد کوتاه است").required("وارد کردن توضیحات الزامی است"),
});



const Suggest = ({ cafeId }) => {

    const { global } = useSelector(state => state);
    const load = global.load;
    const dispatch = useDispatch();

    return (
        <div className="max-w-7xl m-auto my-10">
            <div className="border rounded-md p-2 py-16 lg:w-2/4 lg:m-auto lg:px-4 dark:bg-zinc-800 dark:border-zinc-800">
                <div className="w-full text-center">
                    <p className="text-xl">انتقادات و پیشنهادات</p>
                    <p className="text-xs mt-4 w-5/6 m-auto">
                        انتقادات و پبشنهادات خود را با ما به اشتراک بگذارید تا بکوشیم در راستا بهبود ارائه خدمات به شما عزیزان
                    </p>
                </div>
                <Formik
                    initialValues={{
                        full_name: '',
                        message: ''
                    }}
                    validationSchema={suggestSchema}
                    onSubmit={values => {
                        values.cafe = cafeId;
                        dispatch(sendSuggest(values))
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="mt-8 flex flex-col gap-y-4 ">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="">نام و نام خانوادگی <span className='text-green-600 text-xs'>(وارد کردن نام الزامی نیست)</span></label>
                                <Field type="text" placeholder="نام شما ..." name="full_name" className="w-full p-2 rounded-md border focus:outline-none" />
                                {errors.full_name && touched.full_name ? <span className='text-xs text-red-600'>{errors.full_name}</span> : null}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="">پیام</label>
                                <Field component="textarea" name="message" type="text" className="w-full p-2 rounded-md border focus:outline-none" placeholder="متن پیام ..." />
                                {errors.message && touched.message ? <span className='text-xs text-red-600'>{errors.message}</span> : null}
                            </div>

                            <button type='submit' className="bg-amber-600 w-full text-white rounded-md py-2" disabled={load}>
                                {
                                    load ? "لطفا منتظر بمانید" : "ارسال نظر"
                                }
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Suggest;