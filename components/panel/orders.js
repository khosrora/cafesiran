import { useState, useEffect } from 'react';

import Link from "next/link";


import { CheckIcon, ClockIcon, ExclamationIcon } from '@heroicons/react/outline';
import Stable from './../skillton/Stable';
import MomentDate from '../shared/utilities/moment';
import Paginate from '../shared/other/paginate';

import { useDispatch } from 'react-redux';
import { addWsOrder } from '../../redux/cafe/actions';



const Orders = ({
    cafeDetails,
    page,
    setPage
}) => {


    const next = cafeDetails.next;
    const orders = cafeDetails.ordersCafe.results;
    const load = cafeDetails.loadOrdersCafe;

    // if (error) return <NoConnection />
    if (load) return <Stable />

    if (orders.length === 0) {
        return <div className="w-full text-center my-36">
            <p>در حال حاضر هیج سفارشی ثبت نشده است</p>
        </div>
    }
    return (
        <div className=''>
            <div className="flex justify-between items-center mt-4">
                <h1 className="text-xs md:text-xl dark:text-white">سفارشات من</h1>
                <Link href="/dashboard/order/search">
                    <button className="bg-[#FF7129] w-48 px-4 py-2 rounded-md text-white">جست و جو پیشرفته</button>
                </Link>
            </div>
            <div className=" text-right mt-8">
                <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                    <thead className="text-xs lg:text-sm ">
                        <tr>
                            <th scope="col" className="hidden lg:flex py-3 px-6">
                                شماره میز
                            </th>
                            <th scope="col" className="py-3 px-6">
                                وضعیت
                            </th>
                            <th scope="col" className="py-3 px-6">
                                تاریخ ثبت
                            </th>
                            <th scope="col" className="hidden lg:flex py-3 px-6">
                                مبلغ
                            </th>
                            <th scope="col" className="py-3 px-6">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((i, index) =>
                                <tr key={index} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                                    <td className="hidden lg:flex py-4 px-6">
                                        {i.num_of_table}
                                    </td>
                                    <td className="py-4 px-6">
                                        {
                                            i.state === "C" ? <ExclamationIcon className='w-4 h-4 text-red-600' /> :
                                                i.state === "D" ?
                                                    <CheckIcon className='w-4 h-4 text-green-600' />
                                                    : <ClockIcon className='w-4 h-4 text-yellow-600' />
                                        }
                                    </td>
                                    <td className="py-4 px-6">
                                        <MomentDate time={i.registered_date} />
                                    </td>
                                    <td className="hidden lg:flex py-4 px-6">
                                        {new Intl.NumberFormat().format(i.total_price)} تومان
                                    </td>
                                    <td className="py-4 px-6">
                                        <Link href={`/dashboard/order/${i.id}`}>
                                            <div className="text-sky-400 flex justify-start items-center cursor-pointer">
                                                <a className="">مشاهده</a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Paginate next={next} page={page} setPage={setPage} count={orders.length} />
        </div>
    );
}

export default Orders;