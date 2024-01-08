import React, { useEffect, useState } from 'react'
import { PencilIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../../components/shared/other/alert';
import CreateCategories from './modals/CreateCategories'
import EditCategories from './modals/EditCategories';
import { getCategories } from '../../redux/cafeFeatures/actions';
import { useRouter } from 'next/router';



function CategoriesCafe() {

    const dispatch = useDispatch();
    const router = useRouter();

    const [text, setText] = useState(null)
    const [orderID, setOrderID] = useState(null)
    const [idEdit, setIdEdit] = useState(null)

    const { cafeFaetures } = useSelector(state => state)
    const categoriesCafe = cafeFaetures.categoriesCafe;
    const load = cafeFaetures.loadAddCategories;

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const addQuery = (id, title) => {
        router.query.cateId = id;
        router.query.title = title;
        router.push(router)
    }

    return (
        <div className='space-y-4'>
            <CreateCategories load={load} />
            <EditCategories load={load} text={text} setText={setText} id={idEdit} orderID={orderID} />
            {
                categoriesCafe.length === 0 ?
                    <Alert
                        title='هشدار'
                        message='در حال حاضر دسته بندی مجموعه شما خالی است'
                    />
                    :
                    <div className="text-right space-y-4">
                        <Alert
                            message='با کلیک بر روی ایجاد آیتم برای دسته بندی یک سفارش جدید ایجاد کنید'
                        />
                        <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                            <thead className="text-xs lg:text-sm ">
                                <tr>
                                    <th scope="col" className="hidden lg:flex py-3 px-6">
                                        نام
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        #
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        #
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categoriesCafe.map((i, index) =>
                                        <tr key={index} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                                            <td className='p-2'>{i.title}</td>
                                            <td className='p-2'>
                                                <span onClick={() => addQuery(i.id, i.title)} className="cursor-pointer">ایجاد آیتم</span>
                                            </td>
                                            <td onClick={() => {
                                                document.getElementById('my_modal_3').showModal();
                                                setIdEdit(i.id)
                                                setText(i.title)
                                                setOrderID(i.order)
                                            }} className='p-2 flex justify-start items-center gap-x-2 cursor-pointer'>
                                                <PencilIcon className='w-4 h-4' />
                                                <small>ویرایش</small>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default CategoriesCafe