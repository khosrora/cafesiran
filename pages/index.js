import Head from 'next/head';
import Layout from '../components/public/layout';
import HomePage from "../components/public/HomePage";
import { getDataAPI } from '../utils/fetchData';
import PackagesPanel from '../components/shared/other/packagesPanel';


const Home = ({ data }) => {

  return (
    <>
      <Head>
        <title>کافه ایران | menu Digital | منو دیجیتال کافه ها و رستوران ها</title>
        <meta property="url" content="cafesiran.ir" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="کافه ایران" />
        <meta name="description" content=" ارائه دهنده سرویس منو دیجیتال به کافه ها و رستوران ها و هتل ها |‌کافه ایران" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        <div className="max-w-7xl m-auto space-y-8 mb-4">
          <HomePage />
          <div className="grid grid-cols-1 px-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 my-2 ">
            {
              data &&
              data.map((i, index) => <PackagesPanel data={i} key={index} />)
            }
          </div>
        </div>
        <div className="grid sm:grid-cols-2 mb-12">
          <div>
            <img
              width="500"
              height="500"
              title="با منو دیجیتال کافه ایران با مشتریان خود در تعامل باشید"
              src="/images/features/menuDigitalEvents.webp"
              className="w-9/12 mx-auto" />
          </div>
          <div className="self-center px-4 sm:ml-4 md:ml-8 mt-4 sm:mt-0">
            <h3 className="font-bold text-lg lg:text-2xl">
              با منو دیجیتال کافه ایران با مشتریان خود در تعامل باشید
            </h3>
            <p className="text-sm lg:text-base mt-4 leading-9">
              شما صاحبان مجموعه میتوانید به راحتی رویداد های کافه و یا رستوران خود را به اطلاع مشتریان برسانید.
              نظرات آنها را در مورد مجموعه یا هر ایتم منو به صورت جدا دریافت کنید و همچنین پاسخ دهید.
            </p>
          </div>
        </div>
        <section className="mx-auto sm:max-w-7xl px-4 lg:px-6 xl:px-2 my-20 lg:my-32">
          <div>
            <h3 className="font-bold text-center mx-auto mb-12 text-2xl">مزایا منو دیجیتال کافه ایران</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <span className="bg-[#2E2F2A] rounded-md text-white text-sm text-center block py-5 dark:bg-zinc-700">
                ارزان ترین منو دیجیتال
              </span>
              <span className="bg-[#f8f8f8] rounded-md text-sm text-center block py-5 dark:bg-zinc-800">
                قابلیت تغییر منو در هر زمان
              </span>
              <span className="bg-[#2E2F2A] rounded-md text-white text-sm text-center block py-5 dark:bg-zinc-700">
                دریافت آخرین آمار و گزارشات
              </span>
              <span className="bg-[#f8f8f8] rounded-md text-sm text-center block py-5 dark:bg-zinc-800">
                ثبت سفارش سریع و بدون دردسر
              </span>
              <span className="bg-[#2E2F2A] rounded-md text-white text-sm text-center block py-5 dark:bg-zinc-700">
                تجربه کاربری پویا
              </span>
              <span className="bg-[#f8f8f8] rounded-md text-sm text-center block py-5 dark:bg-zinc-800">
                دریافت پنل مدیریت به محض ثبت نام
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}


export default Home;

export async function getServerSideProps() {
  const res = await getDataAPI(`plan/plans/`, null);
  return {
    props: {
      data: res.data
    }
  }
} 