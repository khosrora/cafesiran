import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";


const SingleBlog = ({ blog, latestBlog }) => {

    
    return (
        <div className="max-w-6xl m-auto mb-4 lg:my-12">
            <div className="grid grid-cols-12 gap-y-6 gap-x-4 px-4">
                <div className="col-span-12 lg:col-span-9 flex flex-col gap-y-4  p-2">
                    <div className="flex gap-x-4 text-xs text-blue-400">
                        <Link href="/">
                            <a>منو دیجیتال</a>
                        </Link>
                        /
                        <Link href="/blogs">
                            <a>مقالات</a>
                        </Link>
                        /
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="text-slate-500" title={blog.title}>{blog.title}</a>
                        </Link>
                    </div>
                    <div className="p-2 bg-zinc-100 rounded dark:bg-zinc-800">
                        <img className="rounded w-full object-cover" src={blog.image} alt="" />
                    </div>
                    <div className="bg-zinc-100 p-2 rounded flex flex-col gap-y-2 dark:bg-zinc-800">
                        <h1 className="text-xl py-2">{blog.title}</h1>
                        <hr />
                        <p className="text-sm">خلاصه مطلب : </p>
                        <p className="text-xs text-justify leading-6">
                            {blog.short_desc}
                        </p>
                    </div>
                    <div className="leading-8 text-sm text-justify dark:bg-zinc-800 p-2 rounded" dangerouslySetInnerHTML={{ __html: blog.desc }}>
                    </div>
                    <div className="border p-2 w-full rounded flex justify-start items-start text-xs gap-x-4">
                        {
                            blog.tags.map((i, index) =>
                                <span key={index} className="bg-zinc-100 p-2 text-blue-400 rounded dark:bg-zinc-800">{i}</span>
                            )
                        }
                    </div>
                    <div id="pos-article-display-77505"></div>
                </div>
                <div className="col-span-12 p-2 flex flex-col gap-y-4 lg:col-span-3">
                    <div className="border rounded p-2 text-xs flex flex-col gap-y-2 dark:border-zinc-700">
                        <div className="pb-4 border-b dark:border-zinc-700">
                            <h3>جدیدترین مقالات : </h3>
                        </div>
                        <div className="">
                            {
                                latestBlog.map((i , index) =>
                                    <Link key={index} href={`/blogs/${i.slug}`}>
                                        <a title={i.title} className="text-blue-400 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <p className="block p-2"> {i.title} </p>
                                        </a>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className="border rounded p-2 text-xs flex flex-col gap-y-2 dark:border-zinc-700">
                        <div className="pb-4 border-b dark:border-zinc-700">
                            <h3>لینک های مفید : </h3>
                        </div>
                        <div className="">
                            <Link href="/">
                                <a title="منو دیجیتال ارزان" className="text-blue-400 flex justify-start items-center cursor-pointer">
                                    <ChevronLeftIcon className="w-2 h-2" />
                                    <p className="block p-2">منو دیجیتال رستوران و کافی شاپ</p>
                                </a>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="/features">
                                <a title="ویژگی های منو دیجیتال" className="text-blue-400 flex justify-start items-center cursor-pointer">
                                    <ChevronLeftIcon className="w-2 h-2" />
                                    <p className="text-blue-400 block p-2"> ساخت منو با qr code </p>
                                </a>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="/liveRegister">
                                <a title="ساخت منو دیجیتال" className="text-blue-400 flex justify-start items-center cursor-pointer">
                                    <ChevronLeftIcon className="w-2 h-2" />
                                    <p className="text-blue-400 block p-2"> ایجاد سریع منو </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;