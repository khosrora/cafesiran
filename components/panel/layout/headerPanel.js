import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { BellIcon, LogoutIcon, ShoppingCartIcon , PhoneIcon } from '@heroicons/react/outline'
import { logOutUser } from "../../../redux/auth/actions";
import { useRouter } from "next/router";


const HeaderPanel = ({ setMenu, alert, pager }) => {

    const { userDetails, storeCafe } = useSelector(state => state);
    const basket = storeCafe.basket;
    const user = userDetails.user;
    const dispatch = useDispatch();
    const router = useRouter()

    return (
        <div className="w-full flex justify-between items-center border-b-2 dark:border-zinc-800">
            <div className="px-4 w-full bg-zinc-100 py-4 dark:bg-zinc-900">
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center cursor-pointer">
                        <svg onClick={() => setMenu(true)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                    <div className="flex justify-between items-center">
                        {
                            user?.cafe === null ?
                                <Link href="/dashboard/requestCafe">
                                    <div className="hidden lg:flex justify-between items-center ml-8">
                                        <button className="bg-[#FF7129] w-48 px-4 py-2 rounded-md text-white">درخواست ثبت مجموعه</button>
                                    </div>
                                </Link>
                                :
                                <Link href="/dashboard/editRequestCafe">
                                    <div className="hidden lg:flex justify-between items-center ml-8">
                                        <button className="bg-[#FF7129] w-48 px-4 py-2 rounded-md text-white">ویرایش مجموعه</button>
                                    </div>
                                </Link>
                        }
                        {
                            basket.length > 0 ?
                                <Link href="/dashboard/store/basket">
                                    <div className="bg-[#FF7129] p-2 flex justify-center items-center rounded-full cursor-pointer ml-2 relative">
                                        <ShoppingCartIcon className="h-6 w-6 text-white" />
                                        <div className="absolute p-1 -top-3 w-6 bg-red-600 rounded-full flex justify-center items-center">
                                            <p className="text-white text-xs">{basket.length}</p>
                                        </div>
                                    </div>
                                </Link>
                                :
                                null
                        }
                        <div className="dropdown dropdown-right relative">
                            <div className="absolute -top-2 bg-red-600 flex justify-center items-center w-6 h-6 text-xs rounded-full"><p>{alert.length}</p></div>
                            <div tabIndex={0} role="button" className="m-1">
                                <BellIcon className="h-6 w-6 text-slate-500 dark:text-white" />
                            </div>
                            <ul tabIndex={0} className="bg-zinc-100 dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
                                {
                                    alert.length === 0 ?
                                        <li className=''>
                                            <p className='text-right text-[10px] hover:text-red-700'>پیامی جهت نمایش وجود ندارد</p>
                                        </li>
                                        :
                                        alert.map(i =>
                                            <li key={i.id}>
                                                <Link href={`/dashboard/order/${i.id}`}>
                                                    <p className='text-right text-[10px] hover:text-red-700'> یک سفارش جدید برای میز {i.num_of_table} ثبت شد </p>
                                                </Link>
                                            </li>
                                        )
                                }
                            </ul>
                        </div>
                        <div className="dropdown dropdown-right relative">
                            <div className="absolute -top-2 bg-red-600 flex justify-center items-center w-6 h-6 text-xs rounded-full"><p>{pager.length}</p></div>
                            <div tabIndex={0} role="button" className="m-1">
                                <PhoneIcon className="h-6 w-6 text-slate-500 dark:text-white" />
                            </div>
                            <ul tabIndex={0} className="bg-zinc-100 dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
                                {
                                    pager.length === 0 ?
                                        <li className=''>
                                            <p className='text-right text-[10px] hover:text-red-700'>پیامی جهت نمایش وجود ندارد</p>
                                        </li>
                                        :
                                        pager.map(i =>
                                            <li key={i.id}>
                                                <p className='text-right text-[10px] hover:text-red-700'> میز شماره {i.table} شما را صدا زد !! </p>
                                            </li>
                                        )
                                }
                            </ul>
                        </div>
                        <div className="bg-slate-200 p-2 flex justify-center items-center rounded-full cursor-pointer dark:bg-zinc-700">
                            <LogoutIcon className="h-6 w-6 text-slate-500 dark:text-white" onClick={() => {
                                dispatch(logOutUser());
                                router.push("/");
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPanel;