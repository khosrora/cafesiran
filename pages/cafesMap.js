import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import LayoutMap from '../components/public/map/layoutMap/layoutMap';
const CafesMapCm = dynamic(() => import("../components/public/map/cafesMapCm"), { ssr: false })


const CafesMap = () => {

    const [showCafe, setShowCafe] = useState(null)

    return (
        <LayoutMap>
            <div className="w-full h-screen">
                <CafesMapCm setShowCafe={setShowCafe} />
                {
                    showCafe !== null ?
                        <div className="fixed w-full bottom-0 h-auto -mt-20 m-auto z-[999] lg:w-3/12 lg:right-5 lg:bottom-5 ">
                            <div className="m-auto bg-zinc-100 w-11/12 h-full rounded-t-2xl py-4 px-8 text-zinc-900 flex flex-col gap-y-4 lg:w-full lg:rounded-b-2xl">
                                <div className="flex justify-between items-center">
                                    <p className='text-sm'>{showCafe.persian_title}</p>
                                    <XIcon className='w-6 h-6' onClick={() => setShowCafe(null)} />
                                </div>
                                <div className="w-full">
                                    <img className='rounded-md' src={showCafe?.image_url ? showCafe?.image_url : "/images/placeholder.png"} alt="" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="bg-amber-600 text-white py-2 px-4 rounded-md">
                                        <p>
                                            {showCafe.type === "C" ? "کافه" : null}
                                            {showCafe.type === "R" ? "رستوران" : null}
                                            {showCafe.type === "CR" ? "کافه رستوران" : null}
                                            {showCafe.type === "IC" ? "آبمیوه بستنی" : null}
                                        </p>
                                    </div>
                                    <span>{showCafe.view_count} بازدید</span>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="bg-zinc-200 p-2 rounded-md w-full text-center">
                                        <p className="text-xl tracking-widest text-center">{showCafe.code}</p>
                                    </div>
                                </div>
                                <div className="text-center w-full text-xs">
                                    {
                                        showCafe?.is_open !== true ?
                                            <div className="bg-red-600 rounded p-2 text-white">
                                                <p>در حال حاضر مجموعه تعطیل است</p>
                                            </div>
                                            : <p>در حال حاضر مجموعه باز است</p>
                                    }
                                    <br />
                                    <p>{showCafe.street}</p>
                                </div>
                                <div className="bg-zinc-200 w-full rounded-md text-center text-amber-600 py-2 cursor-pointer mb-2">
                                    <Link href={`/cafes/${showCafe.id}`} >
                                        <p>مشاهده منو</p>
                                    </Link>
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        </LayoutMap>
    );
}

export default CafesMap;