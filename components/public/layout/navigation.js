import Link from "next/link";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { UserIcon, PencilIcon, ShoppingCartIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/outline';
import { show_Modal_Login } from "../../../redux/auth/actions";
import { toast } from "react-hot-toast";

const Navigation = () => {

    const { asPath, query } = useRouter();
    const router = useRouter();
    const cafeId = query.cafeId;
    const dispatch = useDispatch();
    const { auth, cartDetails } = useSelector(state => state);
    const load = auth.load;
    const order = cartDetails.orderList;
    const login = auth.login;
    const tabale = query.table;

    console.log(router.route);

    const goToBasket = () => {
        if (order.length === 0) {
            toast.error('حداقل یک آیتم انتخاب کنید')
        } else {
            router.push(`/cafes/payment?tabale=${tabale}`)
        }
    }

    return (
        <div className="fixed bottom-0 w-full pb-2 px-2  md:hidden">
            <div className="bg-white shadow-2xl rounded-md py-3 w-full flex flex-row-reverse justify-between items-center dark:bg-zinc-800">
                {
                    load ?
                        <div className="flex flex-col justify-center items-center w-1/4 cursor-pointer">
                            <UserIcon className="h-4 w-4 dark:text-white" />
                            <p className="text-[10px] mt-1">منتظر بمانید</p>
                        </div> :
                        login ?
                            <Link href="/dashboard">
                                <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/dashboard" ? "text-orange-600" : null}`} >
                                    <UserIcon className={`h-4 w-4 ${asPath === "/dashboard" ? "text-orange-600" : "dark:text-white"}`} />
                                    <p className="text-[10px] mt-1">پنل کاربری</p>
                                </div>
                            </Link>
                            :
                            <div onClick={() => dispatch(show_Modal_Login(true))} className="flex flex-col justify-center items-center w-1/4 cursor-pointer">
                                <UserIcon className="h-4 w-4 dark:text-white" />
                                <p className="text-[10px] mt-1">ورود</p>
                            </div>
                }
                {/* <Link href='/blogs'>
                <div className="flex flex-col justify-center items-center w-1/4 cursor-pointer">
                    <PencilIcon className="h-4 w-4 dark:text-white" />
                    <p className="text-xs mt-1">بلاگ ها</p>
                </div>
            </Link> */}

                {
                    router.route === '/cafes/[cafeId]' &&
                    <div onClick={() => goToBasket()} className="relative flex flex-col justify-center items-center w-1/4 cursor-pointer">
                        <div className="absolute -top-2 text-red-600 rounded-full text-xs">{order.length}</div>
                        <ShoppingCartIcon className="h-4 w-4 dark:text-white" />
                        <p className="text-[10px] mt-1">سبد سفارش</p>
                    </div>
                }

                {
                    asPath.includes("/cafes/") ?
                        <Link href={`/cafes/events/${cafeId}`}>
                            <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/" ? "text-orange-600" : null}`}>
                                <UserGroupIcon className={`h-4 w-4 ${asPath === "/" ? "text-orange-600" : "dark:text-white"}`} />
                                <p className="text-[10px] mt-1">رویداد ها</p>
                            </div>
                        </Link>
                        :
                        <Link href='/features'>
                            <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/features" ? "text-orange-600" : null}`}>
                                <PencilIcon className={`h-4 w-4 ${asPath === "/features" ? "text-orange-600" : "dark:text-white"}`} />
                                <p className="text-[10px] mt-1">ویژگی ها</p>
                            </div>
                        </Link>
                }
                <Link href='/'>
                    <div className={`flex flex-col justify-center items-center w-1/4 cursor-pointer ${asPath === "/" ? "text-orange-600" : null}`}>
                        <HomeIcon className={`h-4 w-4 ${asPath === "/" ? "text-orange-600" : "dark:text-white"}`} />
                        <p className="text-[10px] mt-1">خانه</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;