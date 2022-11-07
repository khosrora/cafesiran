import Head from "next/head";
import ItemFeatures from "../components/public/featuresPage/ItemFeature";
import TagFeatures from "../components/public/featuresPage/tagFeatures";
import Layout from "../components/public/layout";
import { Svg } from "../components/shared/utilities/constance/svgs";



const Features = () => {
    return (
        <>
            <Head>
                <title> منو دیجیتال | menu Digital | امکانات و ویژگی ها </title>
            </Head>
            <Layout>
                <ItemFeatures
                    dir="rtl"
                    bg=""
                    title="وب اپلیکیشن کافه ایران"
                    text="دسترسی سریع و آسان مشتریان شما به آیتم های منو در تمام سیستم عامل های تلفن های همراه و تبلت ها"
                    img="/images/features/Group527.png"
                />
                <ItemFeatures
                    dir="ltr"
                    bg="bg-zinc-100"
                    title="نمایش روی نقشه"
                    text="نقشه کافه ایران به شما کمک میکند اطلاعات مجموعه و همچنین آدرس دقیق را به کاربران خود نمایش دهید"
                    img="/images/features/Group 537.png"
                />
                <ItemFeatures
                    dir="rtl"
                    bg=""
                    title="ساخت  qr code اختصاصی"
                    text="شما به راحتی و به صورت نامحدود در کمترین زمان  میتوانید برای مجموعه خود بارکد اختصاصی بسازید . دانلود کنید و چاپ کنید"
                    img="/images/features/Rectangle.png"
                />
                <ItemFeatures
                    dir="ltr"
                    bg="bg-zinc-100"
                    title="مدیریت ثبت سفارشات وثبت رزرو"
                    text="شما در کافه ایران میتوانید در هر زمان گزارش های سفارشات ثبت شده مجموعه را برای مدت زمانی دلخواه خود دریافت کنید"
                    img="/images/features/Group537.png"
                />
                <ItemFeatures
                    dir="rtl"
                    bg=""
                    title="دارای پنل کاربری اختصاصی"
                    text="در کافه ایران هم برای مشتریان و هم برای صاحبین کسب و کار پنل های مدیریت جداگانه ای در نظر گرفته شده است که هر کدام دارای قابلیت ها و امکانات مجزا از هم میباشند"
                    img="/images/features/Group519.png"
                />
                <div className="px-4 max-w-7xl my-4 m-auto lg:my-12">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold">ویژگی های کافه ایران</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-16 mt-12 gap-y-10">
                            <TagFeatures
                                svg={Svg.speed}
                                bgColor="bg-amber-600"
                                title="دسترسی سریع واسان"
                                text="دسترسی در کمترین زمان ممکن"
                            />
                            <TagFeatures
                                svg={Svg.pwa}
                                bgColor="bg-zinc-100"
                                title="قابلیت وب اپلیکشین"
                                text="دارای اپلیکیشن با قابلیت نصب با سرعت بالا"
                            />
                            <TagFeatures
                                svg={Svg.gallery}
                                bgColor="bg-zinc-100"
                                title="گالری تصاویر"
                                text="امکان ایجاد گالری تصاویر مجموعه"
                            />
                            <TagFeatures
                                svg={Svg.hour}
                                bgColor="bg-zinc-100"
                                title="پشتیبانی 24 ساعته"
                                text="در هر ساعت شبانه روز پاسخگو شما عزیزان هستیم"
                            />
                            <TagFeatures
                                svg={Svg.event}
                                bgColor="bg-zinc-100"
                                title="ایجاد رویداد های کافه"
                                text="امکان اطلاع رسانی رویدادها به مشتریان (به زودی)"
                            />
                            <TagFeatures
                                svg={Svg.customers}
                                bgColor="bg-zinc-100"
                                title="باشگاه مشتریان"
                                text="امکان ایجاد باشگاه مشتریان و برقراری ارتباط با آنها (به زودی)"
                            />
                            <TagFeatures
                                svg={Svg.share}
                                bgColor="bg-zinc-100"
                                title="صفحه اشتراک گذاری کافه"
                                text="بعد از ثبت مجموعه به صورت خودکار برای مجموعه ساخته میشود"
                            />
                            <TagFeatures
                                svg={Svg.categories}
                                bgColor="bg-zinc-100"
                                title="قابلیت دسته بندی"
                                text="میتوانید آیتم های منو را برای مشاهده راحت مشتریان دسته بندی کنید"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Features;


export async function getServerSideProps() {
    return {
        props: {
        }
    }
} 