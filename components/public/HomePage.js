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
        <>
            <div className="w-full mt-6 mb-40 flex flex-col justify-center items-center lg:hidden">
                <p className="text-6xl font-bold">کافه <span className="text-[#FF7129]">ایران</span></p>
                <div className="mt-8 font-bold">
                    <h1>منو دیجیتال برای کافه و رستوران و هتل و ... شما</h1>
                </div>
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
                        <span className=""> ثبت مجموعه شما در کمتر از 2 دقیقه </span>
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
                                <div className="border-2 bg-slate-900 text-white rounded-md p-2 px-7 flex justify-between items-center mr-0 md:mr-2 dark:bg-[#FF7129] dark:border-none">
                                    <p>لطفا منتظر بمانید</p>
                                </div> :
                                <div onClick={() => handleSearchCafe()} className="border-2 bg-slate-900 text-white rounded-md p-2 px-7 flex justify-between items-center cursor-pointer mr-0 lg:mr-2 dark:bg-[#FF7129] dark:border-none">
                                    <p>
                                        جست وجو کن
                                    </p>
                                </div>
                            :
                            <div onClick={() => SetProvinceMenu(!provinceMenu)} className="border-2 bg-slate-900 rounded-md p-2 px-7 flex justify-between items-center cursor-pointer mr-0 md:mr-2 dark:bg-[#FF7129] dark:border-none">
                                <p className="text-white">جستجو بر اساس استان</p>
                                <SearchIcon className="h-4 w-4 mr-10 text-white" />
                            </div>
                    }
                    <Link href="/qrCodeReader">
                        <div className="border-2 bg-slate-900 rounded-md p-2 px-7 flex justify-between items-center cursor-pointer dark:bg-[#FF7129] dark:border-none lg:hidden">
                            <p className="text-white">بارکد خوان</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 mr-10 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="hidden w-full my-8 lg:flex">
                <div className="w-full max-w-7xl m-auto">
                    <div className="bg-zinc-100 flex rounded-lg justify-between items-center py-8 dark:bg-zinc-900">
                        <div className="w-1/2 h-full px-8">
                            <p className="text-4xl font-extrabold">کافه <span className="text-[#FF7129]">ایران</span></p>
                            <div className="mt-8 font-bold text-sm">
                                <p>منو دیجیتال برای کافه و رستوران و ... شما</p>
                            </div>
                            <div className="mt-8 text-[10px] flex flex-col justify-start items-start gap-y-4 lg:text-sm">
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
                                    <span className=""> ثبت مجموعه شما در کمتر از 2 دقیقه </span>
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
                        </div>
                        <div className="w-1/2 flex justify-end items-center">
                            <img className='w-96' src="/images/features/Group527.png" alt="منو دیجیتال" />
                        </div>
                    </div>
                    <div className="w-10/12 bg-white border rounded-md m-auto -mt-10 dark:bg-zinc-800 dark:border-none">
                        <div className="flex justify-center items-center gap-x-4 w-11/12 m-auto py-2">
                            <div className="relative border rounded-md flex justify-center items-center px-4 w-2/4 dark:bg-zinc-700 dark:border-none">
                                <input onChange={(e) => setSearchBtn(e.target.value)} onKeyDown={handleKeyDown} className='text-xs py-4 w-3/4 focus:outline-none dark:bg-zinc-700' type="text" name="" id="" placeholder='جست و جو با کد کافه' />
                                <div className="w-1/4 text-center flex justify-center items-center">
                                    {
                                        lengthSearch == 5 ? <span onClick={() => handleSearchCafe()} className='text-sm cursor-pointer bg-[#FF7129] p-1 rounded-full text-white w-full'> جست و جو کن  </span> :
                                            <SearchIcon className='w-4 h-4 absolute left-5' />
                                    }
                                </div>
                            </div>
                            <div className="border rounded-md py-4 px-4 w-1/4 dark:bg-zinc-700 cursor-pointer dark:border-none" onClick={() => SetProvinceMenu(!provinceMenu)}>
                                <div className="flex justify-between items-center w-full cursor-pointer" onClick={() => SetProvinceMenu(!provinceMenu)}>
                                    <p className='text-xs'>جستجو بر اساس استان</p>
                                    <ArrowLeftIcon className='w-4 h-4 left-0' />
                                </div>
                            </div>
                            <div className="w-1/4 py-4 rounded-md cursor-pointer">
                                <Link href="/cafes/8">
                                    <a title='مشاهده نمونه منو' className='bg-[#FF7129] w-full block text-center rounded-md text-white py-4 text-sm'>مشاهده نمونه منو</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                provinceMenu ? <ProvinceMenu SetProvinceMenu={SetProvinceMenu} /> : null
            }
        </>
    );
}

export default HomePage;