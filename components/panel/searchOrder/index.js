import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersSearch } from '../../../redux/cafe/actions';

import Paginate from '../../shared/other/paginate';
import MomentDate from '../../shared/utilities/moment';
import Link from 'next/link';
import { CheckIcon, ClockIcon, ExclamationIcon } from '@heroicons/react/outline';
import Stable from '../../skillton/Stable';
import CardItem from '../../shared/cards/CardItem';
import { errorMessage } from '../../../utils/toast';

// ! DATE IMPORT
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"


const SearchOrder = () => {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const { cafeDetails } = useSelector(state => state);
    const ordresDataSearch = cafeDetails.searchData.orders;
    const totalPrice = cafeDetails.searchData.total_prices;
    const mostPurchesd = cafeDetails.searchData.most_purchesd;
    const load = cafeDetails.load;
    console.log(ordresDataSearch);

    const dispatch = useDispatch()

    const getDataWithDate = async () => {
        try {
            if (!startDate || !endDate) return errorMessage("لطفا ابتدا بازه زمانی را مشخص کنید")
            let data = {
                start_date: startDate.toDate().toLocaleDateString('en-CA').replace("/", "-"),
                end_date: endDate.toDate().toLocaleDateString('en-CA').replace("/", "-")
            }
            dispatch(getOrdersSearch(data))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex gap-y-4 flex-col justify-center ">
            <div className="mt-4">
                <h1 className="text-xl dark:text-white">جست و جوی پیشرفته سفارشات</h1>
            </div>
            <div className="flex flex-col justify-center items-start gap-y-2">
                <p>تاریخ سفارشات</p>
                <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3">
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
                        placeholder="از تاریخ"
                        className="rmdp-mobile" />
                    <DatePicker
                        value={endDate}
                        onChange={setEndDate}
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
                        placeholder="تا تاریخ"
                        className="rmdp-mobile" />
                    <div className="cursor-pointer" onClick={() => getDataWithDate()}>
                        <p className='bg-[#FF7129] w-full block text-center rounded-md text-white py-3 text-sm'>مشاهده بر اساس تاریخ</p>
                    </div>
                </div>
            </div>
            {
                load ? <Stable /> :
                    mostPurchesd && ordresDataSearch ?
                        <div className=''>
                            <div className="flex justify-between items-center mt-4">
                                {
                                    load ? <p>در حال شمارش</p> :
                                        <p className="testxs lg:text-sm"> 3 سفارش برتر در این بازه</p>
                                }
                            </div>
                            {
                                load ?
                                    <div className="w-full">
                                        <Stable />
                                    </div> :
                                    <div className="border rounded mt-4 p-2 dark:border-zinc-900">
                                        <div className="grid grid-cols-1 gap-y-2 gap-x-2 lg:grid-cols-3">
                                            {
                                                mostPurchesd &&
                                                mostPurchesd.map((i, index) =>
                                                    <CardItem key={index} item={i} setMenu="" orderCount={i.order_count} />
                                                )
                                            }
                                        </div>
                                    </div>
                            }
                            <div className="flex justify-between items-center mt-4">
                                <h1 className="text-xs md:text-sm dark:text-white">سفارشات ثبت شده بر اساس تاریخ</h1>
                                {
                                    load ? <p>در حال شمارش</p> :
                                        <p className="text-xs lg:text-sm"> <span className="text-xs lg:text-sm">کل مبلغ ثبت شده :‌</span> {new Intl.NumberFormat().format(totalPrice)} تومان </p>
                                }
                            </div>
                            {
                                load ?
                                    <div className="w-full">
                                        <Stable />
                                    </div>
                                    :
                                    <div className=" text-right mt-4">
                                        <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                                            <thead className="text-xs lg:text-sm ">
                                                <tr>
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
                                                    ordresDataSearch &&
                                                    ordresDataSearch.map((i, index) =>
                                                        <tr key={index} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
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
                            }
                            {/* <Paginate next={data.next} page={page} setPage={setPage} count={data.count} /> */}
                        </div> : null
            }
        </div>
    );
}

export default SearchOrder;