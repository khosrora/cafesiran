import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { changeIsOpenAction } from '../../../redux/cafe/actions';
import { UsersIcon } from '@heroicons/react/outline';

const CafeProfile = ({ cafe, dispatch }) => {

    const [open, setOpen] = useState()

    useEffect(() => {
        setOpen(cafe?.is_open)
    }, [cafe?.is_open])

    const handleChangeIsOpen = () => {
        dispatch(changeIsOpenAction(!open, cafe.id))
        setOpen(!open)
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
            <div className="mt-2">
                <p>اطلاعات مجموعه :</p>
            </div>
            <div className="mt-2 w-full bg-zinc-100 rounded-md py-4 px-4 dark:bg-zinc-800">
                <div className="grid grid-cols-2 mt-2 gap-y-4 text-xs lg:text-sm">
                    <p> کد مجموعه :‌ <span>{cafe.code}</span> </p>
                    <Link href={`https://cafesiran.ir/link/${cafe.id}`}>
                        <a>
                            لینک کوتاه مجموعه
                        </a>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <Link href="/dashboard/vipUsers">
                    <div className="flex flex-col gap-y-4 justify-start items-center border rounded-md p-14 cursor-pointer">
                        <UsersIcon className='w-10 h-10' />
                        <p>کاربران عضو</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default CafeProfile;