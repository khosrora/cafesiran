import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { LogoutIcon } from '@heroicons/react/outline'
import { logOutUser } from "../../../redux/auth/actions";
import { useRouter } from "next/router";


const HeaderPanel = ({ setMenu }) => {

    const { userDetails } = useSelector(state => state);
    const user = userDetails.user;
    const dispatch = useDispatch();
    const router = useRouter()

    return (
        <div className="w-full flex justify-between items-center border-b-2 dark:border-zinc-800">
            <div className="px-4 w-full bg-zinc-100 py-4 dark:bg-zinc-900">
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center cursor-pointer">
                        <svg onClick={() => setMenu(true)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    
                    </div>
                    <div className="flex justify-between items-center">
                        {
                            user?.cafe === null ?
                                <Link href="/dashboard/requestCafe">
                                    <div className="hidden lg:flex justify-between items-center ml-8">
                                        <button className="bg-amber-600 w-48 px-4 py-2 rounded-md text-white">درخواست ثبت مجموعه</button>
                                    </div>
                                </Link>
                                :
                                <Link href="/dashboard/editRequestCafe">
                                    <div className="hidden lg:flex justify-between items-center ml-8">
                                        <button className="bg-amber-600 w-48 px-4 py-2 rounded-md text-white">ویرایش مجموعه</button>
                                    </div>
                                </Link>
                        }
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