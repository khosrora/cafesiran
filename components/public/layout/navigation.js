import Link from "next/link";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { UserIcon, PencilIcon, ShoppingCartIcon, HomeIcon } from '@heroicons/react/outline';
import { show_Modal_Login } from "../../../redux/auth/actions";


const Navigation = () => {

    const { asPath } = useRouter();
    const dispatch = useDispatch();
    const { auth, cartDetails } = useSelector(state => state);
    const load = auth.load;
    const order = cartDetails.orderList;
    const login = auth.login;

    return (
        <div className="fixed bottom-0 w-full flex flex-row-reverse justify-around items-center py-3 bg-gray-50 border-t-2 md:hidden dark:bg-zinc-800 dark:border-black">
            {
                load ?
                    <div className="flex flex-col justify-center items-center w-1/4 cursor-pointer">
                        <UserIcon className="h-4 w-4 dark:text-white" />
                        <p className="text-xs mt-1">منتظر بمانید</p>
                    </div> :
                    login ?
                        <Link href="/dashboard">
                            <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/dashboard" ? "text-orange-600" : null}`} >
                                <UserIcon className={`h-4 w-4 ${asPath === "/dashboard" ? "text-orange-600" : "dark:text-white"}`} />
                                <p className="text-xs mt-1">پنل کاربری</p>
                            </div>
                        </Link>
                        :
                        <div onClick={() => dispatch(show_Modal_Login(true))} className="flex flex-col justify-center items-center w-1/4 cursor-pointer">
                            <UserIcon className="h-4 w-4 dark:text-white" />
                            <p className="text-xs mt-1">ورود</p>
                        </div>
            }
            {/* <Link href='/blogs'>
                <div className="flex flex-col justify-center items-center w-1/4 cursor-pointer">
                    <PencilIcon className="h-4 w-4 dark:text-white" />
                    <p className="text-xs mt-1">بلاگ ها</p>
                </div>
            </Link> */}
            {
                login ?
                    order.length === 0 ? "" :
                        <Link href='/cafes/payment'>
                            <div className="relative flex flex-col justify-center items-center w-1/4 cursor-pointer">
                                <div className="absolute -top-2 text-red-600 rounded-full text-xs">{order.length}</div>
                                <ShoppingCartIcon className="h-4 w-4 dark:text-white" />
                                <p className="text-xs mt-1">سبد سفارش</p>
                            </div>
                        </Link> : null
            }
            <Link href='/features'>
                <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/features" ? "text-orange-600" : null}`}>
                    <PencilIcon className={`h-4 w-4 ${asPath === "/features" ? "text-orange-600" : "dark:text-white"}`} />
                    <p className="text-xs mt-1">ویژگی ها</p>
                </div>
            </Link>
            <Link href='/'>
                <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/" ? "text-orange-600" : null}`}>
                    <HomeIcon className={`h-4 w-4 ${asPath === "/" ? "text-orange-600" : "dark:text-white"}`} />
                    <p className="text-xs mt-1">خانه</p>
                </div>
            </Link>
        </div>
    );
}

export default Navigation;