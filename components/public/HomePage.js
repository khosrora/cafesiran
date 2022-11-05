import { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { errorMessage } from '../../utils/toast';
import { searchCafe } from '../../redux/global/actions';

// !
import dynamic from 'next/dynamic';
const ProvinceMenu = dynamic(() => import("../shared/modals/ProvinceMenu"))


const HomePage = () => {

    const router = useRouter();
    const [searchBtn, setSearchBtn] = useState(0);
    const [provinceMenu, SetProvinceMenu] = useState(false);
    const [load, setLoad] = useState(false);
    const lengthSearch = searchBtn.length;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') handleSearchCafe();
    }

    const handleSearchCafe = async () => {
        setLoad(true);
        if (searchBtn.length < 5 || searchBtn.length > 7 || searchBtn === 0) {
            errorMessage("لطفا در وارد کردن کد دقت کنید");
            setLoad(false);
            return;
        }
        const result = await searchCafe(searchBtn);
        if (result) {
            router.push(`/cafes/${result}`);
            return;
        } else {
            setLoad(false);
        }
    }

    return (
        <div className="w-full mt-20 mb-40 flex flex-col justify-center items-center lg:mt-44">
            <h1 className="text-6xl font-bold">کافه <span className="text-amber-600">ایران</span></h1>
            <div className="mt-8 font-bold">منو دیجیتال برای کافه و رستوران و ... شما</div>
            <div className="px-4 mt-8 text-[10px] flex flex-col justify-start items-start gap-y-4 lg:text-sm">
                <div className="flex justify-start items-center">
                    <CheckIcon className='w-4 h-4 ml-2' />
                    <span className="">تعامل پویا با مشتری برای کسب و کار شما </span>
                    <br />
                </div>
                <div className="flex justify-start items-center">
                    <CheckIcon className='w-4 h-4 ml-2' />
                    <span className="">دسترسی سریع مشتریان به منو ( کد کافه و qrcode و نقشه و ... )</span>
                    <br />
                </div>
                <div className="flex justify-start items-center">
                    <CheckIcon className='w-4 h-4 ml-2' />
                    <span className=""> قابلیت ایجاد سطح دسترسی برای سالن داران </span>
                    <br />
                </div>
                <div className="flex justify-start items-center">
                    <CheckIcon className='w-4 h-4 ml-2' />
                    <span className=""> نمایش گزارشات گرافیکی از سفارشات ثبت شده</span>
                    <br />
                </div>
                <div className="flex justify-start items-center">
                    <CheckIcon className='w-4 h-4 ml-2' />
                    <span className=""> ثبت مجموعه شما در کمتر از 3 دقیقه </span>
                    <br />
                </div>
                <Link href="/features">
                    <a className="flex justify-start items-center">
                        <ArrowLeftIcon className='w-4 h-4 ml-2' />
                        <span className=""> مشاهده توضیحات بیشتر ... </span>
                        <br />
                    </a>
                </Link>
            </div>
            <div className="flex flex-col gap-y-2 lg:flex lg:flex-row mt-4">
                <div className="mb-4 md:mb-0 relative">
                    <input onChange={(e) => setSearchBtn(e.target.value)} onKeyDown={handleKeyDown} type="text" className="border-2 border-slate-600 rounded-md p-2 px-7 dark:border-none dark:outline-none w-full" placeholder="جست وجو بر اساس کد کافه" />
                </div>
                {
                    lengthSearch == 5 ?
                        load ?
                            <div className="border-2 bg-slate-900 text-white rounded-md p-2 px-7 flex justify-between items-center mr-0 md:mr-2 dark:bg-amber-600 dark:border-none">
                                <p>لطفا منتظر بمانید</p>
                            </div> :
                            <div onClick={() => handleSearchCafe()} className="border-2 bg-slate-900 text-white rounded-md p-2 px-7 flex justify-between items-center cursor-pointer mr-0 lg:mr-2 dark:bg-amber-600 dark:border-none">
                                <p>
                                    جست وجو کن
                                </p>
                            </div>
                        :
                        <div onClick={() => SetProvinceMenu(!provinceMenu)} className="border-2 bg-slate-900 rounded-md p-2 px-7 flex justify-between items-center cursor-pointer mr-0 md:mr-2 dark:bg-amber-600 dark:border-none">
                            <p className="text-white">جستجو بر اساس استان</p>
                            <SearchIcon className="h-4 w-4 mr-10 text-white" />
                        </div>
                }
                <Link href="/qrCodeReader">
                    <div className="border-2 bg-slate-900 rounded-md p-2 px-7 flex justify-between items-center cursor-pointer dark:bg-amber-600 dark:border-none lg:hidden">
                        <p className="text-white">بارکد خوان</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 mr-10 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                        </svg>
                    </div>
                </Link>
            </div>
            {
                provinceMenu ? <ProvinceMenu SetProvinceMenu={SetProvinceMenu} /> : null
            }
        </div>
    );
}


export default HomePage;