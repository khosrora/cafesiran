import Link from "next/link";
import MyImage from "../utilities/ImageCardBlog";
import MomentDate from "../utilities/moment";




const CardBlog = ({ item }) => {
    
    return (
        <div className="bg-neutral-100 p-2 rounded-md font-medium dark:bg-zinc-800">
            <MyImage img={item.image} alt={item.image_alt} />
            <div className="flex justify-between items-center">
                <h3 className="flex-auto mt-4 text-sm md:text-lg">
                    {
                        item.title.length > 40 ?
                            `${item.title.substring(0, 40)}...` : item.title
                    }
                </h3>
            </div>
            <div className="my-4">
                <p className="text-xs text-neutral-700 leading-5 dark:text-white lg:my-4" >
                    {
                        item.short_desc.length > 80 ?
                            `${item.short_desc.substring(0, 80)}...` : item.short_desc
                    }
                </p>
                <div className="text-xs mt-4 text-neutral-600 dark:text-white">{<MomentDate time={item.publish_date} />}</div>
            </div>
            <Link href={`/blogs/${item.slug}`}>
                <a className="text-center block rounded-md text-white py-2 bg-[#FF7129] font-medium text-sm mt-3 lg:py-2">مشاهده بیشتر</a>
            </Link>
        </div>
    );
}

export default CardBlog;