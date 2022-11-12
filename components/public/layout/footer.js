import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import Link from "next/link";
import { useTheme } from 'next-themes'


const Footer = () => {

    const { resolvedTheme } = useTheme()
    console.log(resolvedTheme);

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
                        <p className='mt-2 text-xs  md:mt-4 md:w-3/4 leading-9'>
                            یک پنل مدیریت کامل برای کسب و کار خودتون دریافت کنید و منو های دیجیتال با قابلیت دسترسی سریع برای مشتریان کافه و رستوران و یا هتل ایجاد کنید. رزروهای آنلاین و یا انتقادات پیشنهادات را آنلاین دریافت کنید.
                        </p>
                    </div>
                    <div className="mb-4 md:w-1/6">
                        <h4>دسترسی ها</h4>
                        <ul className=' mt-2'>
                            <li className='mt-2'><Link href="/cafes/8"><a title='مشاهده نمونه'>مشاهده نمونه</a></Link></li>
                            <li className='mt-2'><Link href="/packages"><a title='تعرفه های منو دیجیتال'>تعرفه ها</a></Link></li>
                            <li className='mt-2'><Link href="/"><a title='خانه'>خانه</a></Link></li>
                            <li className='mt-2'><Link href="/aboutUs"><a title='درباره ما'>درباره ما</a></Link></li>
                            <li className='mt-2'><Link href="/contactUs"><a title='تماس با ما'>تماس با ما</a></Link></li>
                            <li className='mt-2'><Link href="/features"><a title='امکانات کافه ایران'>امکانات کافه ایران</a></Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:w-1/6">
                        <h4>راه های ارتباطی</h4>
                        <ul className=' mt-2'>
                            <li className='flex justify-start items-center mt-2'>
                                <PhoneIcon className="h-6 w-6" />
                                <span className='mr-4'>0933239823</span>
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
                            <svg className='h-6 w-6 text-zinc-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_69_482)">
                                    <path d="M19.1572 8.32801C19.1677 8.48626 19.1677 8.64526 19.1677 8.80501C19.1677 13.6853 15.4522 19.3125 8.66025 19.3125V19.3095C6.654 19.3125 4.689 18.738 3 17.6543C3.29175 17.6895 3.585 17.7068 3.879 17.7075C5.5425 17.709 7.158 17.151 8.46525 16.1235C6.885 16.0935 5.499 15.063 5.01525 13.5585C5.56875 13.665 6.13875 13.6433 6.6825 13.4955C4.959 13.1475 3.72 11.6333 3.72 9.87526C3.72 9.85951 3.72 9.84376 3.72 9.82876C4.23375 10.1153 4.80825 10.2735 5.39625 10.2908C3.77325 9.20701 3.27225 7.04851 4.2525 5.36101C6.1275 7.66801 8.89425 9.07051 11.8635 9.21976C11.5658 7.93726 11.973 6.59326 12.9315 5.69101C14.4187 4.29226 16.758 4.36426 18.1567 5.85151C18.984 5.68876 19.7768 5.38501 20.502 4.95526C20.226 5.81026 19.6493 6.53626 18.8783 6.99826C19.611 6.91051 20.3258 6.71476 21 6.41626C20.5042 7.15801 19.8802 7.80526 19.1572 8.32801Z" fill="#CCCCCC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_69_482">
                                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg className='h-6 w-6 text-zinc-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3378 17.9342H15.6705V14.1394C15.6705 13.2345 15.6527 12.07 14.2831 12.07C12.894 12.07 12.6811 13.0556 12.6811 14.0742V17.9342H10.0147V10.1303H12.5756V11.1964H12.6111C13.1335 10.3857 14.1039 9.90142 15.1373 9.93607C17.841 9.93607 18.3387 11.5518 18.3387 13.6527L18.3378 17.9342ZM7.00498 9.06333C6.14987 9.06333 5.4571 8.43395 5.4571 7.6571C5.4571 6.88025 6.14987 6.25088 7.00498 6.25088C7.86008 6.25088 8.55286 6.88025 8.55286 7.6571C8.55286 8.43395 7.86008 9.06333 7.00498 9.06333ZM8.3382 17.9342H5.66821V10.1303H8.3382V17.9342ZM19.6674 4.00092H4.3279C3.60319 3.99366 3.00887 4.5215 3 5.17989V19.1728C3.00887 19.832 3.60319 20.3599 4.3279 20.3526H19.6674C20.3939 20.3607 20.9909 19.8328 21.0007 19.1728V5.17908C20.99 4.51908 20.393 3.99125 19.6674 4.00011" fill="#CCCCCC" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;