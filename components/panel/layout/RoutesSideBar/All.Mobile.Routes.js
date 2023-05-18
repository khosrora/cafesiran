import Link from "next/link";
import { HomeIcon, ShoppingCartIcon, UserCircleIcon, ClipboardListIcon } from '@heroicons/react/outline'

import { useRouter } from "next/router";




const AllMobileRoutes = () => {

    const { asPath } = useRouter();

    return (
        <>
            <li>
                <Link href="/">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <HomeIcon className="w-6 h-6" />
                        <p>خانه</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <UserCircleIcon className="w-6 h-6" />
                        <p>پروفایل</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/myOrders">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/myOrders" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <ShoppingCartIcon className="w-6 h-6" />
                        <p>سفارشات </p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/reserved">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/reserved" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <ClipboardListIcon className="w-6 h-6" />
                        <p>رزرو شده ها</p>
                    </a>
                </Link>
            </li>
        </>
    );
}

export default AllMobileRoutes;