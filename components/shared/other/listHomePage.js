import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";




const ListHomePage = () => {
    return (
        <>
            <p className="text-6xl font-bold">کافه <span className="text-[#FF7129]">ایران</span></p>
            <div className="mt-8 font-bold text-sm lg:font-bold lg:text-xl">
                <h1>منو دیجیتال برای کافه و رستوران و ... شما</h1>
            </div>
            <div className="mt-8 text-[12px] flex flex-col justify-start items-start gap-y-4 lg:text-sm">
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
                <Link href="/liveRegister">
                    <a className="flex justify-start items-center text-blue-400" title='ایجاد سریع منو دیجیتال'>
                        <ArrowLeftIcon className='w-4 h-4 ml-2 ' />
                        <span className="cursor-pointer"> ثبت مجموعه شما در کمتر از 1 دقیقه </span>
                        <br />
                    </a>
                </Link>
                <Link href="/features">
                    <a className="flex justify-start items-center text-blue-400" title='امکانات و ویژگی های منو دیجیتال'>
                        <ArrowLeftIcon className='w-4 h-4 ml-2' />
                        <span className=""> مشاهده توضیحات بیشتر ... </span>
                        <br />
                    </a>
                </Link>
            </div>
        </>
    );
}

export default ListHomePage;