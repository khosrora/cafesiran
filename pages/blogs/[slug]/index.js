import { ChevronLeftIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../../components/public/layout";




const IndexBlog = () => {
    return (
        <>
            <Script rel="preload" src="/js/yektanet.js" strategy="afterInteractive" />
            <Head>
                <meta name="robots" content="index, follow" />
            </Head>
            <Layout>
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
                                <Link href="">
                                    <a className="text-slate-500">تست تک بلاگ</a>
                                </Link>
                            </div>
                            <div className="p-2 bg-zinc-100 rounded">
                                <img className="rounded" src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2021-09/Cafe-Chris.jpg" alt="" />
                            </div>
                            <div className="bg-zinc-100 p-2 rounded flex flex-col gap-y-2">
                                <h1 className="text-xl">تست بلاگ</h1>
                                <hr />
                                <p className="text-sm">خلاصه مطلب : </p>
                                <p className="text-xs leading-6">
                                    اگر در هر یک از رشته های مهندسی تحصیل می کنید احتمالا نام نرم افزار متلب به گوش شما آشنا باشد در این مقاله قصد دارم شما را با این نرم افزار قدرتمند و پر توان آشنا کنم پس با من همراه باشید...
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-justify leading-9">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div>
                            <div className="border p-2 w-full rounded flex justify-start items-start text-xs gap-x-4">
                                <Link href="/">
                                    <span className="bg-zinc-100 p-2 text-blue-400">منو دیجیتال</span>
                                </Link>
                                <Link href="/">
                                    <span className="bg-zinc-100 p-2 text-blue-400">منو ارزان قیمت</span>
                                </Link>
                                <Link href="/">
                                    <span className="bg-zinc-100 p-2 text-blue-400">منو کافه و رستوران</span>
                                </Link>
                            </div>
                            <div id="pos-article-text-76340"></div>
                        </div>
                        <div className="col-span-12 p-2 flex flex-col gap-y-4 lg:col-span-3">
                            <div className="border rounded p-2 text-xs flex flex-col gap-y-2">
                                <div className="pb-4 border-b">
                                    <h3>جدیدترین مقالات : </h3>
                                </div>
                                <div className="">
                                    <Link href="/">
                                        <div className="text-blue-600 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <a className="block p-2"> اصول طراحی اسپرسو </a>
                                        </div>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link href="/">
                                        <div className="text-blue-600 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <a className="block p-2"> شیک شکلاتی </a>
                                        </div>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link href="/">
                                        <div className="text-blue-600 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <a className="block p-2"> شیک شکلاتی به همراه دسر </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="border rounded p-2 text-xs flex flex-col gap-y-2">
                                <div className="pb-4 border-b">
                                    <h3>لینک های مفید : </h3>
                                </div>
                                <div className="">
                                    <Link href="/">
                                        <div className="text-blue-600 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <a className="block p-2">منو دیجیتال رستوران و کافی شاپ</a>
                                        </div>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link href="/">
                                        <div className="text-blue-600 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <a className="text-blue-600 block p-2"> ساخت منو با qr code </a>
                                        </div>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link href="/">
                                        <div className="text-blue-600 flex justify-start items-center cursor-pointer">
                                            <ChevronLeftIcon className="w-2 h-2" />
                                            <a className="text-blue-600 block p-2"> ایجاد سریع منو </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default IndexBlog;