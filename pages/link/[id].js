import axios from "axios";
import Link from "next/link";
import Layout from "../../components/public/layout";
import { API } from "../../utils/baseApi";




const id = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <div className="p-2 my-6 max-w-lg m-auto">
                <div className="">
                    <img src="https://perfectdailygrind.com/wp-content/uploads/2019/02/coffee-bar.jpg" className="rounded-md" alt="" />
                </div>
                <div className="flex flex-col justify-center gap-y-8 items-center my-4">
                    <p className="font-bold dark:text-zinc-400">{data.persian_title}</p>
                    <div className="flex justify-between items-center w-full gap-x-4 px-4">
                        <Link href={`/cafes/${data.id}`}>
                            <a className="bg-amber-600 p-2 rounded-md text-white w-1/4 text-center">
                                برو کافه
                            </a>
                        </Link>
                        <div className="bg-zinc-100 p-2 rounded-md w-3/4 dark:bg-zinc-800">
                            <p className="text-xl tracking-widest text-center">{data.code}</p>
                        </div>
                    </div>
                    <p className="text-center text-zinc-700 text-xs dark:text-zinc-400">
                        با استفاده از کد کافه به راحتی به صفحه کافه
                        رفته وثبت سفارش و رزرو کنید
                    </p>
                    <div className="flex-col text-xs text-center">
                        <div className="">
                            <p className="font-bold dark:text-zinc-400">شبکه های اجتماعی</p>
                        </div>
                        <div className="flex justify-center items-center gap-x-4 mt-4">
                            <img className="w-6 h-6 cursor-pointer" src="/svg/instagram-svgrepo-com.svg" alt="instagram" />
                            <img className="w-6 h-6 cursor-pointer" src="/svg/telegram-svgrepo-com.svg" alt="telegram" />
                            <img className="w-6 h-6 cursor-pointer" src="/svg/whatsapp-svgrepo-com.svg" alt="whatsapp" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link href='/'>
                        <a className="text-xs text-amber-600 font-thin">ساخته شده توسط کافه ایران</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default id;

export async function getServerSideProps(context) {
    try {
        const id = context.query.id;
        const res = await axios.get(`${API}cafe/cafe_detail_page/${id}`)

        return {
            props: {
                data: res.data
            }, // will be passed to the page component as props
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}