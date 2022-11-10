import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import LayoutPanel from "../../components/panel/layout/layoutPanel";
import ReceptorTable from "../../components/panel/receptorTable";
import { createReceptor } from '../../redux/cafeFeatures/actions';



const ReceptorValidation = Yup.object().shape({
    phone: Yup.string().matches(/^09[0-9]{9}$/, "شماره تماس وارد شده معتبر نیست").required('وارد کردن شماره تماس کافه الزامی است'),
});



const Receptor = () => {

    const dispatch = useDispatch()
    const { cafeFaetures } = useSelector(state => state);
    const load = cafeFaetures.load;

    return (
        <LayoutPanel>
            <h1>سالن داران</h1>
            <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3">
                <Formik
                    initialValues={{
                        phone: '',
                    }}
                    validationSchema={ReceptorValidation}
                    onSubmit={values => {
                        dispatch(createReceptor(values))
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="bg-zinc-100 w-full rounded-md flex flex-col justify-center items-center p-2 py-4 gap-y-2 lg:h-40 dark:bg-zinc-800">
                                <div className=" relative flex flex-col justify-start items-start w-full">
                                    <p className="bg-zinc-100 absolute -top-3 right-4 dark:bg-zinc-800">شماره همراه سالن دار</p>
                                    <Field type="text" name="phone" className="bg-zinc-100 w-full p-2 py-4 rounded-md border text-xs dark:bg-zinc-800 dark:border-zinc-400 dark:outline-none lg:text-sm" placeholder="*******0915" />
                                    {errors.phone && touched.phone ? (<span className='text-xs my-1 text-red-600'>{errors.phone}</span>) : null}
                                </div>
                                {
                                    load ?
                                        <button className="bg-[#FF7129] text-center w-full rounded-md py-2 md:w-3/4">
                                            لطفا منتظر بمانید
                                        </button>
                                        :
                                        <button type='submit' className="bg-[#FF7129] text-center w-full rounded-md py-2 md:w-3/4">
                                            ثبت
                                        </button>
                                }
                            </div>
                        </Form>
                    )}
                </Formik>
                <ReceptorTable dispatch={dispatch} />
            </div>
        </LayoutPanel>
    );
}

export default Receptor;