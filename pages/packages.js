import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { getPlans } from '../redux/cafe/actions';

import Layout from "../components/public/layout";
import ImagesPanels from '../components/shared/other/imagesPanels';




const Packages = () => {

    const dispatch = useDispatch();
    const { cafeDetails } = useSelector(state => state);
    const data = cafeDetails.plans;
    const load = cafeDetails.load;

    useEffect(() => {
        dispatch(getPlans())
    }, [dispatch])

    if (load) return <p>در حال دریافت اطلاعات</p>
    return (
        <Layout>
            <div className="max-w-7xl m-auto lg:my-16">
                <div className="grid grid-cols-1 px-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 mb-2">
                    {
                        data.map((i, index) =>
                            <div key={index} className="bg-zinc-100 rounded p-4 w-full dark:bg-zinc-800">
                                <div className="m-auto flex flex-col justify-center items-center gap-y-4">
                                    <h1 className="font-black">{i.title}</h1>
                                    <ImagesPanels data={i} />
                                </div>
                                <ul className="mt-4 text-zinc-600 text-sm flex flex-col gap-y-4 dark:text-zinc-200">
                                    <li className="flex justify-start items-center">
                                        <CheckCircleIcon className="w-5 h-5 ml-2" />
                                        <p className="">{i.period} روز</p>
                                    </li>
                                    <li className="flex justify-start items-center">
                                        <CheckCircleIcon className="w-5 h-5 ml-2" />
                                        <p className="">دارای qr code</p>
                                    </li>
                                    <li className="flex justify-start items-center">
                                        <CheckCircleIcon className="w-5 h-5 ml-2" />
                                        <p> دارای قابلیت ثبت سفارش </p>
                                    </li>
                                    <li className="flex justify-start items-center">
                                        <CheckCircleIcon className="w-5 h-5 ml-2" />
                                        <p>دارای قابلیت رزرو میز</p>
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
                                        <p>دارای قابلیت ثبت انتقادات و پیشنهادات</p>
                                    </li>
                                    <li className="flex justify-start items-center">
                                        <CheckCircleIcon className="w-5 h-5 ml-2" />
                                        <p>مشاهده مجموعه روی نقشه</p>
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
                                    <button className="bg-[#FF7129] py-2 text-white rounded-md w-1/2">فعالا رایگان !!!!</button>
                                    <div className="text-sm font-bold text-zinc-600 flex justify-center items-center w-1/2">
                                        <span className="ml-2 dark:text-zinc-200">{new Intl.NumberFormat().format(i.price)}</span>
                                        <span className="dark:text-zinc-200">تومان</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Packages;