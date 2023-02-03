import Link from "next/link";




const HomeJobIndex = () => {
    return (
        <div className="max-w-6xl m-auto">
            <section className="mx-auto min-w-min sm:max-w-7xl px-4 md:px-6 my-4 md:my-6">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="sm:order-last">
                        <img src="/images/img_homeWork.webp" alt="شغل خانگی"/>
                    </div>
                    <div className="sm:self-center lg:ml-10">
                        <h1 className="font-bold leading-10 text-xl lg:text-2xl lg:xl:text-3xl xl:leading-relaxed mt-3">به راحتی و
                            با چند کلیک ساده شغل
                            خانگی خودت رو بساز
                        </h1>
                        <p className="block text-sm lg:text-base lg:leading-7 mt-3 leading-6">کافه ایران برای حمایت از کسب وکارهای
                            خانگی و ایجاد اشتغال قابلیتی
                            به افزونه های خود اضافه کرده تا افرادی که دارای مشاغل خانگی هستند نیز بتوانند شغل خود را گسترش دهند.
                        </p>
                        <div className="block mt-4">
                            <Link href="/liveRegister">
                                <a
                                    title="ثبت شغل خانگی"
                                    className="inline-block text-white text-sm bg-[#FF7129] py-3.5 px-3.5 rounded hover:bg-[#CD4A08] cursor-pointer">ثبت
                                    رستوران خانگی
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f8f8f8] dark:bg-zinc-900 rounded-md">
                <div className="mt-16 mx-auto min-w-min sm:max-w-7xl font-semi px-2 sm:px-4 mb-10 py-10">
                    <h3 className="font-bold text-lg lg:text-xl xl:text-2xl block text-center">قابلیت ها و امکانات کافه ایران</h3>
                    <div className="grid md:grid-cols-2 mt-8">
                        <div className="relative self-center">
                            <div className=" grid gap-y-6 mx-12 sm:mx-28 mt-8">
                                <div className="shadow-md px-4 py-5 rounded-md bg-white dark:bg-zinc-800">
                                    <h3 className="text-base text-center font-bold">
                                        ساده کردن سفارشات
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-6 mt-3 dark:text-gray-200">
                                        صفحه منوی دیجیتال شما تصاویر زیبایی را به نمایش می گذارد و این امر مشتریان شما را تشویق
                                        می کند که سریع تصمیم بگیرند.
                                    </p>
                                </div>
                                <div className="shadow-lg px-4 py-5 rounded-md bg-white dark:bg-zinc-800">
                                    <h3 className="text-base text-center font-bold">
                                        ایجاد روابط قوی تر
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-6 mt-3 dark:text-gray-200">
                                        تابلوهای منو دیجیتال بخشی از تجربه کلی برند شما هستند و به این ترتیب کمک می کنند تا
                                        روابط قوی تری با مشتریان خود ایجاد کنید.
                                    </p>
                                </div>
                                <div className="shadow-md px-4 py-5 rounded-md bg-white dark:bg-zinc-800">
                                    <h3 className="text-base text-center font-bold">
                                        به راحتی منو را تغییر دهید
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-6 mt-3 dark:text-gray-200">
                                        برای هر بار تغییر منو باید هزینه ای برای طراحی مجدد پرداخت کنید منو انلاین این مشکل را برای شما حل کرده و به راحتی میتوانید منو خود را تغییر دهید
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid justify-end mx-auto mt-2 md:block">
                            <img src="/images/shortLinks.webp" className="mx-auto w-4/5 h-auto" alt="منو شغل خانگی" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12 mx-auto min-w-min sm:max-w-7xl font-semi px-4">
                <div>
                    <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-center">چرا کافه ایران انتخاب کنیم ؟</h3>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2  lg:gap-x-32 xl:gap-x-40 gap-y-4 xl:gap-y-10 mt-6">
                        <div className="my-4">
                            <svg width="96" height="96" className="mx-auto" viewBox="0 0 96 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M75.875 88H19.875C7.875 88 7.875 82.6 7.875 76V72C7.875 69.8 9.675 68 11.875 68H83.875C86.075 68 87.875 69.8 87.875 72V76C87.875 82.6 87.875 88 75.875 88Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M82.8781 52V68H13.0781V52C13.0781 36.64 23.9181 23.8 38.3581 20.72C40.5181 20.24 42.7581 20 45.0781 20H50.8781C53.1981 20 55.4781 20.24 57.6381 20.72C72.0781 23.84 82.8781 36.64 82.8781 52Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M58 18C58 18.96 57.88 19.84 57.64 20.72C55.48 20.24 53.2 20 50.88 20H45.08C42.76 20 40.52 20.24 38.36 20.72C38.12 19.84 38 18.96 38 18C38 12.48 42.48 8 48 8C53.52 8 58 12.48 58 18Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M60 44H36" stroke="#FF7129" strokeWidth="3.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                            <p className="text-center my-3 font-bold text-lg">طعم غذای خانگی</p>
                            <p className="text-center text-sm leading-6">
                                بسیاری طعم غذای خانگی را ترجیح میدهند. شما میتوانید منو غذای خانگی خود را به راحتی به نمایش بگذارید.
                            </p>
                        </div>
                        <div className="my-4">
                            <svg width="96" height="96" className="mx-auto" viewBox="0 0 96 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45.8376 54.9199C52.0453 54.9199 57.0777 49.8876 57.0777 43.6799C57.0777 37.4723 52.0453 32.4399 45.8376 32.4399C39.63 32.4399 34.5977 37.4723 34.5977 43.6799C34.5977 49.8876 39.63 54.9199 45.8376 54.9199Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M66.5981 80.8C66.5981 71.48 57.3181 63.8799 45.8381 63.8799C34.3581 63.8799 25.0781 71.44 25.0781 80.8"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M84 50C84 71 67 88 46 88C25 88 8 71 8 50C8 29 25 12 46 12C51.24 12 56.24 13.04 60.8 14.96C60.28 16.56 60 18.24 60 20C60 23 60.84 25.84 62.32 28.24C63.12 29.6 64.16 30.8399 65.36 31.8799C68.16 34.4399 71.88 36 76 36C77.76 36 79.44 35.7199 81 35.1599C82.92 39.7199 84 44.76 84 50Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M92 20C92 21.28 91.84 22.52 91.52 23.72C91.16 25.32 90.52 26.88 89.68 28.24C87.76 31.48 84.68 33.9999 81 35.1599C79.44 35.7199 77.76 36 76 36C71.88 36 68.16 34.4399 65.36 31.8799C64.16 30.8399 63.12 29.6 62.32 28.24C60.84 25.84 60 23 60 20C60 18.24 60.28 16.56 60.8 14.96C61.56 12.64 62.84 10.5601 64.52 8.84009C67.44 5.84009 71.52 4 76 4C80.72 4 85 6.04007 87.88 9.32007C90.44 12.1601 92 15.92 92 20Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M81.9591 19.9199H70.0391" stroke="#FF7129" strokeWidth="3.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M76 14.0801V26.04" stroke="#FF7129" strokeWidth="3.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-center my-3 font-bold text-lg">ایجاد اشتغال خانگی</p>
                            <p className="text-center text-sm leading-6">ایجاد مشاغل خانگی برای افراد که نمیتوانند به
                                هر دلیلی در بیرون از خانه کار کنند.
                            </p>
                        </div>
                        <div className="my-4">
                            <svg width="96" height="96" className="mx-auto" viewBox="0 0 96 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M83 53C83 72.32 67.32 88 48 88C28.68 88 13 72.32 13 53C13 33.68 28.68 18 48 18C67.32 18 83 33.68 83 53Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M48 32V52" stroke="#FF7129" strokeWidth="3.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M36 8H60" stroke="#2E2F2A" strokeWidth="3.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-center my-3 font-bold text-lg">صرفه جویی در زمان</p>
                            <p className="text-center text-sm leading-6">در زمان و کار خود صرفه جویی کنید و کار های خود را
                                به خوبی مدیریت و زمان بندی کنید.
                            </p>
                        </div>
                        <div className="my-4">
                            <svg width="96" height="96" className="mx-auto" viewBox="0 0 96 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 48.8H60" stroke="#FF7129" strokeWidth="3.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M32 64.8H49.52" stroke="#FF7129" strokeWidth="3.5" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M40 24H56C64 24 64 20 64 16C64 8 60 8 56 8H40C36 8 32 8 32 16C32 24 36 24 40 24Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path
                                    d="M64 16.08C77.32 16.8 84 21.72 84 40V64C84 80 80 88 60 88H36C16 88 12 80 12 64V40C12 21.76 18.68 16.8 32 16.08"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                            <p className="text-center my-3 font-bold text-lg">تنوع غذایی</p>
                            <p className="text-center text-sm leading-6">ایجاد تنوع غذایی در برنامه غذایی و تغییر سریع
                                منو بر اساس روز های هفته.
                            </p>
                        </div>
                        <div className="my-4">
                            <svg width="96" height="96" className="mx-auto" viewBox="0 0 96 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M72.0003 28.64C71.7603 28.6 71.4803 28.6 71.2403 28.64C65.7203 28.44 61.3203 23.92 61.3203 18.32C61.3203 12.6 65.9203 8 71.6403 8C77.3603 8 81.9603 12.64 81.9603 18.32C81.9203 23.92 77.5203 28.44 72.0003 28.64Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M67.8817 57.76C73.3617 58.68 79.4017 57.72 83.6417 54.88C89.2817 51.12 89.2817 44.96 83.6417 41.2C79.3617 38.36 73.2417 37.4 67.7617 38.36"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M23.8819 28.64C24.1219 28.6 24.4019 28.6 24.6419 28.64C30.1619 28.44 34.5619 23.92 34.5619 18.32C34.5619 12.6 29.9619 8 24.2419 8C18.5219 8 13.9219 12.64 13.9219 18.32C13.9619 23.92 18.3619 28.44 23.8819 28.64Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M28.0017 57.76C22.5217 58.68 16.4817 57.72 12.2417 54.88C6.60172 51.12 6.60172 44.96 12.2417 41.2C16.5217 38.36 22.6417 37.4 28.1217 38.36"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M48.0003 58.52C47.7603 58.48 47.4803 58.48 47.2403 58.52C41.7203 58.32 37.3203 53.8 37.3203 48.2C37.3203 42.48 41.9203 37.88 47.6403 37.88C53.3603 37.88 57.9603 42.52 57.9603 48.2C57.9203 53.8 53.5203 58.36 48.0003 58.52Z"
                                    stroke="#FF7129" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M36.3589 71.1199C30.7189 74.8799 30.7189 81.0399 36.3589 84.7999C42.7589 89.0799 53.2389 89.0799 59.6389 84.7999C65.2789 81.0399 65.2789 74.8799 59.6389 71.1199C53.2789 66.8799 42.7589 66.8799 36.3589 71.1199Z"
                                    stroke="#2E2F2A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-center my-3 font-bold text-lg">باشگاه مشتریان</p>
                            <p className="text-center text-sm leading-6">
                                با عضویت در صفحه اختصاصی شما. مشتریان شما به سرعت از تغییرات مجموعه شما با خبر میشوند.
                            </p>
                        </div>
                        <div className="my-4">
                            <svg width="96" height="96" className="mx-auto" viewBox="0 0 96 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M77.3035 23.1109L75.8484 24.0831V24.0831L77.3035 23.1109ZM77.3035 64.8891L75.8484 63.9169H75.8484L77.3035 64.8891ZM72.8891 69.3035L71.9169 67.8484V67.8484L72.8891 69.3035ZM56 71.9946L55.9924 70.2446C55.0289 70.2488 54.25 71.031 54.25 71.9946H56ZM56 72L57.5652 72.7826C57.6867 72.5396 57.75 72.2717 57.75 72H56ZM40 72H38.25C38.25 72.2717 38.3133 72.5396 38.4348 72.7826L40 72ZM40 71.9946H41.75C41.75 71.031 40.9711 70.2488 40.0076 70.2446L40 71.9946ZM23.1109 69.3035L24.0831 67.8484H24.0831L23.1109 69.3035ZM18.6965 64.8891L20.1516 63.9169H20.1516L18.6965 64.8891ZM18.6965 23.1109L20.1516 24.0831L18.6965 23.1109ZM23.1109 18.6965L24.0831 20.1516L23.1109 18.6965ZM72.8891 18.6965L71.9169 20.1516V20.1516L72.8891 18.6965ZM81.75 44C81.75 38.4186 81.7521 34.1008 81.404 30.6783C81.0528 27.2265 80.331 24.4919 78.7586 22.1386L75.8484 24.0831C76.9725 25.7654 77.5989 27.8575 77.9219 31.0325C78.2479 34.2367 78.25 38.3457 78.25 44H81.75ZM78.7586 65.8614C80.331 63.5081 81.0528 60.7735 81.404 57.3217C81.7521 53.8992 81.75 49.5814 81.75 44H78.25C78.25 49.6543 78.2479 53.7632 77.9219 56.9675C77.5989 60.1425 76.9725 62.2346 75.8484 63.9169L78.7586 65.8614ZM73.8614 70.7586C75.7995 69.4636 77.4636 67.7995 78.7586 65.8614L75.8484 63.9169C74.8088 65.4728 73.4728 66.8088 71.9169 67.8484L73.8614 70.7586ZM56.0076 73.7445C60.3147 73.7257 63.7653 73.6435 66.5987 73.2518C69.4603 72.8562 71.8059 72.132 73.8614 70.7586L71.9169 67.8484C70.447 68.8306 68.6634 69.4331 66.1195 69.7847C63.5474 70.1403 60.3161 70.2257 55.9924 70.2446L56.0076 73.7445ZM57.75 72V71.9946H54.25V72H57.75ZM50.4597 86.9938L57.5652 72.7826L54.4348 71.2174L47.3292 85.4285L50.4597 86.9938ZM45.5403 86.9938C46.5538 89.0207 49.4462 89.0207 50.4597 86.9938L47.3292 85.4285C47.6056 84.8757 48.3944 84.8757 48.6708 85.4285L45.5403 86.9938ZM38.4348 72.7826L45.5403 86.9938L48.6708 85.4285L41.5652 71.2174L38.4348 72.7826ZM38.25 71.9946V72H41.75V71.9946H38.25ZM22.1386 70.7586C24.1941 72.132 26.5397 72.8562 29.4013 73.2518C32.2348 73.6435 35.6853 73.7257 39.9924 73.7445L40.0076 70.2446C35.6839 70.2257 32.4526 70.1403 29.8805 69.7847C27.3366 69.4331 25.553 68.8306 24.0831 67.8484L22.1386 70.7586ZM17.2414 65.8614C18.5364 67.7995 20.2005 69.4636 22.1386 70.7586L24.0831 67.8484C22.5272 66.8088 21.1912 65.4728 20.1516 63.9169L17.2414 65.8614ZM14.25 44C14.25 49.5814 14.2479 53.8992 14.596 57.3217C14.9472 60.7735 15.669 63.5081 17.2414 65.8614L20.1516 63.9169C19.0275 62.2346 18.4011 60.1425 18.0781 56.9675C17.7521 53.7632 17.75 49.6543 17.75 44H14.25ZM17.2414 22.1386C15.669 24.4919 14.9472 27.2265 14.596 30.6783C14.2479 34.1008 14.25 38.4186 14.25 44H17.75C17.75 38.3457 17.7521 34.2367 18.0781 31.0325C18.4011 27.8575 19.0275 25.7654 20.1516 24.0831L17.2414 22.1386ZM22.1386 17.2414C20.2005 18.5364 18.5364 20.2005 17.2414 22.1386L20.1516 24.0831C21.1912 22.5272 22.5272 21.1912 24.0831 20.1516L22.1386 17.2414ZM44 14.25C38.4186 14.25 34.1008 14.2479 30.6783 14.596C27.2265 14.9472 24.4919 15.669 22.1386 17.2414L24.0831 20.1516C25.7654 19.0275 27.8575 18.4011 31.0325 18.0781C34.2367 17.7521 38.3457 17.75 44 17.75V14.25ZM52 14.25H44V17.75H52V14.25ZM73.8614 17.2414C71.5081 15.669 68.7735 14.9472 65.3217 14.596C61.8992 14.2479 57.5814 14.25 52 14.25V17.75C57.6543 17.75 61.7632 17.7521 64.9675 18.0781C68.1425 18.4011 70.2346 19.0275 71.9169 20.1516L73.8614 17.2414ZM78.7586 22.1386C77.4636 20.2005 75.7995 18.5364 73.8614 17.2414L71.9169 20.1516C73.4728 21.1912 74.8088 22.5272 75.8484 24.0831L78.7586 22.1386Z"
                                    fill="#2E2F2A" />
                                <circle cx="64" cy="44" r="4" fill="#2E2F2A" />
                                <circle cx="48" cy="44" r="4" fill="#FF7129" />
                                <circle cx="32" cy="44" r="4" fill="#2E2F2A" />
                            </svg>
                            <p className="text-center my-3 font-bold text-lg">دریافت نظرات کاربران</p>
                            <p className="text-center text-sm leading-6">با دریافت نظرات کاربران میتوانید از کیفیت غذای خود
                                مطلع شده و کیفیت غذای خود را بهبود دهید.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-16 mx-auto min-w-min sm:max-w-7xl font-semi px-4 mb-10">
                <div className="text-center">
                    <h2 className="text-center font-semibold text-base md:text-lg lg:text-xl">
                        شغل خانگی خود را با کمترین هزینه معرفی کن و گسترش بده
                    </h2>
                    <Link href="/liveRegister">
                        <a
                            className="inline-block mt-5 text-white text-sm bg-[#FF7129] py-3.5 px-3.5 rounded hover:bg-[#CD4A08] cursor-pointer">ثبت
                            رستوران خانگی
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomeJobIndex;