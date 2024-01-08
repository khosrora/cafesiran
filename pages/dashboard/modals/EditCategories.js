import React, { useEffect, useRef } from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editCategories } from '../../../redux/cafeFeatures/actions';
import { XIcon } from '@heroicons/react/outline';


const createCateMenuSchema = Yup.object().shape({
    title: Yup.string().min(2, 'نام دسته بندی بیش از حد کوتاه است').max(50, 'نام دسته بندی بیش از حد بزرگ است').required('وارد کردن نام دسته بندی الزامی است'),
});

function EditCategories({ load, id, text, setText, orderID }) {

    const closeModal = useRef();
    const dispatch = useDispatch();

    const close = () => {
        closeModal.current.click()
        setText(null)
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-zinc-100 dark:bg-zinc-800">
                    <div className="flex justify-end items-center">
                        <XIcon className='w-8 h-8' onClick={close} />
                    </div>
                    {
                        !!text &&
                        <Formik
                            initialValues={{
                                title: text,
                                order: orderID
                            }}
                            validationSchema={createCateMenuSchema}
                            onSubmit={(values, { resetForm }) => {
                                dispatch(editCategories({ values, id }))
                                close();
                                resetForm();
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="flex flex-col justify-between items-center w-full space-y-4">
                                    <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                                        <label htmlFor="type">اولویت نمایش</label>
                                        <Field name="order" as="select" className="w-full p-2 rounded-md border bg-white focus:outline-none text-slate-400 dark:border-none dark:bg-zinc-700">
                                            <option value={1}>اول</option>
                                            <option value={2}>دوم</option>
                                            <option value={3}>سوم</option>
                                            <option value={4}>چهارم</option>
                                        </Field>
                                        {errors.order && touched.order ? (<span className='text-red-600'>{errors.order}</span>) : null}
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                                        <label className="" htmlFor="per-name">عنوان دسته بندی</label>
                                        <Field name="title" className="w-full p-2 rounded-md border focus:outline-none dark:border-none dark:bg-zinc-700" id="per-name" type="text" placeholder="عنوان دسته بندی را به فارسی وارد کنید" />
                                        {errors.title && touched.title ? (<span className='text-red-600'>{errors.title}</span>) : null}
                                    </div>
                                    <button type='submit' className="bg-[#FF7129] w-full px-4 py-2 rounded-md text-white" disabled={load}>
                                        {
                                            load ? 'در حال ایجاد دسته بندی' : 'ویرایش دسته بندی'
                                        }
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    }
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn hidden" ref={closeModal}>Close</button>
                        </form>
                    </div>

                </div>
            </dialog>
        </>
    )
}

export default EditCategories