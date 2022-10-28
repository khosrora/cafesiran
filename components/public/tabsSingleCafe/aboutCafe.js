import { useSelector } from 'react-redux';
import SAboutCafe from '../../skillton/SAboutCafe';


const AboutCafe = () => {

    const { global } = useSelector(state => state);
    const cafe = global.cafe;
    const load = global.load;

    if (load) return <SAboutCafe />
    return (
        <div className="max-w-7xl m-auto my-8">
            <div className="flex flex-col lg:flex-row lg:justify-start">
                <div className="lg:w-2/4">
                    <img className="rounded-md" src={cafe?.image_url ? cafe?.image_url : "/images/placeholder.png"} alt={cafe?.persian_title} />
                </div>
                <div className="my-8 flex flex-col gap-y-4 text-xs lg:mr-4 dark:text-zinc-200">
                    {
                        cafe?.is_open !== true ?
                            <div className="bg-red-600 rounded p-2 text-white">
                                <p>در حال حاضر مجموعه تعطیل است</p>
                            </div>
                            : null
                    }
                    <p className="font-bold text-sm"> نام کافه : <span>{cafe?.persian_title}</span> </p>
                    {
                        cafe?.instagram_id &&
                        <p className="font-bold text-sm"> اینستاگرام : <span>@{cafe?.instagram_id}</span> </p>
                    }
                    {
                        cafe?.telegram_id &&
                        <p className="font-bold text-sm"> تلگرام : <span>@{cafe?.telegram_id}</span> </p>
                    }
                    <p className="font-bold text-sm"> استان : <span>{cafe?.province?.name}</span> </p>
                    <p className="font-bold text-sm"> شهر : <span>{cafe?.city?.name}</span> </p>
                    <p className="font-bold text-sm"> آدرس : <span>{cafe?.street}</span> </p>
                    <p className="font-bold text-sm"> کد کافه : <span>{cafe?.code}</span> </p>
                    <p className="font-bold text-sm"> تلفن : <span>{cafe?.phone}</span> </p>
                </div>
            </div>
            <div className="my-8 dark:text-zinc-200">
                <p className="font-bold text-xl">توضیحات تکمیلی</p>
                <p className="text-xs leading-8 mt-2 lg:text-sm lg:leading-10">
                    {cafe?.desc}
                </p>
            </div>
            {/* 
            <div className="dark:bg-zinc-800 rounded-md py-2">
                <div className="shadow-md rounded-md p-2">
                    <div className="text-center">
                        <p className="text-xs mt-4 w-3/4 m-auto">
                            امکان اضافه کردن به علاقه مندی ها برای دسترسی راحت تر شما به پنل کافه قرار گرفته است
                        </p>
                    </div>
                    <div className="text-center mt-4">
                        <button className="bg-amber-600 text-white w-1/2 m-auto rounded-md py-2 lg:w-1/4">اضافه کردن به علاقه مندی ها</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default AboutCafe;