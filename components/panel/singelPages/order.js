import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeStateOrder, getDetailsOrder } from '../../../redux/cafe/actions';
import CardItem from '../../shared/cards/CardItem';
import Stable from '../../skillton/Stable';
import MomentDate from '../../shared/utilities/moment';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Order = () => {

    const router = useRouter();
    const id = router.query.id;

    const dispatch = useDispatch();
    const { cafeDetails, utilities } = useSelector(state => state);

    const connection = utilities.connection;
    const data = cafeDetails.detailsOrder;
    const load = cafeDetails.load;

    useEffect(() => {
        if (id && connection) dispatch(getDetailsOrder(id));
    }, [id, connection]);

    const handleStatusOrder = (state, id) => {
        dispatch(changeStateOrder(state, id))
    }


    if (data === null) return <Stable />
    return (
        <div className="">
            <div className="flex justify-start items-center mt-4">
                <Link href="/dashboard/myOrders">
                    <div className="border rounded-full flex justify-center items-center p-1 ml-2 cursor-pointer">
                        <ArrowRightIcon className='w-4 h-4' />
                    </div>
                </Link>
                <h1 className="text-xl  dark:text-white">جزئیات سفارش</h1>
            </div>
            <div className="flex flex-col mt-4">
                {
                    data.is_owner === "O" ?
                        <div className="bg-zinc-100 rounded-md dark:bg-zinc-800 p-2">
                            <div className="my-2">
                                <p> تغییر وضعیت سفارش</p>
                            </div>
                            <hr />
                            <div className="flex justify-between gap-x-4 mt-4">
                                {
                                    load ?
                                        <>
                                            <div className="border rounded-md p-1 px-4 text-white  dark:border-none animate-pulse">
                                                <div className="p-2 bg-slate-200 animate-pulse rounded-md w-full dark:bg-zinc-800"></div>
                                            </div>
                                            <div className="border rounded-md p-1 px-4 text-white  dark:border-none animate-pulse">
                                                <div className="p-2 bg-slate-200 animate-pulse rounded-md w-full dark:bg-zinc-800"></div>
                                            </div>
                                            <div className="border rounded-md p-1 px-4 text-white  dark:border-none animate-pulse">
                                                <div className="p-2 bg-slate-200 animate-pulse rounded-md w-full dark:bg-zinc-800"></div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div onClick={() => handleStatusOrder("C", data.id)} className={`border rounded-md p-1 px-4 text-white ${data.state === "C" ? 'bg-red-600' : 'bg-zinc-700'} cursor-pointer dark:border-none`}>
                                                <p className='text-[8px] lg:text-xs'> کنسل شد </p>
                                            </div>
                                            <div onClick={() => handleStatusOrder("P", data.id)} className={`border rounded-md p-1 px-4 text-white ${data.state === "P" ? 'bg-yellow-600' : 'bg-zinc-700'} cursor-pointer dark:border-none`}>
                                                <p className='text-[8px] lg:text-xs'> مشاهده نشده </p>
                                            </div>
                                            <div onClick={() => handleStatusOrder("D", data.id)} className={`border rounded-md p-1 px-4 text-white ${data.state === "D" ? 'bg-green-600' : 'bg-zinc-700'} cursor-pointer dark:border-none`}>
                                                <p className='text-[8px] lg:text-xs'> تایید شد </p>
                                            </div>
                                        </>
                                }
                            </div>
                        </div> : null
                }

                <div className="lg:flex p-4 w-full bg-zinc-100 rounded-md dark:bg-zinc-800 mt-2">
                    <p className='text-xs'>
                        {data.desc === null ? "توضیحاتی برای این سفارش ثبت نشده است" : data.desc}
                    </p>
                </div>
                <div className="mt-4">
                    <div className="flex flex-col justify-center items-start gap-x-2 lg:flex-row">
                        <div className="lg:flex p-4 w-full bg-zinc-100 rounded-md mb-2 lg:w-1/4 dark:bg-zinc-800">
                            <div className=" flex flex-col gap-y-4 px-4 text-sm w-full">
                                <div className="flex justify-between items-center">
                                    <p>شماره میز : </p>
                                    <div className="w-1/2">
                                        <span>{data.num_of_table === 0 ? "ثبت نشده است" : data.num_of_table}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>کد سفارش : </p>
                                    <div className="w-1/2">
                                        <span>{data.code}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>نام کافه : </p>
                                    <div className="w-1/2">
                                        <span>{data.cafe.persian_title}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>تاریخ ثبت : </p>
                                    <div className="w-1/2">
                                        <MomentDate time={data.registered_date} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>جمع کل : </p>
                                    <div className="w-1/2">
                                        <span>{new Intl.NumberFormat().format(data.total_price)} تومان</span>
                                    </div>
                                </div>

                                {
                                    data.is_owner ?
                                        <Link href={`/dashboard/order/print?id=${data.id}`}>
                                            <a target="_blank" className='bg-[#FF7129] w-full py-2 rounded-md text-white text-center'>
                                                پرینت جزئیات سفارش
                                            </a>
                                        </Link>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:w-3/4">
                            {
                                data.items.map((i, index) => <CardItem key={index} item={i} setMenu="" />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;