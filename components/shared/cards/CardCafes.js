import Link from "next/link";
import MyImage from "../utilities/imageCardCafes";
import { HeartIcon } from '@heroicons/react/outline'
import { errorMessage } from "../../../utils/toast";




const CardCafes = ({ cafe }) => {

    const handleAddToFav = id => {
        errorMessage("به زودی این ویژگی فعال میشود")
    }

    return (
        <div className="wrapper  antialiased text-gray-900">
            <div>
                <MyImage img={cafe.image_url ? cafe.image_url : "/images/placeholder.png"} alt={cafe.persian_title} />
                <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-zinc-800 dark:text-zinc-200">
                        <div className="flex items-baseline">
                            <span className="bg-[#FF7129] text-white  py-1 px-4 inline-block rounded-full text-xs">
                                {cafe.type === "C" ? "کافه" : null}
                                {cafe.type === "R" ? "رستوران" : null}
                                {cafe.type === "CR" ? "کافه رستوران" : null}
                                {cafe.type === "IC" ? "آبمیوه بستنی" : null}
                            </span>
                            <div className="mr-4 text-gray-600  text-[9px] font-semibold tracking-wider dark:text-zinc-200">
                                {cafe.view_count} بازدید  &bull;   {cafe.instagram_id ? `instagram : @${cafe.instagram_id}` : null}
                            </div>
                        </div>

                        <h4 className="mt-4 text-xl font-semibold leading-tight truncate">{cafe.persian_title}</h4>
                        <div className="mt-4 flex justify-between items-center">
                            <Link href={`/cafes/${cafe.id}`}>
                                <a className="">
                                    <span className="text-[#FF7129] text-xs font- cursor-pointer truncate">مشاهده منو {cafe.persian_title}</span>
                                </a>
                            </Link>
                            <div className="" onClick={() => handleAddToFav(cafe.id)}>
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