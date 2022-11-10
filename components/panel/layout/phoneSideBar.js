import Link from "next/link";
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { HomeIcon, TemplateIcon, UserGroupIcon, ShoppingCartIcon, ChartSquareBarIcon, PhotographIcon, UserCircleIcon, CakeIcon, ClipboardListIcon, ChatAltIcon, AcademicCapIcon, MapIcon } from '@heroicons/react/outline'
import { logOutUser } from "../../../redux/auth/actions";
import { useSelector } from 'react-redux';
import { StateType } from "../../shared/utilities/constance/type";




const PhoneSideBar = ({ setMenu }) => {


    const { userDetails } = useSelector(state => state);
    const user = userDetails.user;
    const dispatch = useDispatch();
    const { asPath } = useRouter();
    const router = useRouter();

    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-50 dark:bg-slate-600 z-[800]" onClick={() => setMenu(false)}></div>
            <div className="fixed top-0 right-0 h-screen bg-white p-2 w-3/4 dark:bg-zinc-900 z-[2000]">
                <div className="px-4 py-4 h-full  overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <p>کافه <span className="text-amber-600">ایران</span></p>
                        <svg onClick={() => setMenu(false)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="my-8 w-full">
                        <ul className="flex flex-col gap-y-4 my-4">
                            <li>
                                <Link href="/">
                                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                        <HomeIcon className="w-6 h-6" />
                                        <p>خانه</p>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                        <UserCircleIcon className="w-6 h-6" />
                                        <p>پروفایل</p>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/myOrders">
                                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/myOrders" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                        <ShoppingCartIcon className="w-6 h-6" />
                                        <p>سفارشات </p>
                                    </a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/dashboard/myFavoriteCafe">
                                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/myFavoriteCafe" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                        <HeartIcon className="w-6 h-6" />
                                        <p>کافه های مورد علاقه</p>
                                    </a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/dashboard/reserved">
                                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/reserved" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                        <ClipboardListIcon className="w-6 h-6" />
                                        <p>رزرو شده ها</p>
                                    </a>
                                </Link>
                            </li>
                            {
                                user?.cafe?.state === StateType.Confirmed ?
                                    <>
                                        {/* <li>
                                            <Link href="/dashboard/plans">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/plans" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <ChartBarIcon className="w-6 h-6" />
                                                    <p>تعرفه ها</p>
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/dashboard/receptor">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/receptor" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <UserGroupIcon className="w-6 h-6" />
                                                    <p>سالن داران</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/createOrder">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/createOrder" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <CakeIcon className="w-6 h-6" />
                                                    <p>ساخت آیتم منو</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/allItems">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/allItems" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <ChartSquareBarIcon className="w-6 h-6" />
                                                    <p>آیتم های منو</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/qrCode">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/qrCode" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <TemplateIcon className="w-6 h-6" />
                                                    <p>ساخت qr کد</p>
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/dashboard/events">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/events" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <TemplateIcon className="w-6 h-6" />
                                                    <p>رویداد ها</p>
                                                </a>
                                            </Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/dashboard/createBlog">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/createBlog" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <PencilAltIcon className="w-6 h-6" />
                                                    <p>ایجاد بلاگ</p>
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/dashboard/galleryCafe">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/galleryCafe" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <PhotographIcon className="h-6 w-6" />
                                                    <p>گالری</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/suggestion">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/suggestion" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <ChatAltIcon className="h-6 w-6" />
                                                    <p>پیشنهادات</p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/map">
                                                <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/map" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                                    <MapIcon className="h-6 w-6" />
                                                    <p>ثبت موقعیت</p>
                                                </a>
                                            </Link>
                                        </li>
                                    </> : null
                            }
                            {/* <li>
                                <Link href="/dashboard/courses">
                                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/courses" ? 'text-amber-600' : 'text-zinc-900 dark:text-white'}`}>
                                        <AcademicCapIcon className="w-6 h-6" />
                                        <p>راهنما</p>
                                    </a>
                                </Link>
                            </li> */}
                        </ul>
                        {
                            user?.cafe === null ?
                                <Link href="/dashboard/requestCafe">
                                    <div className="justify-between items-center ml-8 w-full">
                                        <button className="bg-[#FF7129] px-4 py-2 rounded-md text-white w-full">درخواست ثبت مجموعه</button>
                                    </div>
                                </Link>
                                :
                                <Link href="/dashboard/editRequestCafe">
                                    <div className="justify-between items-center ml-8 w-full">
                                        <button className="bg-[#FF7129] px-4 py-2 rounded-md text-white w-full">ویرایش مجموعه</button>
                                    </div>
                                </Link>
                        }
                        <div className="justify-between items-center ml-8 w-full mt-2" onClick={() => {
                            dispatch(logOutUser());
                            router.push("/");
                        }}>
                            <button className="bg-[#FF7129] px-4 py-2 rounded-md text-white w-full">خروج</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhoneSideBar;