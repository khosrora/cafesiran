import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { changeIsOpenAction, editTaxCafe } from '../../../redux/cafe/actions';
import { UsersIcon, ShoppingCartIcon, CalendarIcon, OfficeBuildingIcon } from '@heroicons/react/outline';
import MomentDate from '../../shared/utilities/moment';

const CafeProfile = ({ cafe, dispatch }) => {
    
    
    const [open, setOpen] = useState()
    const [tax, setTaxe] = useState(cafe.tax)
    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        setOpen(cafe?.is_open)
    }, [cafe?.is_open])
    useEffect(() => {
        if (tax == cafe.tax) {
            setEdit(false)
        } else {
            setEdit(true)
        }
    }, [tax])

    const handleChangeIsOpen = () => {
        dispatch(changeIsOpenAction(!open, cafe.id))
        setOpen(!open)
    }

    const changeTaxCafe = (tax) => {
        dispatch(editTaxCafe(cafe.id, { tax }))
    }

    return (
        <>
            <div className="w-full bg-zinc-100 flex justify-between items-center rounded-md py-4 px-4 dark:bg-zinc-800">
                <div className="">
                    <p className='text-[10px] font-bold lg:text-sm dark:text-zinc-200'>در حال حاضر مجموعه فعال است ؟</p>
                </div>
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                    <div className="ml-3 text-gray-700 font-medium text-[8px] lg:text-sm dark:text-zinc-200">
                        {
                            open ? "مجموعه باز است" : "مجموعه بسته است"
                        }
                    </div>
                    <div className="relative">
                        <input type="checkbox" id="toggleB" className="sr-only" checked={open} onChange={handleChangeIsOpen} />
                        <div className="block bg-zinc-50 w-14 h-8 rounded-full dark:bg-zinc-600"></div>
                        <div className="dot absolute left-1 top-1 bg-zinc-200 w-6 h-6 rounded-full transition dark:bg-zinc-700"></div>
                    </div>
                </label>
            </div>
            <div className="w-full bg-zinc-100 flex flex-col justify-start items-start rounded-md py-4 px-4 mt-2 dark:bg-zinc-800">
                <div className="">
                    <p className='text-[10px] font-bold lg:text-sm dark:text-zinc-200'> در حال حاضر مبلغ ارزش افزوده روی هر سفارش {cafe.tax} % محسابه میشود. در صورت نیاز عدد مورد نظر را وارد کنید و بر روی دکمه تغییر کلیک کنید.</p>
                </div>
                <div className="w-full bg-zinc-100 flex flex-col justify-between items-start gap-y-4 rounded-md py-4 mt-2 lg:flex-row lg:justify-start lg:items-center lg:gap-x-4 lg:gap-y-0 dark:bg-zinc-800">
                    <div className="">
                        <p className='text-[10px] font-bold lg:text-sm dark:text-zinc-200'>عدد درصد مبلغ ارزش افزوده هر سفارش :‌</p>
                    </div>
                    <div className="flex gap-x-2">
                        %<input max={40} value={tax} type="number" className='w-12' onChange={e => setTaxe(e.target.value)} />
                        {
                            !edit ? null :
                                <button onClick={() => changeTaxCafe(tax)} className="bg-[#FF7129] text-xs p-2 rounded-md text-white">تغییر ارزش افزوده</button>
                        }
                    </div>
                </div>
            </div>
            <div className="">
                <div className="mt-2">
                    <p>اطلاعات مجموعه :</p>
                </div>
                <div className="mt-2 w-full bg-zinc-100 rounded-md  py-4 px-4 dark:bg-zinc-800">
                    <div className="grid grid-cols-2 mt-2 gap-y-4 text-xs lg:text-sm">
                        <p> کد مجموعه :‌ <span>{cafe.code}</span> </p>
                        <Link href={`https://cafesiran.ir/link/${cafe.id}`}>
                            <a className='text-blue-400'>
                                لینک کوتاه مجموعه
                            </a>
                        </Link>
                        <div className="flex gap-x-2">
                            <p> اعتبار پنل تا تاریخ : </p>
                            <MomentDate time={cafe.charge_expired_date} />
                        </div>
                        <Link href={`https://cafesiran.ir/cafes/${cafe.id}`}>
                            <a className='text-blue-400'>
                                مشاهده منو
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-4">
                <Link href="/dashboard/store">
                    <div className="relative overflow-hidden flex flex-col gap-y-4 justify-start items-center border rounded-md p-14 cursor-pointer">
                        <div className="absolute -top-1 right-0 bg-yellow-500 p-2">
                            <span>جدید</span>
                        </div>
                        <OfficeBuildingIcon className='w-10 h-10' />
                        <p>فروشگاه</p>
                    </div>
                </Link>
                <Link href="/dashboard/loyal-users">
                    <div className="flex flex-col gap-y-4 justify-start items-center border rounded-md p-14 cursor-pointer">
                        <CalendarIcon className='w-10 h-10' />
                        <p>مشتریان وفادار</p>
                    </div>
                </Link>
                <Link href="/dashboard/myOrders">
                    <div className="flex flex-col gap-y-4 justify-start items-center border rounded-md p-14 cursor-pointer">
                        <ShoppingCartIcon className='w-10 h-10' />
                        <p>سفارشات</p>
                    </div>
                </Link>
                <Link href="/dashboard/vipUsers">
                    <div className="flex flex-col gap-y-4 justify-start items-center border rounded-md p-14 cursor-pointer">
                        <UsersIcon className='w-10 h-10' />
                        <p>کاربران عضو شده</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default CafeProfile;