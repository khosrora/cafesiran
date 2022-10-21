import Link from "next/link";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';


const CreateBlogCafe = () => {

    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });

    return (
        <>
            <form className="flex flex-col justify-between items-center mt-4">
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center hover:text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <Link href="/dashboard/allBlogs">
                            <a className="mr-2">همه بلاگ ها</a>
                        </Link>
                    </div>
                    <button type="submit" className="bg-amber-600 w-28 px-4 py-2 rounded-md text-white">ثبت بلاگ</button>
                </div>

                <div className="flex-col justify-center items-center w-full mt-8">
                    <div className="flex flex-col justify-start items-start gap-y-2 mb-4  lg:mr-4">
                        <label className="" htmlFor="title">عنوان</label>
                        <input className="w-full p-2 rounded-md border focus:outline-none  dark:bg-zinc-800 dark:border-zinc-800" id="en-name" type="text" placeholder="" />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-2 mb-4  lg:mr-4">
                        <label className="" htmlFor="title">تصویر</label>
                        <div className="border w-full py-12  rounded-md relative flex justify-center items-center dark:bg-zinc-800 dark:border-zinc-800">
                            <div className="flex flex-col justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <h6 className="text-xs ">برای اضافه کردن عکس اینجا کلیک کنید</h6>
                            </div>
                            <input className="absolute top-0 bottom-0 opacity-0 w-full p-2 rounded-md border focus:outline-none  dark:bg-zinc-800 dark:border-zinc-800" id="en-name" type="file" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-2 mb-4 lg:mr-4">
                        <label className="" htmlFor="title">توضیحات</label>
                        <SunEditor setDefaultStyle="font-family: shabnam; font-size: 10px;" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default CreateBlogCafe;