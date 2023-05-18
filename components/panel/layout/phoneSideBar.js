import Link from "next/link";
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { logOutUser } from "../../../redux/auth/actions";
import { useSelector } from 'react-redux';
import { StateType } from "../../shared/utilities/constance/type";
import CafeMobileRoutes from "./RoutesSideBar/Cafe.Mobile.Routes";
import AllMobileRoutes from "./RoutesSideBar/All.Mobile.Routes";




const PhoneSideBar = ({ setMenu }) => {

    const { userDetails } = useSelector(state => state);
    const user = userDetails.user;
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-50 dark:bg-slate-600 z-[800]" onClick={() => setMenu(false)}></div>
            <div className="fixed top-0 right-0 h-screen bg-white p-2 w-3/4 dark:bg-zinc-900 z-[2000]">
                <div className="px-4 py-4 h-full  overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <p>کافه <span className="text-[#FF7129]">ایران</span></p>
                        <svg onClick={() => setMenu(false)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="my-8 w-full">
                        <ul className="flex flex-col gap-y-4 my-4">
                            <AllMobileRoutes />
                            {
                                user?.cafe?.state === StateType.Confirmed ?
                                    <CafeMobileRoutes />
                                    : null
                            }
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