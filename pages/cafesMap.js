import { XIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import LayoutMap from '../components/public/map/layoutMap/layoutMap';
const CafesMapCm = dynamic(() => import("../components/public/map/cafesMapCm"), { ssr: false })


const CafesMap = () => {
    return (
        <LayoutMap>
            <div className="w-full h-screen">
                <CafesMapCm />
                {/* <div className="fixed w-full bottom-0 h-3/4 -mt-20 m-auto z-[999]">
                    <div className="m-auto bg-zinc-100 w-11/12 h-full rounded-t-2xl py-4 px-8 text-zinc-900 flex flex-col gap-y-4">
                        <div className="flex justify-between items-center">
                            <p className='text-sm'>کافه پارک علم و فناوری</p>
                            <XIcon className='w-6 h-6' />
                        </div>
                        <div className="w-full">
                            <img className='rounded-md' src="https://media-cdn.tripadvisor.com/media/photo-s/1c/0d/58/75/interior.jpg" alt="" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="bg-amber-600 text-white py-2 px-4 rounded-md">
                                <p>کافه</p>
                            </div>
                            <span>2000 بازدید</span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="bg-zinc-200 p-2 rounded-md w-3/4 text-center">
                                <p className="text-xl tracking-widest text-center">123456</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </LayoutMap>
    );
}

export default CafesMap;