import { AdjustmentsIcon, HomeIcon } from '@heroicons/react/outline';
import Link from 'next/link';



const HeaderMap = ({ setFilters }) => {
    return (
        <>
            <div className="fixed top-2 right-5 flex flex-col gap-y-4 z-[997]">
                <Link href="/">
                    <div className="flex justify-center items-center p-4 rounded-full bg-gray-50 shadow-lg cursor-pointer">
                        <HomeIcon className='w-6 h-6 text-amber-600' />
                    </div>
                </Link>
                <div onClick={() => setFilters(true)} className="flex justify-center items-center p-4 rounded-full bg-gray-50 shadow-lg cursor-pointer">
                    <AdjustmentsIcon className='w-6 h-6 text-amber-600' />
                </div>
            </div>
        </>
    );
}

export default HeaderMap;