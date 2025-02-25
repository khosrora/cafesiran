import Head from "next/head";
import HomeJobIndex from "../components/public/HomeJobIndex";
import Layout from "../components/public/layout";
import { getDataAPI } from "../utils/fetchData";




const HomeJob = () => {
    return (
        <>
            <Head>
                <title>{`شغل خانگی | منو دیجیتال |‌ menu digital`}</title>
                <meta name="description" content={`به راحتی در کافه ایران شغل خانگی خود را با کمترین هزینه و با سرعت بالا ایجاد کنید`} />
            </Head>
            <Layout>
                <HomeJobIndex />
            </Layout>
        </>
    );
}

export default HomeJob;

export async function getServerSideProps() {
    const res = await getDataAPI(`plan/plans/`, null);
    return {
        props: {
            data: res.data
        }
    }
} 