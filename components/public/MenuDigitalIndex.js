import Link from "next/link";




const MenuDigitalIndex = () => {
    return (
        <>
            <section className="mx-auto sm:max-w-7xl px-4 lg:px-6 xl:px-2 my-6">
                <div className="bg-[#f8f8f8] rounded-lg p-4 grid sm:grid-cols-2 md:min-h-min md:max-h-96 lg:min-h-[460px] xl:max-h-[480px] sm:gap-x-8  lg:py-6 lg:px-8 dark:bg-zinc-800">
                    <div className="sm:order-last">
                        <img
                            width="500"
                            height="500"
                            alt="نمونه عکس منو دیجیتال"
                            src="/images/features/menudigitalcafe.webp"
                            className="mx-auto w-full md:relative md:top-8 lg:top-16 sm:w-full md:w-10/12 xl:w-10/12" />
                    </div>
                    <div className="self-center">
                        <h3 className="font-semibold text-xl lg:text-2xl xl:text-3xl">منو دیجیتال</h3>
                        <p className="text-sm mt-3 lg:mt-6 leading-6 xl:text-lg lg:leading-8 xl:leading-9">
                            منو دیجیتال خودت رو به صورت رایگان ایجاد کنید
                            <br />
                            منو دیجیتال کافه ایران جایگزینی مناسب به جای منو
                            کاغذی کافه رستوران شما
                            منو دیجیتال حضوری نداری
                        </p>
                        <div className="mt-4 lg:mt-6">
                            <Link href="/liveRegister">
                                <a
                                    title="ثبت سریع مجموعه"
                                    target="_blank"
                                    className="inline-block rounded-md w-full bg-[#FF7129] text-white text-sm p-4 cursor-pointer md:inline">منو
                                    دیجیتال خود را رایگان بسازید
                                </a>
                            </Link>
                            <Link href="/cafes/2">
                                <a
                                    title="نمونه منو"
                                    target="_blank"
                                    className="rounded-md inline-block w-full border border-1 text-sm border-gray-700  mt-4 lg:mt-0 lg:mr-4 p-4 cursor-pointer dark:bg-zinc-700 md:inline">
                                    مشاهده نمونه منو دیجیتال
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <h3 className="font-bold text-center mx-auto mt-24 md:mt-32 lg:mt-40 mb-12 text-xl sm:text-2xl leading-10">منو دیجیتال
                    کافه ایران راهی برای کسب درآمد بیشتر</h3>
                <div className="grid sm:grid-cols-2 mb-12">
                    <div>
                        <img
                            width="500"
                            height="500"
                            title="منو سفارشی"
                            src="/images/features/itemsMenu.webp"
                            className="w-9/12 mx-auto" />
                    </div>
                    <div className="self-center px-4 sm:mr-4 md:mr-8 mt-4 sm:mt-0">
                        <h3 className="font-bold text-lg lg:text-2xl">
                            منو خود را سفارشی بسازید
                        </h3>
                        <p className="text-sm lg:text-base mt-4 leading-9 ml-8">
                            مطابق با سلیقه خود نحوه نمایش منو دیجیتال را برای مشتریان خود طراحی
                            کنید و مجموعه خود را به مشتریان معرفی کنید , همچنین محصولات خود را
                            در دسته بندی های مرتبط سازمان دهی کنید
                            .
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 mb-12">
                    <div className="sm:order-last">
                        <img
                            title="به روزرسانی سریع با منو دیجیتال"
                            src="/images/features/menuDigital-address.webp"
                            className="w-9/12 mx-auto" />
                    </div>
                    <div className="self-center px-4 sm:mr-4 md:mr-8 mt-4 sm:mt-0">
                        <h3 className="font-bold text-lg lg:text-2xl">
                            به روزرسانی سریع با منو دیجیتال
                        </h3>
                        <p className="text-sm lg:text-base mt-4 leading-9">
                            در هر بازه زمانی دلخواه میتوانید به راحتی قیمت محصولات خود را
                            در منو بروزرسانی کنید . علاوه بر این میتوانید ایتم های محصولات
                            را به منو اضافه یا حذف کنید.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2">
                    <div>
                        <img
                            width="500"
                            height="500"
                            title="با منو دیجیتال کافه ایران با مشتریان خود در تعامل باشید"
                            src="/images/features/menuDigitalEvents.webp"
                            className="w-9/12 mx-auto" />
                    </div>
                    <div className="self-center px-4 sm:ml-4 md:ml-8 mt-4 sm:mt-0">
                        <h3 className="font-bold text-lg lg:text-2xl">
                            با منو دیجیتال کافه ایران با مشتریان خود در تعامل باشید
                        </h3>
                        <p className="text-sm lg:text-base mt-4 leading-9">
                            شما صاحبان مجموعه میتوانید به راحتی رویداد های کافه و یا رستوران خود را به اطلاع مشتریان برسانید.
                            نظرات آنها را در مورد مجموعه یا هر ایتم منو به صورت جدا دریافت کنید و همچنین پاسخ دهید.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto sm:max-w-7xl px-4 lg:px-6 xl:px-2 my-20 lg:my-32">
                <div>
                    <h3 className="font-bold text-center mx-auto mb-12 text-2xl">مزایا منو دیجیتال</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <span className="bg-[#2E2F2A] rounded-md text-white text-sm text-center block py-5 dark:bg-zinc-700">
                            صرفه جویی در هزینه
                        </span>
                        <span className="bg-[#f8f8f8] rounded-md text-sm text-center block py-5 dark:bg-zinc-800">
                            قابلیت تغییر در هر زمان
                        </span>
                        <span className="bg-[#2E2F2A] rounded-md text-white text-sm text-center block py-5 dark:bg-zinc-700">
                            جذب مشتری و افزایش در آمد
                        </span>
                        <span className="bg-[#f8f8f8] rounded-md text-sm text-center block py-5 dark:bg-zinc-800">
                            صرفه جویی در زمان
                        </span>
                        <span className="bg-[#2E2F2A] rounded-md text-white text-sm text-center block py-5 dark:bg-zinc-700">
                            تجربه کاربری پویا
                        </span>
                        <span className="bg-[#f8f8f8] rounded-md text-sm text-center block py-5 dark:bg-zinc-800">
                            کمک به محیط زیست
                        </span>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f8f8] py-4 mb-16 dark:bg-zinc-800">
                <div className="mx-auto sm:max-w-7xl px-4 lg:px-6 xl:px-2">
                    <div className="grid lg:grid-cols-2">
                        <div className="md:self-center order-last">
                            <h3 className="text-2xl font-bold my-8">چرا منو دیجیتال کافه ایران</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#2E2F2A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 9.15949C7 8.22948 7.76 7.46942 8.69 7.46942C9.62 7.46942 10.38 8.22948 10.38 9.15949C10.38 11.0395 7.71 11.2395 7.12 13.0295C7 13.3995 7.31 13.7695 7.7 13.7695H10.38" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.0417 13.76V8.05003C16.0417 7.79003 15.8717 7.55997 15.6217 7.48997C15.3717 7.41997 15.1017 7.51997 14.9617 7.73997C14.2417 8.89997 13.4617 10.22 12.7817 11.38C12.6717 11.57 12.6717 11.82 12.7817 12.01C12.8917 12.2 13.1017 12.3199 13.3317 12.3199H17.0017" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    پشتیبانی 24 ساعته
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.68055 12.72H10.4205V16.77C10.4205 17.37 11.1605 17.65 11.5605 17.2L15.8205 12.36C16.1905 11.94 15.8905 11.28 15.3305 11.28H13.5905V7.23002C13.5905 6.63002 12.8505 6.35002 12.4505 6.80002L8.19055 11.64C7.82055 12.06 8.12055 12.72 8.68055 12.72Z" stroke="#FF7129" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9727 22C17.4955 22 21.9727 17.5228 21.9727 12C21.9727 6.47715 17.4955 2 11.9727 2C6.44981 2 1.97266 6.47715 1.97266 12C1.97266 17.5228 6.44981 22 11.9727 22Z" stroke="#2E2F2A" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    دسترسی سریع واسان
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 2.5H11L10.9613 2.5C9.10846 2.49999 7.6668 2.49999 6.54429 2.65091C5.39959 2.80481 4.51219 3.12385 3.81802 3.81802C3.12385 4.51219 2.80481 5.39959 2.65091 6.54429C2.49999 7.6668 2.49999 9.10846 2.5 10.9613L2.5 11V13L2.5 13.0387C2.49999 14.8915 2.49999 16.3332 2.65091 17.4557C2.80481 18.6004 3.12385 19.4878 3.81802 20.182C4.51219 20.8762 5.39959 21.1952 6.54429 21.3491C7.6668 21.5 9.10845 21.5 10.9613 21.5H11H13H13.0387C14.8915 21.5 16.3332 21.5 17.4557 21.3491C18.6004 21.1952 19.4878 20.8762 20.182 20.182C20.8762 19.4878 21.1952 18.6004 21.3491 17.4557C21.5 16.3332 21.5 14.8915 21.5 13.0387V13V11V10.9613C21.5 9.10845 21.5 7.6668 21.3491 6.54429C21.1952 5.39959 20.8762 4.51219 20.182 3.81802C19.4878 3.12385 18.6004 2.80481 17.4557 2.65091C16.3332 2.49999 14.8915 2.49999 13.0387 2.5L13 2.5Z" stroke="#2E2F2A" />
                                        <circle cx="16.5" cy="7.5" r="1.5" fill="#FF7129" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.9976 14.2904L18.6544 13.9471L18.6386 13.9313L18.6385 13.9313C18.238 13.5307 17.9149 13.2077 17.6314 12.9687C17.3394 12.7226 17.055 12.5353 16.7221 12.4349C16.2512 12.2928 15.7488 12.2928 15.2779 12.4349C14.945 12.5353 14.6606 12.7226 14.3686 12.9687C14.0851 13.2077 13.762 13.5307 13.3615 13.9313L13.3615 13.9313L13.3456 13.9471C13.0459 14.2469 12.8458 14.4462 12.6832 14.5807C12.5218 14.7142 12.452 14.7359 12.4237 14.7408C12.3029 14.762 12.1785 14.7381 12.0742 14.6735C12.0498 14.6584 11.993 14.6123 11.8928 14.4285C11.7917 14.2432 11.68 13.9838 11.513 13.5942L11.4596 13.4696L11.4475 13.4414L11.4475 13.4414C11.0829 12.5907 10.7931 11.9144 10.5107 11.4126C10.2237 10.9026 9.90522 10.4984 9.44575 10.268C9.03426 10.0618 8.57382 9.97308 8.11515 10.0118C7.603 10.055 7.15716 10.3121 6.70134 10.6789C6.25273 11.04 5.73245 11.5603 5.07799 12.2148L5.07798 12.2148L5.05634 12.2364L5 12.2928V12.9999C5 13.2462 5.00007 13.4816 5.00044 13.7065L5.76344 12.9435C6.44443 12.2626 6.92686 11.7811 7.32835 11.458C7.72756 11.1366 7.98255 11.0265 8.19924 11.0082C8.47444 10.985 8.75071 11.0382 8.9976 11.162C9.192 11.2594 9.38786 11.4564 9.63918 11.903C9.89194 12.3521 10.1611 12.9783 10.5404 13.8635L10.5938 13.9881L10.6034 14.0105L10.6034 14.0105C10.7583 14.3719 10.8884 14.6754 11.0149 14.9073C11.1448 15.1455 11.3038 15.3727 11.5479 15.5238C11.8608 15.7175 12.2341 15.7894 12.5966 15.7258C12.8794 15.6761 13.1114 15.5242 13.3204 15.3513C13.524 15.183 13.7575 14.9495 14.0355 14.6714L14.0527 14.6542C14.4728 14.2341 14.766 13.9416 15.013 13.7334C15.2553 13.5292 15.4185 13.437 15.5667 13.3922C15.8493 13.307 16.1507 13.307 16.4333 13.3922C16.5815 13.437 16.7447 13.5292 16.987 13.7334C17.234 13.9416 17.5272 14.2341 17.9473 14.6542L18.9755 15.6825C18.9887 15.2721 18.9948 14.812 18.9976 14.2904Z" fill="#2E2F2A" />
                                    </svg>
                                    گالری تصاویر
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9609 6.16998C18.9609 7.55998 20.3409 9.76998 20.6209 12.32" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.48828 12.37C3.74828 9.82997 5.10828 7.61997 7.08828 6.21997" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.19141 20.94C9.35141 21.53 10.6714 21.86 12.0614 21.86C13.4014 21.86 14.6614 21.56 15.7914 21.01" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.0613 7.70001C13.5966 7.70001 14.8412 6.45537 14.8412 4.92001C14.8412 3.38466 13.5966 2.14001 12.0613 2.14001C10.5259 2.14001 9.28125 3.38466 9.28125 4.92001C9.28125 6.45537 10.5259 7.70001 12.0613 7.70001Z" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.83078 19.92C6.36613 19.92 7.61078 18.6753 7.61078 17.14C7.61078 15.6046 6.36613 14.36 4.83078 14.36C3.29543 14.36 2.05078 15.6046 2.05078 17.14C2.05078 18.6753 3.29543 19.92 4.83078 19.92Z" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.1706 19.92C20.706 19.92 21.9506 18.6753 21.9506 17.14C21.9506 15.6046 20.706 14.36 19.1706 14.36C17.6353 14.36 16.3906 15.6046 16.3906 17.14C16.3906 18.6753 17.6353 19.92 19.1706 19.92Z" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    صفحه اشتراک گذاری کافه
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    قابلیت دسته بندی
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.9675 14.44C18.3375 14.67 19.8475 14.43 20.9075 13.72C22.3175 12.78 22.3175 11.24 20.9075 10.3C19.8375 9.58998 18.3075 9.34997 16.9375 9.58997" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.0014 14.44C5.6314 14.67 4.12141 14.43 3.06141 13.72C1.65141 12.78 1.65141 11.24 3.06141 10.3C4.13141 9.58998 5.6614 9.34997 7.0314 9.58997" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9981 14.63C11.9381 14.62 11.8681 14.62 11.8081 14.63C10.4281 14.58 9.32812 13.45 9.32812 12.05C9.32812 10.62 10.4781 9.47003 11.9081 9.47003C13.3381 9.47003 14.4881 10.63 14.4881 12.05C14.4781 13.45 13.3781 14.59 11.9981 14.63Z" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.08875 17.78C7.67875 18.72 7.67875 20.26 9.08875 21.2C10.6887 22.27 13.3087 22.27 14.9087 21.2C16.3187 20.26 16.3187 18.72 14.9087 17.78C13.3187 16.72 10.6887 16.72 9.08875 17.78Z" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    باشگاه مشتریان
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 21.4699V16.95" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12.95H10" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.73828 21.47H9.99828" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22.0013 12.8V18.51C22.0013 20.88 21.4113 21.47 19.0413 21.47H15.4913C13.1213 21.47 12.5312 20.88 12.5312 18.51V12.8C12.5312 10.43 13.1213 9.83997 15.4913 9.83997H19.0413C21.4113 9.83997 22.0013 10.43 22.0013 12.8Z" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.2461 18.25H17.2528" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    قابلیت وب اپلیکیشن
                                </span>
                                <span className="rounded-md text-sm pr-8 block py-4 bg-white my-auto dark:bg-zinc-700">
                                    <svg className="inline-block ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.389 5.21L16.799 8.02999C16.989 8.41999 17.499 8.78999 17.929 8.86999L20.479 9.28999C22.109 9.55999 22.489 10.74 21.319 11.92L19.329 13.91C18.999 14.24 18.809 14.89 18.919 15.36L19.489 17.82C19.939 19.76 18.899 20.52 17.189 19.5L14.799 18.08C14.369 17.82 13.649 17.82 13.219 18.08L10.829 19.5C9.11896 20.51 8.07897 19.76 8.52897 17.82L9.09898 15.36C9.20898 14.9 9.01898 14.25 8.68898 13.91L6.69899 11.92C5.52899 10.75 5.90898 9.56999 7.53898 9.28999L10.089 8.86999C10.519 8.79999 11.029 8.41999 11.219 8.02999L12.629 5.21C13.379 3.68 14.619 3.68 15.389 5.21Z" stroke="#2E2F2A" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 5H2" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 19H2" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 12H2" stroke="#FF7129" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    ایجاد رویداد های کافه
                                </span>
                            </div>
                        </div>
                        <div>
                            <img
                                width="500"
                                height="500"
                                title="چرا منو کافه ایران"
                                src="/images/features/menuDigitalDashboard.webp"
                                className="order-first lg:order-last w-10/12 sm:w-9/12 md:w-7/12 lg:w-9/12 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default MenuDigitalIndex;