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
              title="منو سفارشی"
              src="/images/features/itemsMenu.webp"
              className="w-9/12 mx-auto" />
          </div>
          <div className="self-center px-4 sm:mr-4 md:mr-8 mt-4 sm:mt-0">
            <h3 className="font-bold text-lg lg:text-2xl">
              منو خود را سفارشی بسازید
            </h3>
            <p className="text-sm lg:text-base mt-4 leading-9 ml-8">
              مطابق با سلیقه خود نحوه نمایش منو دیجیتال را برای مشتریان خود طراحی
              کنید و مجموعه خود را به مشتریان معرفی کنید , همچنین محصولات خود را
              در دسته بندی های مرتبط سازمان دهی کنید
              .
            </p>
          </div>
        </div>
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