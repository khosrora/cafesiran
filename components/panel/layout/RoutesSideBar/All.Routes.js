import Link from 'next/link';
import { HomeIcon, ShoppingCartIcon, UserCircleIcon, ClipboardListIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';




const AllRoutes = () => {

    const { asPath } = useRouter();

    return (
        <>
            <li>
                <Link href="/">
                    <a className={`flex justify-start items-center gap-x-4 py-2 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <HomeIcon className="h-6 w-6" />
                        <p>کافه ایران</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard">
                    <a className={`flex justify-start items-center gap-x-4 py-2 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <UserCircleIcon className="h-6 w-6" />
                        <p>داشبورد</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/myOrders">
                    <a className={`flex justify-start items-center gap-x-4 py-2 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/myOrders" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <ShoppingCartIcon className="w-6 h-6" />
                        <p>سفارشات</p>
                    </a>
                </Link>
            </li>
            {/* <li>
                            <Link href="/dashboard/myFavoriteCafe">
                                <a className={`flex justify-start items-center gap-x-4 py-2 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/myFavoriteCafe" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                                    <HeartIcon className="w-6 h-6" />
                                    <p>کافه های مورد علاقه</p>
                                </a>
                            </Link>
                        </li> */}
            <li>
                <Link href="/dashboard/reserved">
                    <a className={`flex justify-start items-center gap-x-4 py-2 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/reserved" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <ClipboardListIcon className="h-6 w-6" />
                        <p>رزرو شده ها</p>
                    </a>
                </Link>
            </li>
        </>
    );
}

export default AllRoutes;