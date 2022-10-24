import Link from "next/link";
import { HomeIcon, TemplateIcon, ChartBarIcon, ChartSquareBarIcon, ShoppingCartIcon, ChatAltIcon, PencilIcon, PhotographIcon, CakeIcon, UserCircleIcon, ClipboardListIcon, AcademicCapIcon, MapIcon, UserGroupIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { StateType } from "../../shared/utilities/constance/type";


const SideBarPanel = () => {

    const { userDetails } = useSelector(state => state);
    const user = userDetails.user;
    const { asPath } = useRouter();

    return (
        <div className="hidden lg:flex lg:col-span-1 w-full h-full bg-zinc-100 py-4 border-l-2 text-sm  dark:bg-zinc-900 dark:border-zinc-800">
            <div className="px-8 text-md w-full">
                <div className="mt-4">
                    <ul className="flex flex-col gap-y-4">
                        <li>
                            <Link href="/">
                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                    <HomeIcon className="h-6 w-6" />
                                    <p>خانه</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard">
                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                    <UserCircleIcon className="h-6 w-6" />
                                    <p>پروفایل</p>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/myOrders">
                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/myOrders" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                    <ShoppingCartIcon className="w-6 h-6" />
                                    <p>سفارشات</p>
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/dashboard/myFavoriteCafe">
                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/myFavoriteCafe" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                    <HeartIcon className="w-6 h-6" />
                                    <p>کافه های مورد علاقه</p>
                                </a>
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/dashboard/reserved">
                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/reserved" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                    <ClipboardListIcon className="h-6 w-6" />
                                    <p>رزرو شده ها</p>
                                </a>
                            </Link>
                        </li>
                        {
                            user?.cafe?.state === StateType.Confirmed ?
                                <>
                                    {/* <li>
                                        <Link href="/dashboard/plans">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/plans" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <ChartBarIcon className="w-6 h-6" />
                                                <p>تعرفه ها</p>
                                            </a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/dashboard/receptor">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/receptor" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <UserGroupIcon className="h-6 w-6" />
                                                <p>سالن داران</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/createOrder">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/createOrder" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <CakeIcon className="h-6 w-6" />
                                                <p>ساخت آیتم منو</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/allItems">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/allItems" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <ChartSquareBarIcon className="h-6 w-6" />
                                                <p>آیتم های منو</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/qrCode">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/qrCode" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <TemplateIcon className="h-6 w-6" />
                                                <p>ساخت qr کد</p>
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/dashboard/events">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/events" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <TemplateIcon className="h-6 w-6" />
                                                <p>رویداد ها</p>
                                            </a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/dashboard/galleryCafe">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/galleryCafe" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <PhotographIcon className="h-6 w-6" />
                                                <p>گالری</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/suggestion">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/suggestion" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <ChatAltIcon className="h-6 w-6" />
                                                <p>پیشنهادات</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/map">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/map" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <MapIcon className="h-6 w-6" />
                                                <p>ثبت موقعیت</p>
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/dashboard/createBlog">
                                            <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/createBlog" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                <PencilAltIcon className="h-6 w-6" />
                                                <p>ایجاد بلاگ</p>
                                            </a>
                                        </Link>
                                    </li> */}
                                </> : null
                        }
                        {/* <li>
                            <Link href="/dashboard/courses">
                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800 ${asPath === "/dashboard/courses" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                    <AcademicCapIcon className="w-6 h-6" />
                                    <p>راهنما</p>
                                </a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default SideBarPanel;