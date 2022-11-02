import Head from 'next/head';
import AboutUsPage from '../components/public/AboutUsPage';
import Layout from '../components/public/layout';



const AboutUs = () => {
    return (
        <>
            <Head>
                <title> منو دیجیتال | menu Digital | درباره ما </title>
            </Head>
            <Layout>
                <AboutUsPage />
            </Layout>
        </>
    );
}

export default AboutUs;

