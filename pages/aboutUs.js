import Head from 'next/head';
import AboutUsPage from '../components/public/AboutUsPage';
import Layout from '../components/public/layout';
import { API } from '../utils/baseApi';



const AboutUs = ({ data }) => {
    return (
        <>
            <Head>
                <title> منو دیجیتال | menu Digital | درباره ما </title>
            </Head>
            <Layout>
                <AboutUsPage data={data} />
            </Layout>
        </>
    );
}

export default AboutUs;

export async function getServerSideProps(context) {

    const res = await fetch(`${API}siteinfo/about_us/`)
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}