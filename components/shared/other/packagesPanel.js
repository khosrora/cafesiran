import { CheckCircleIcon, StarIcon } from '@heroicons/react/outline';
import { postDataAPI } from '../../../utils/fetchData';
import ImagesPanels from './imagesPanels';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import { errorMessage } from '../../../utils/toast';
import Link from 'next/link';


const PackagesPanel = ({ data }) => {

    const token = Cookies.get("CafesIran__TOKEN");
    const { asPath } = useRouter();

    const handlePayment = async (id) => {
        try {
            const res = await postDataAPI(`payment/place_order/${id}/`, {}, token)
            Router.push(res.data.detail)
        } catch (error) {
            errorMessage("لطفا دوباره امتحان کنید")
        }
    }

    return (
        <div className="bg-zinc-100 rounded p-4 w-full dark:bg-zinc-800">
            <div className="m-auto flex flex-col justify-center items-center gap-y-4">
                <h1 className="font-black">{data.title}</h1>
                <ImagesPanels data={data} />
            </div>
            <ul className="mt-4 text-zinc-600 text-sm flex flex-col gap-y-4 dark:text-zinc-200">
                <li className="flex justify-start items-center">
                    <StarIcon className="w-5 h-5 ml-2 text-yellow-500" />
                    <p> دارای قابلیت ثبت سفارش توسط مشتریان</p>
                </li>
                <li className="flex justify-start items-center">
                    <StarIcon className="w-5 h-5 ml-2 text-yellow-500" />
                    <p> نمایش اطلاعات مشتریان وفادار</p>
                </li>
                <li className="flex justify-start items-center">
                    <StarIcon className="w-5 h-5 ml-2 text-yellow-500" />
                    <p className="">امکان ایجاد qr code مختص به هر میز</p>
                </li>
                <li className="flex justify-start items-center">
                    <StarIcon className="w-5 h-5 ml-2 text-yellow-500" />
                    <p>امکان گزارش گیری از سفارشات ثبت شده</p>
                </li>
                <li className="flex justify-start items-center">
                    <StarIcon className="w-5 h-5 ml-2 text-yellow-500" />
                    <p>دریافت اطلاعات سفارشات (بیشترین و پر فروش ترین)</p>
                </li>
                <li className="flex justify-start items-center">
                    <StarIcon className="w-5 h-5 ml-2 text-yellow-500" />
                    <p>دارای اپلیکیشن ( pwa )</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p className="">امکان ایجاد qr code مختص مجموعه (بی نهایت)</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p> امکان ایجاد دسترسی برای سالن داران</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>مشاهده اطلاعات مجموعه روی نقشه</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>دارای قابلیت ثبت انتقادات و پیشنهادات</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>امکان رزرو میز توسط مشتریان مجموعه</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>جست و جوی پیشرفته در بین کاربران عضو شده</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>برگزاری رویداد</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>باشگاه مشتریان</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>دریافت بازخورد مشتریان برای سفارشات</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>دارای فروشگاه ملزومات مجموعه های غذایی</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2 text-green-600" />
                    <p>قابلیت ایجاد بلاگ مخصوص به خود مجموعه (به زودی)</p>
                </li>
            </ul>
            <div className="flex justify-between items-center mt-4">
                {
                    asPath === "/packages" ?
                        <Link href="/liveRegister">
                            <a className="bg-[#FF7129] py-2 text-white rounded-md text-center w-1/2">
                                ثبت مجموعه
                            </a>
                        </Link>
                        :
                        <button onClick={(e) => handlePayment(data.id)} className="bg-[#FF7129] py-2 text-white rounded-md text-center w-1/2">
                            خرید
                        </button>
                }
                <div className="text-sm font-bold text-zinc-600 flex justify-center items-center w-1/2">
                    <span className="ml-2 dark:text-zinc-200">{data.period} روز {new Intl.NumberFormat().format(data.price)}</span>
                    {/* <span className="ml-2 dark:text-zinc-200">رایگان !!!</span> */}
                    <span className="dark:text-zinc-200">تومان</span>
                </div>
            </div>
        </div>
    );
}

export default PackagesPanel;