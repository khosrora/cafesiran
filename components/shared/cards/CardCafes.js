import Link from "next/link";
import MyImage from "../utilities/imageCardCafes";
import { HeartIcon } from '@heroicons/react/outline'




const CardCafes = ({ img }) => {
    return (
        <div className="wrapper  antialiased text-gray-900">
            <div>
                <MyImage img={img} alt="عکس کافه" />
                <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-zinc-800 dark:text-zinc-200">
                        <div className="flex items-baseline">
                            <span className="bg-amber-600 text-white  py-1 px-4 inline-block rounded-full text-xs">
                                کافه
                            </span>
                            <div className="mr-4 text-gray-600  text-[9px] font-semibold tracking-wider dark:text-zinc-200">
                                25 بازدید  &bull; khosrora@
                            </div>
                        </div>

                        <h4 className="mt-4 text-xl font-semibold leading-tight truncate">کافه فرانسه</h4>

                        <div className="mt-2 flex justify-start items-center">
                            <span className="text-gray-600 text-xs ml-2 dark:text-zinc-200"> تاریخ تاسیس :</span>
                            <span className="text-xs">1/4/1400</span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <Link href={`/cafes/${"کافه-فرانسه"}`}>
                                <a className="">
                                    <span className="text-amber-600 text-md font- cursor-pointer">مشاهده منو </span>
                                </a>
                            </Link>
                            <div className="">
                                <HeartIcon className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCafes;