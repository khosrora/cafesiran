import Link from "next/link";
import MyImage from "../utilities/ImageCardBlog";




const CardBlog = ({ img }) => {
    return (
        <div className="bg-neutral-100 p-2 rounded-md font-medium dark:bg-zinc-800">
            <MyImage img={img} alt="" />
            <div className="flex justify-between items-center">
                <h3 className="flex-auto mt-4 text-sm md:text-lg">طرز تهیه قهوه اسپرسو</h3>
            </div>
            <div className="my-4">
                <p className="text-xs text-neutral-700 leading-5 dark:text-white lg:my-4">
                    اموزش تهیه کردن اسپرسو دوبل به روش ساده تخصصی  درخانه با طعم درجه تخصصی  درخانه با طعم درجه  ...
                </p>
                <div className="text-xs mt-4 text-neutral-600 dark:text-white">1401/05/01</div>
            </div>
            <Link href={`/blogs/چگونه-قهوه-درست-کنیم`}>
                <a className="text-center block rounded-md text-white py-2 bg-[#FF7129] font-medium text-sm mt-3 lg:py-2">مشاهده بیشتر</a>
            </Link>
        </div>
    );
}

export default CardBlog;