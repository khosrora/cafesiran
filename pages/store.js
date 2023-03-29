import Head from "next/head";
import Layout from "../components/public/layout";




const Store = () => {
    return (
        <>
            <Head>
                <title>فروشگاه منو دیجیتال |‌ کافه ایران</title>
                <meta name="description" content="خرید منو های دیجیتال همراه با بارکد برای کافه ها و رستوران ها و هتل ها" />
            </Head>
            <Layout>
                <section className="sm:max-w-7xl mx-auto">
                    <div className="text-sm font-medium flex justify-between p-2 border border-1 border-gray-[#aaa] rounded-md m-4">
                        <div className="md:hidden">
                            <svg className="inline-block ml-1" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2E2F2A"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5703 18.5001V14.6001" stroke="#2E2F2A" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5703 7.45V5.5" stroke="#2E2F2A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path
                                    d="M15.5687 12.65C17.0047 12.65 18.1687 11.4859 18.1687 10.05C18.1687 8.61401 17.0047 7.44995 15.5687 7.44995C14.1328 7.44995 12.9688 8.61401 12.9688 10.05C12.9688 11.4859 14.1328 12.65 15.5687 12.65Z"
                                    stroke="#2E2F2A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.42969 18.5V16.55" stroke="#2E2F2A" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.42969 9.4V5.5" stroke="#2E2F2A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path
                                    d="M8.42813 16.5501C9.86407 16.5501 11.0281 15.386 11.0281 13.9501C11.0281 12.5142 9.86407 11.3501 8.42813 11.3501C6.99218 11.3501 5.82812 12.5142 5.82812 13.9501C5.82812 15.386 6.99218 16.5501 8.42813 16.5501Z"
                                    stroke="#2E2F2A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            فیلتر
                        </div>
                        <div className=" hidden md:block ">
                            <a className="pr-2 pl-4 relative">
                                دسته بندی
                                <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.46875 10.6399L11.9987 14.1599L15.5287 10.6399" stroke="#292D32" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="hidden absolute right-0 bg-white z-50 shadow shadow-md max-w-xs min-w-[20rem] top-7 rounded-b-md">
                                    <ul className="w-full px-4 text-sm mt-4 divide-y divide-slate-200">
                                        <li>
                                            <div className="flex self-center py-3 relative">
                                                <span className=" inline-block w-4 h-4 rounded border border-1 border-[#aaa]">
                                                </span>
                                                <input type="checkbox" className="opacity-0 absolute" />
                                                <label className="inline-block text-sm leading-4 mr-2">
                                                    همه
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex self-center py-3 relative">
                                                <span className=" inline-block w-4 h-4 rounded border border-1 border-[#aaa]">
                                                </span>
                                                <input type="checkbox" className="opacity-0 absolute" />
                                                <label className="inline-block text-sm leading-4 mr-2">
                                                    قهوه
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                            <a className="px-4 relative">
                                برند ها
                                <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.46875 10.6399L11.9987 14.1599L15.5287 10.6399" stroke="#292D32" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="hidden absolute right-0 bg-white z-50 shadow shadow-md max-w-xs min-w-[20rem] top-7 rounded-b-md">
                                    <ul className="w-full px-4 text-sm mt-4 divide-y divide-slate-200">
                                        <li>
                                            <div className="flex self-center py-3 relative">
                                                <span className=" inline-block w-4 h-4 rounded border border-1 border-[#aaa]">
                                                </span>
                                                <input type="checkbox" className="opacity-0 absolute" />
                                                <label className="inline-block text-sm leading-4 mr-2">
                                                    همه
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex self-center py-3 relative">
                                                <span className=" inline-block w-4 h-4 rounded border border-1 border-[#aaa]">
                                                </span>
                                                <input type="checkbox" className="opacity-0 absolute" />
                                                <label className="inline-block text-sm leading-4 mr-2">
                                                    اسکوپای
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                            <a className="px-4 relative">
                                قیمت
                                <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.46875 10.6399L11.9987 14.1599L15.5287 10.6399" stroke="#292D32" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="hidden absolute right-0 bg-white z-50 shadow shadow-md max-w-xs min-w-[20rem] top-7 rounded-b-md">
                                    <div className="w-full px-4 text-sm mt-4">
                                        <div className="flex flex-1 justify-between mb-4 items-center rounded-md  ">
                                            <span className="inline-block text-sm">از</span>
                                            <div className="border border-1 border[#aaa] w-11/12 py-2.5 px-2  rounded relative after:content-['تومان']  after:leading-10 after:absolute after:top-0 after:bottom-0 after:text-xs after:my-auto after:left-2">
                                                <input type="text" className="w-10/12 right focus:outline-none" dir="ltr" />
                                            </div>
                                        </div>
                                        <div className="flex flex-1 justify-between mb-4 items-center  relative after:content-['تومان'] after:leading-10 after:absolute after:top-0 after:bottom-0 after:text-xs after:m-auto after:left-2 ">
                                            <span className="inline-block text-sm">تا</span>
                                            <div className="border border-1 border[#aaa] w-11/12 py-2.5 px-2 rounded ">
                                                <input type="text" className="w-10/12 right focus:outline-none" dir="ltr" />
                                            </div>
                                        </div>
                                        <input type="range" className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm mt-2" />
                                        <input className="text-center py-2.5 rounded text-white bg-[#FF7129] block w-full mb-4" value="اعمال" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7H21" stroke="#2E2F2A" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M6 12H18" stroke="#2E2F2A" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 17H14" stroke="#2E2F2A" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <p className="inline-block mx-1">پربازدید</p>
                            <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2E2F2A"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.46875 10.6399L11.9987 14.1599L15.5287 10.6399" stroke="#2E2F2A" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </section>
                <section className="sm:max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3  gap-3 m-4">
                        <div className="flex-wrap border border-1 border-gray-[#aaa] p-2 rounded-md relative">
                            <div className="absolute w-9 h-9 bg-[#444] top-0 left-0 text-white rounded-tl-md text-center text-xs leading-8">
                                <span>20%</span>
                            </div>
                            <img src="https://youkey.com.au/wp-content/uploads/2021/08/%E6%89%AB%E7%A0%81%E5%89%AF%E6%9C%AC-2-1024x664.jpg" className="w-full h-64 object-cover rounded-md" />
                            <h3 className="text-sm mt-2 font-bold">استیکر qr code مدل KM 345</h3>
                            <div className="mt-2 self-center">
                                <p className="text-sm text-[#444]">000 , 200 , 1<span className="text-left mr-1">تومان</span></p>
                            </div>
                            <div className="flex flex-1 justify-between mt-2">
                                <a className="text-[#00BBC7] text-xs self-center">توضیحات محصول</a>
                                <a className="bg-[#FF7129] inline-flex self-center w-9 h-9 rounded">
                                    <svg className="text-align inline-block m-auto  align-center self-center" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.34479 1.66663L4.32812 4.69163" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.6562 1.66663L15.6729 4.69163" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M1.66406 6.54167C1.66406 5 2.48906 4.875 3.51406 4.875H16.4807C17.5057 4.875 18.3307 5 18.3307 6.54167C18.3307 8.33333 17.5057 8.20833 16.4807 8.20833H3.51406C2.48906 8.20833 1.66406 8.33333 1.66406 6.54167Z"
                                            stroke="white" strokeWidth="1.5" />
                                        <path d="M8.13281 11.6666V14.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M11.9688 11.6666V14.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M2.91406 8.33337L4.08906 15.5334C4.35573 17.15 4.9974 18.3334 7.38073 18.3334H12.4057C14.9974 18.3334 15.3807 17.2 15.6807 15.6334L17.0807 8.33337"
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-wrap border border-1 border-gray-[#aaa] p-2 rounded-md relative">
                            <div className="absolute w-9 h-9 bg-[#444] top-0 left-0 text-white rounded-tl-md text-center text-xs leading-8">
                                <span>20%</span>
                            </div>
                            <img src="https://www.ordermate.com.au/hs-fs/hubfs/table-ordering-image2.jpg?width=700&height=385&name=table-ordering-image2.jpg" className="w-full h-64 object-cover rounded-md" />
                            <h3 className="text-sm mt-2 font-bold">استیکر qr code مدل KM 345</h3>
                            <div className="mt-2 self-center">
                                <p className="text-sm text-[#444]">000 , 200 , 1<span className="text-left mr-1">تومان</span></p>
                            </div>
                            <div className="flex flex-1 justify-between mt-2">
                                <a className="text-[#00BBC7] text-xs self-center">توضیحات محصول</a>
                                <a className="bg-[#FF7129] inline-flex self-center w-9 h-9 rounded">
                                    <svg className="text-align inline-block m-auto  align-center self-center" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.34479 1.66663L4.32812 4.69163" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.6562 1.66663L15.6729 4.69163" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M1.66406 6.54167C1.66406 5 2.48906 4.875 3.51406 4.875H16.4807C17.5057 4.875 18.3307 5 18.3307 6.54167C18.3307 8.33333 17.5057 8.20833 16.4807 8.20833H3.51406C2.48906 8.20833 1.66406 8.33333 1.66406 6.54167Z"
                                            stroke="white" strokeWidth="1.5" />
                                        <path d="M8.13281 11.6666V14.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M11.9688 11.6666V14.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <path
                                            d="M2.91406 8.33337L4.08906 15.5334C4.35573 17.15 4.9974 18.3334 7.38073 18.3334H12.4057C14.9974 18.3334 15.3807 17.2 15.6807 15.6334L17.0807 8.33337"
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Store;