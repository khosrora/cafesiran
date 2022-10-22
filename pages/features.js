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
                    dir="ltr"
                    bg=""
                    title="وب اپلیکیشن کافه ایران"
                    text="کافه ایران با ایجاد بستری کافه ها ورستوران های هرشهر را مشاهده کنیدو یا با وارد کردن کد کافه به صفحه کافه مورد نظر خود دسترسی پیدا کنید و یا با اسکن qr code هر کافه به منو ان کافه دسترسی داشته باشید هر کافه دارای یک صفحه انتقادات پیشنهادات , رزرو میز , ثبت سفارش , صفحه درباره ما و بلاگ می باشد "
                    img="/images/features/Group527.png"
                />
                <ItemFeatures
                    dir="rtl"
                    bg="bg-zinc-100"
                    title="ساخت  qr code اختصاصی"
                    text="به راحتی و درسریع ترین زمان ممکن صفحه qr code مخصوص به منو خود را  درست کنیدبا اسکن qr code مشتریان شما به راحتی به منو کافه(رستوران)شما دسترسی داشته باشند"
                    img="/images/features/Rectangle.png"
                />
                <ItemFeatures
                    dir="ltr"
                    bg=""
                    title="مدیریت ثبت سفارشات وثبت رزرو"
                    text="با استفاده از منو دیجیتال هر مشتری  ازهرجایی میتونه میز مورد نظر خودش رو ثبت کنه 
                وهمچنین میتونه یا استفاده از qr code ویا با داشتن کد کافه مورد نظر خود به منو
                کافه دسترسی داشته باشه و ثبت سفارش کنه همچنین کافه دار(رستوران دار) میتونه به راحتی
                میز های رزرو شده و سفارشات ثبت شده و پیش سفارشات را مدیریت کنید"
                    img="/images/features/Group537.png"
                />
                <ItemFeatures
                    dir="rtl"
                    bg="bg-zinc-100"
                    title="دارای پنل کاربری اختصاصی کافه دار(رستوران دار)و مشتری"
                    text="هرکافه دار (رستوران دار) و مشتری دارای یک پنل اختصاصی مربوط به خود 
                می باشند"
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
                                text="دسترسی اسان و راحت در سریع ترین زمان ممکن "
                            />
                            <TagFeatures
                                svg={Svg.pwa}
                                bgColor="bg-zinc-100"
                                title="قابلیت وب اپلیکشین"
                                text="دارای قابلیت pwa که میتوان به صورت اپلیکیشن استفاده کرد"
                            />
                            <TagFeatures
                                svg={Svg.gallery}
                                bgColor="bg-zinc-100"
                                title="گالری تصاویر"
                                text="هرکافه دار(رستوران دار) دارای یک صفحه گالری میباشد"
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
                                text="هرکافه دار میتواند برای کافه خود رویدادی را ثبت و ارسال کند"
                            />
                            <TagFeatures
                                svg={Svg.customers}
                                bgColor="bg-zinc-100"
                                title="باشگاه مشتریان"
                                text="با عضویت در کافه میتونید از جدید
                            ترین خبر ها و تخفیفات اگاه شوید"
                            />
                            <TagFeatures
                                svg={Svg.share}
                                bgColor="bg-zinc-100"
                                title="صفحه اشتراک گذاری کافه"
                                text="هر کافه دار دارای یک صفحه برای اشتراک گذاری شبکه های اجتماعی"
                            />
                            <TagFeatures
                                svg={Svg.categories}
                                bgColor="bg-zinc-100"
                                title="قابلیت دسته بندی"
                                text="منو دارای قابلیت دسته بندی و تغییر می باشد"
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