import dynamic from "next/dynamic"
import { useSelector } from 'react-redux';
import SAboutCafe from '../../skillton/SAboutCafe';

const MapAboutCafe = dynamic(() => import("../map/mapAboutCafe"), { ssr: false })


const AboutCafe = ({ customerClubModal, SetCustomerClubModal }) => {

    const { global } = useSelector(state => state);
    const cafe = global.cafe;
    const load = global.load;
    const lat = cafe?.latitude


    if (load) return <SAboutCafe />
    return (
        <>
            <div className="max-w-7xl m-auto my-8">
                <div className="flex flex-col lg:flex-row lg:justify-start">
                    {
                        lat != null ?
                            <>
                                {
                                    customerClubModal !== false ? null :
                                        <div className="h-96 overflow-hidden lg:w-2/4">
                                            <MapAboutCafe />
                                        </div>
                                }
                            </>
                            :
                            <div className="lg:w-2/4">
                                <img className="rounded-md" src="/images/placeholder.png" alt={cafe?.persian_title} />
                            </div>
                    }
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
                {
                    cafe?.desc ?
                        <div className="my-8 dark:text-zinc-200">
                            <p className="font-bold text-xl">درباره مجموعه</p>
                            <p className="text-xs leading-8 mt-2 lg:text-sm lg:leading-10">
                                {cafe?.desc}
                            </p>
                        </div> : null
                }
                <div className="dark:bg-zinc-800 rounded-md py-2 mt-4">
                    <div className="shadow-md rounded-md p-2">
                        <div className="text-center">
                            <p className="text-sm font-bold mt-4 w-3/4 m-auto">
                                با عضویت در مجموعه سریع تر از تخفیفات و رویداد های مجموعه با خبر شوید.
                            </p>
                        </div>
                        <div className="text-center mt-4">
                            <button className="bg-[#FF7129] text-xs text-white w-full m-auto rounded-md py-2 md:w-2/4 lg:w-1/4" onClick={e => {
                                e.preventDefault();
                                SetCustomerClubModal(cafe.id);
                            }}>عضویت ویژه</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutCafe;