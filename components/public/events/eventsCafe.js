import { useRouter } from 'next/router';
import { ArrowRightIcon, TagIcon, ShareIcon, CalendarIcon } from '@heroicons/react/outline';
import Link from 'next/link';



const EventsCafeCm = () => {

    const { query } = useRouter();
    const cafeId = query.id;

    return (
        <div className="px-4 my-4 max-w-3xl m-auto">
            <Link href={`/cafes/${cafeId}`}>
                <div className="flex justify-start items-center px-4 cursor-pointer">
                    <ArrowRightIcon className='w-4 h-4 ml-4' />
                    <p>بازگشت به منو</p>
                </div>
            </Link>
            <div className="flex justify-between items-center mt-4 bg-zinc-100 p-4 rounded-md dark:bg-zinc-800">
                <div className="flex justify-start items-center">
                    <TagIcon className='w-4 h-4 ml-2' />
                    <p className='font-bold'>کافه فلان</p>
                </div>
                <div className="">
                    <ShareIcon className='w-4 h-4' />
                </div>
            </div>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((i , index) =>
                    <div key={index} className="flex flex-col mt-4">
                        <div className="flex flex-col gap-y-4 items-start bg-zinc-100 w-full p-4 rounded-md dark:bg-zinc-800">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start items-center">
                                    <div className="items-center bg-zinc-200 p-2 rounded-full ml-4 dark:bg-zinc-700">
                                        <CalendarIcon className='w-4 h-4' />
                                    </div>
                                    <p>شب یلدا</p>
                                </div>
                                <p>1400/01/02</p>
                            </div>
                            <p className='text-xs leading-8'>
                                یک پنل مدیریت کامل برای کسب و کار خودتون دریافت کنید و منو های دیجیتال با قابلیت دسترسی سریع برای مشتریان کافه و رستوران و یا هتل ایجاد کنید. رزروهای آنلاین و یا انتقادات پیشنهادات را آنلاین دریافت کنید.
                            </p>

                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default EventsCafeCm;