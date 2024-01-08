import Head from 'next/head';
import Layout from "../components/public/layout";
import Alert from '../components/shared/other/alert';
import PackagesPanel from '../components/shared/other/packagesPanel';
import { getDataAPI } from '../utils/fetchData';




const Packages = ({ data }) => {
    return (
        <>
            <Head>
                <title>منو ارزان |‌ منو دیجیتال کافه ایران</title>
                <meta name="description" content=" ارائه دهنده سرویس منو دیجیتال با بالاترین کیفیت و خدمات و کمترین هزینه |‌ منو دیجیتال ارزان" />
            </Head>
            <Layout>
                <div className="max-w-6xl m-auto lg:my-16">
                    <Alert
                        message="بعد از ثبت و تایید مجموعه پنل برای یک ماه به صورت رایگان فعال خواهد شد"
                    />
                    <div className="grid grid-cols-1 px-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 my-2">
                        {
                            data &&
                            data.map((i, index) => <PackagesPanel data={i} key={index} />)
                        }
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Packages;

export async function getServerSideProps() {
    const res = await getDataAPI(`plan/plans/`, null);
    return {
        props: {
            data: res.data
        }
    }
} 