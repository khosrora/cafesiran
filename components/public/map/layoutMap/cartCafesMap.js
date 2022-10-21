import Link from "next/link";
import MyImage from "../../../shared/utilities/imageCardMap";
import { LocationMarkerIcon } from '@heroicons/react/outline';



const CartCafesMap = () => {
    return (
        <>
            <div className="w-full fixed bottom-4 px-2 z-[997] xl:px-8 xl:py-4">
                <div className="m-auto rounded-md bg-gray-50 shadow-2xl dark:bg-zinc-900">
                    <div className="flex justify-start items-center gap-x-2 p-2 overflow-x-auto xl:gap-x-6">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) =>
                                <div key={index} className="flex-shrink-0 w-80 h-32 font-semibold">
                                    <div className="h-full flex justify-between items-center p-2 py-2 bg-zinc-100 rounded-md dark:bg-zinc-800 dark:text-zinc-200">
                                        <div className="w-1/3 p-1 rounded-md bg-zinc-300 h-full dark:bg-zinc-700">
                                            <MyImage img="https://img.freepik.com/free-photo/young-woman-eating-croissants-cafe_1303-20407.jpg?w=2000" alt="test" />
                                        </div>
                                        <div className="w-2/3 h-full mr-2 flex flex-col justify-around">
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-between items-center w-full text-[8px]">
                                                    <p className="text-xs">تعداد بازدید :‌ <span>1200</span></p>
                                                    <span className="bg-amber-600 rounded-md text-white  px-2"> کافه </span>
                                                </div>
                                            </div>
                                            <div className="text-sm">
                                                <p>کافه پارک علم و فناوری</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full text-[9px]">
                                                <div className="flex justify-start items-center">
                                                    <LocationMarkerIcon className="w-4 h-4" />
                                                    <p>سیستان و بلوچستان</p>
                                                </div>
                                                <div className="flex justify-start items-center">
                                                    <LocationMarkerIcon className="w-4 h-4" />
                                                    <p>زاهدان</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Link href="/">
                                                    <div className="bg-amber-600  text-white text-center rounded cursor-pointer text-sm xl:py-1">
                                                        <p>مشاهده منو</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartCafesMap;