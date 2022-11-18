import { CheckCircleIcon } from '@heroicons/react/outline';
import ImagesPanels from './imagesPanels';



const PackagesPanel = ({ data }) => {
    return (
        <div className="bg-zinc-100 rounded p-4 w-full dark:bg-zinc-800">
            <div className="m-auto flex flex-col justify-center items-center gap-y-4">
                <h1 className="font-black">{data.title}</h1>
                <ImagesPanels data={data} />
            </div>
            <ul className="mt-4 text-zinc-600 text-sm flex flex-col gap-y-4 dark:text-zinc-200">
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p> دارای قابلیت ثبت سفارش </p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>مشاهده مجموعه روی نقشه</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p className="">ایجاد qr code مخصوص مجموعه (بی نهایت)</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>دارای قابلیت ثبت انتقادات و پیشنهادات</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>دارای قابلیت رزرو میز</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>جست و جوی پیشرفته</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>ثبت گالری</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>دارای اپلیکیشن ( android , ios )</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>امکان گزارش گیری (به زودی)</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>باشگاه مشتریان (به زودی)</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>برگزاری رویداد (به زودی)</p>
                </li>
                <li className="flex justify-start items-center">
                    <CheckCircleIcon className="w-5 h-5 ml-2" />
                    <p>قابلیت ایجاد بلاگ مخصوص به خود مجموعه (به زودی)</p>
                </li>
            </ul>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-[#FF7129] py-2 text-white rounded-md w-1/2">فعلا رایگان !!!!</button>
                <div className="text-sm font-bold text-zinc-600 flex justify-center items-center w-1/2">
                    <span className="ml-2 dark:text-zinc-200">{data.period} روز {new Intl.NumberFormat().format(data.price)}</span>
                    <span className="dark:text-zinc-200">تومان</span>
                </div>
            </div>
        </div>
    );
}

export default PackagesPanel;