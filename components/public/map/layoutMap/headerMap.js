import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Router from 'next/router';



const HeaderMap = () => {
    return (
        <>
            <div className="fixed top-2 right-5 flex flex-col gap-y-4 z-[997]">
                <Link href="/">
                    <div className="flex justify-start items-center p-2 px-4 rounded-md bg-gray-50 shadow-md shadow-zinc-400 cursor-pointer text-zinc-900 text-xs">
                        <HomeIcon className='w-4 h-4 ml-2' />
                        <p>بازگشت به خانه</p>
                    </div>
                </Link>
                <div onClick={() => Router.back()} className="flex justify-start items-center p-2 px-4 rounded-md bg-gray-50 shadow-md shadow-zinc-400 cursor-pointer text-zinc-900 text-xs">
                    <ArrowLeftIcon className='w-4 h-4 ml-2' />
                    <p>بازگشت به لیست</p>
                </div>
            </div>
        </>
    );
}

export default HeaderMap;