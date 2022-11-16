import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { LightBulbIcon, MoonIcon, UserIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import { show_Modal_Login } from "../../../redux/auth/actions";
import SideBarPhone from "./sideBarPhone";

const Header = () => {


    const { auth, cartDetails, global } = useSelector(state => state);
    const load = auth.load;
    const login = auth.login;
    const order = cartDetails.orderList;
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const { asPath } = useRouter();

    const nameCafe = global?.cafe?.persian_title;

    useEffect(() => {
        setMounted(true);
    }, [])

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div onClick={() => setTheme('light')}>
                    <LightBulbIcon className="h-6 w-6 text-[#FF7129] cursor-pointer" />
                </div>
            )
        }
        else {
            return (
                <div onClick={() => setTheme('dark')}>
                    <MoonIcon className="h-6 w-6 cursor-pointer" />
                </div>
            )
        }
    };

    return (
        <nav className="max-w-[1800px] p-2 m-auto">
            <div className="m-auto max-w-8xl p-6 flex flex-row-reverse justify-between items-center md:flex-row">
                <div className="">
                    <ul className='flex justify-center items-center'>
                        <div className="hidden md:flex ">
                            <li>
                                <Link href="/"><a title="خانه" className={`${asPath === "/" ? 'text-[#FF7129]' : null}`}>خانه</a></Link>
                            </li>
                            {
                                asPath.includes("/cafes/") ?
                                    <li>
                                        <p className={`${asPath.includes("/cafes/") ? 'text-[#FF7129]' : null} mr-8`}>منو {`${nameCafe}`}</p>
                                    </li> :
                                    <>
                                        <li className="mr-8">
                                            <Link href="/aboutUs"><a title="درباره ما" className={`${asPath === "/aboutUs" ? 'text-[#FF7129]' : null}`}>درباره ما</a></Link>
                                        </li>
                                        <li className='mr-8'>
                                            <Link href="/contactUs"><a title="تماس با ما" className={`${asPath === "/contactUs" ? 'text-[#FF7129]' : null}`}>تماس با ما</a></Link>
                                        </li>
                                        {/* <li className='mr-8'>
                                            <Link href="/blogs"><a title="بلاگ ها" className={`${asPath === "/blogs" ? 'text-[#FF7129]' : null}`}>بلاگ ها</a></Link>
                                        </li> */}
                                        <li className='mr-8'>
                                            <Link href="/features"><a title="امکانات کافه ایران" className={`${asPath === "/features" ? 'text-[#FF7129]' : null}`}>امکانات کافه ایران</a></Link>
                                        </li>
                                        <li className='mr-8'>
                                            <Link href="/packages"><a title="تعرفه های منو دیجیتال" className={`${asPath === "/packages" ? 'text-[#FF7129]' : null}`}>تعرفه ها</a></Link>
                                        </li>
                                    </>
                            }

                            {
                                login ?
                                    order.length === 0 ? "" :
                                        <li className='mr-8 relative'>
                                            <Link href="/cafes/payment"><a title="سبد سفارش" className={`${asPath === "/cafes/payment" ? 'text-[#FF7129]' : null}`}>سبد سفارش</a></Link>
                                            <div className="absolute flex justify-center items-center top-0 -left-4 text-red-600 rounded-full text-xs">{order.length}</div>
                                        </li>
                                    : null
                            }
                        </div>
                        <li className="mr-8">
                            {renderThemeChanger()}
                        </li>
                    </ul>
                </div>
                {
                    asPath.includes("/cafes/") ? <p className="text-sm md:hidden">منو {`${nameCafe}`}</p>
                        :
                        <div onClick={() => setSidebar(true)} className="md:hidden">
                            <MenuAlt3Icon className="w-6 h-6" />
                        </div>
                }
                {
                    load ?
                        <div className="hidden bg-[#FF7129] px-8 py-2 text-white rounded-md md:flex justify-center items-center cursor-pointer">
                            <UserIcon className='w-6 h-6 ml-4' />
                            در حال دریافت اطلاعات
                        </div> :
                        login ?
                            <Link href="/dashboard">
                                <div className="hidden bg-[#FF7129] px-8 py-2 text-white rounded-md md:flex justify-center items-center cursor-pointer">
                                    <UserIcon className='w-6 h-6 ml-4' />
                                    پنل کاربری
                                </div>
                            </Link>
                            :
                            <div onClick={() => { dispatch(show_Modal_Login(true)) }} className="hidden bg-[#FF7129] px-8 py-2 text-white rounded-md md:flex justify-center items-center cursor-pointer">
                                <UserIcon className='w-6 h-6 ml-4' />
                                ورود
                            </div>
                }
            </div>
            {
                sidebar ? <SideBarPhone asPath={asPath} setSidebar={setSidebar} /> : null
            }
        </nav>
    );
}

export default Header;