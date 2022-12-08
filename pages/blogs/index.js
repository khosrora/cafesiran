import Head from "next/head";
import Link from "next/link";
import { PencilIcon } from '@heroicons/react/outline';
import Layout from "../../components/public/layout";




const IndexBlogs = () => {
    return (
        <>
            <Head>

            </Head>
            <Layout>
                <div className="max-w-7xl m-auto my-20 px-4">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {
                            [1, 2, 3, 4, 5, 6, 7].map((i, index) =>
                                <div key={index} className="flex flex-col gap-y-4 rounded-md p-2 bg-[#f8f8f8] dark:bg-zinc-800">
                                    <div className="">
                                        <img className="rounded" src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2021-09/Cafe-Chris.jpg" alt="" />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm lg:text-lg">طرز تهیه قهوه اسپرسو</p>
                                        <p className="text-[10px]">1401 / 04 / 31</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs leading-6">
                                            اموزش تهیه کردن اسپرسو دوبل به روش ساده تخصصی  درخانه با طعم درجه یک عالی همانند مزه کافه با ما در ادامه این بلاگ همراه باشید
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Link href="/blogs/دستور-آشپزی">
                                            <a className="bg-[#FF7129] py-2 px-4 rounded-md text-white"> بیشتر بخوانید </a>
                                        </Link>
                                        <div className="flex justify-center items-center text-[10px] text-blue-400 gap-x-2">
                                            <PencilIcon className="w-4 h-4" />
                                            <p>زینب بندهی</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default IndexBlogs;