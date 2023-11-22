import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import Link from "next/link";
import { useTheme } from 'next-themes'


const Footer = () => {

    const { resolvedTheme } = useTheme()

    return (
        <footer>
            <div className="bg-zinc-100  dark:bg-zinc-900">
                <div className="max-w-[1800px] text-xs p-4 pb-16 flex flex-col justify-start px-8 items-start md:flex-row md:justify-between  md:py-16 m-auto">
                    <div className="mb-4 md:w-3/6">
                        <div className="flex justify-start items-center">
                            {
                                resolvedTheme === "dark" ?
                                    <img width="45" height="45" className="hidden lg:flex" src="/logo_dark.svg" alt="لوگو کافه ایران" />
                                    :
                                    <img width="45" height="45" className="hidden lg:flex" src="/logo_light.svg" alt="لوگو کافه ایران" />
                            }
                            <h4 className='text-4xl font-bold'>کافه <span className='text-[#FF7129]'>ایران</span></h4>
                        </div>
                        <p className='mt-2 text-sm  md:mt-4 md:w-3/4 leading-9'>
                            یک پنل مدیریت کامل برای کسب و کار خودتون دریافت کنید و منو های دیجیتال با قابلیت دسترسی سریع برای مشتریان کافه و رستوران و یا هتل ایجاد کنید. رزروهای آنلاین و یا انتقادات پیشنهادات را آنلاین دریافت کنید.
                        </p>
                        <Link href="/menu_digital">
                            <a className='text-blue-400'>منو دیجیتال</a>
                        </Link>
                    </div>
                    <div className="mb-4 md:w-1/6">
                        <h4>دسترسی ها</h4>
                        <ul className='mt-4 flex flex-col gap-y-4 text-zinc-700 dark:text-white'>
                            <li><Link href="/cafes/2"><a title='مشاهده نمونه منو دیجیتال'>مشاهده نمونه</a></Link></li>
                            <li><Link href="/liveRegister"><a title='دریافت منو دیجیتال کمتر از 1 دقیقه'>ثبت سریع کافه</a></Link></li>
                            <li><Link href="/features"><a title='ویژگی های منو دیجیتال'>امکانات کافه ایران</a></Link></li>
                            <li><Link href="/packages"><a title='تعرفه های منو دیجیتال'>تعرفه ها</a></Link></li>
                            <li><Link href="/"><a title='صفحه اصلی'>خانه</a></Link></li>
                            <li><Link href="/home_job"><a title='شغل خانگی'>منو غذاهای خانگی</a></Link></li>
                            <li><Link href="/aboutUs"><a title='درباره ما بیشتر بدانید'>درباره ما</a></Link></li>
                            <li><Link href="/contactUs"><a title='با ما تماس بگیرید'>تماس با ما</a></Link></li>
                            <li><Link href="/blogs"><a title='مقالات وب سایت کافه ایران'>مقالات</a></Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:w-1/6">
                        <h4>راه های ارتباطی</h4>
                        <ul className=' mt-2'>
                            <li className='flex justify-start items-center mt-2'>
                                <PhoneIcon className="h-6 w-6" />
                                <span className='mr-4'>09332839823</span>
                            </li>
                            <li className='flex justify-start items-center mt-2'>
                                <MailIcon className="h-6 w-6" />
                                <span className='mr-4'>khosrora153333@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:w-1/6">
                        <h4>ارتباط مجازی</h4>
                        <div className="flex justify-start items-center">
                            <Link href="https://www.linkedin.com/company/cafesiran/">
                                <a target="_blank" title='منو دیجیتال در لینکدین'>
                                    <svg className='h-6 w-6 text-zinc-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3378 17.9342H15.6705V14.1394C15.6705 13.2345 15.6527 12.07 14.2831 12.07C12.894 12.07 12.6811 13.0556 12.6811 14.0742V17.9342H10.0147V10.1303H12.5756V11.1964H12.6111C13.1335 10.3857 14.1039 9.90142 15.1373 9.93607C17.841 9.93607 18.3387 11.5518 18.3387 13.6527L18.3378 17.9342ZM7.00498 9.06333C6.14987 9.06333 5.4571 8.43395 5.4571 7.6571C5.4571 6.88025 6.14987 6.25088 7.00498 6.25088C7.86008 6.25088 8.55286 6.88025 8.55286 7.6571C8.55286 8.43395 7.86008 9.06333 7.00498 9.06333ZM8.3382 17.9342H5.66821V10.1303H8.3382V17.9342ZM19.6674 4.00092H4.3279C3.60319 3.99366 3.00887 4.5215 3 5.17989V19.1728C3.00887 19.832 3.60319 20.3599 4.3279 20.3526H19.6674C20.3939 20.3607 20.9909 19.8328 21.0007 19.1728V5.17908C20.99 4.51908 20.393 3.99125 19.6674 4.00011" fill="#CCCCCC" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;