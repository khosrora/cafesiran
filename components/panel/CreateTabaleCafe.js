import React, { useEffect } from 'react'

import { InformationCircleIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addTabale, deleteTabale, getTabales } from '../../redux/cafeFeatures/actions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Stable from '../skillton/Stable';
import PaginateQuery from '../shared/other/paginateQuery';

function CreateTabaleCafe() {

    const router = useRouter()
    const { cafeFaetures, utilities } = useSelector(state => state);
    const { page } = router.query;
    const dispatch = useDispatch();

    const tables = cafeFaetures.tables;
    const load = cafeFaetures.load;
    const next = cafeFaetures.next;
    const connection = utilities.connection;


    useEffect(() => {
        if (connection && !!page) dispatch(getTabales(page));
    }, [page, connection])

    const handleAddTabale = () => {
        dispatch(addTabale());
    }

    const handleDeleteTabale = () => {
        dispatch(deleteTabale());
        window.location.reload()
    }

    return (
        <div className='space-y-6'>
            <div className="flex flex-col space-y-4">
                <div className="flex justify-start items-center gap-x-4">
                    <InformationCircleIcon className='w-4 h-4' />
                    <p className='text-xs lg:text-base'>
                        میز و qr code میز به طور خودکار و به ترتیب ساخته می شوند.
                    </p>
                </div>
                {
                    tables.length !== 0 &&
                    <div className="flex justify-start items-center gap-x-4">
                        <InformationCircleIcon className='w-4 h-4' />
                        <p className='text-xs lg:text-base'>
                            حذف به صورت خودکار و از آخرین شماره میز اتفاق می افتد .
                        </p>
                    </div>
                }
            </div>

            <div className="flex justify-start items-center gap-x-4">
                <button className="text-white bg-amber-500 px-2 rounded-md py-1" onClick={() => handleAddTabale()}>ایجاد میز جدید</button>
                {
                    tables.length !== 0 &&
                    <button className="text-white bg-red-700 px-2 rounded-md py-1" onClick={() => handleDeleteTabale()}>حذف میز</button>
                }
            </div>

            <div className="mt-8 text-center">
                {
                    load ? <Stable /> :
                        <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white ">
                            <thead className="text-xs lg:text-md">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        شماره میز
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        لینک qr code
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tables.map(i =>
                                        <tr key={i.id} className='odd:bg-white bg-zinc-100 text-xs lg:text-base dark:odd:bg-zinc-800 dark:bg-zinc-900'>
                                            <td>
                                                <p>{i.number}</p>
                                            </td>
                                            <td className='py-4'>
                                                <Link href={i.qr_code} >
                                                    <a className='text-blue-400' target='_blank'>
                                                        qr code میز
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                }
            </div>
            <PaginateQuery next={next} page={page} router={router} />
        </div>
    )
}

export default CreateTabaleCafe