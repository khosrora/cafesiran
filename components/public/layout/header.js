import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { LightBulbIcon, MoonIcon, UserIcon } from '@heroicons/react/outline'
import { show_Modal_Login } from "../../../redux/auth/actions";

const Header = () => {

    const { auth, cartDetails } = useSelector(state => state);
    const load = auth.load;
    const login = auth.login;
    const order = cartDetails.orderList;
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);
    const { asPath } = useRouter();

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
                                <Link href="/"><a className={`${asPath === "/" ? 'text-[#FF7129]' : null}`}>خانه</a></Link>
                            </li>
                            <li className="mr-8">
                                <Link href="/aboutUs"><a className={`${asPath === "/aboutUs" ? 'text-[#FF7129]' : null}`}>درباره ما</a></Link>
                            </li>
                            <li className='mr-8'>
                                <Link href="/contactUs"><a className={`${asPath === "/contactUs" ? 'text-[#FF7129]' : null}`}>تماس با ما</a></Link>
                            </li>
                            {/* <li className='mr-8'>
                                <Link href="/blogs"><a className={`${asPath === "/blogs" ? 'text-[#FF7129]' : null}`}>بلاگ ها</a></Link>
                            </li> */}
                            <li className='mr-8'>
                                <Link href="/features"><a className={`${asPath === "/features" ? 'text-[#FF7129]' : null}`}>امکانات کافه ایران</a></Link>
                            </li>
                            {
                                login ?
                                    order.length === 0 ? "" :
                                        <li className='mr-8 relative'>
                                            <Link href="/cafes/payment"><a className={`${asPath === "/cafes/payment" ? 'text-[#FF7129]' : null}`}>سبد سفارش</a></Link>
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
                <Link href="/">
                    <p className="flex  md:hidden">کافه <span className="mr-2 text-[#FF7129]">ایران</span></p>
                </Link>
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
        </nav>
    );
}

export default Header;