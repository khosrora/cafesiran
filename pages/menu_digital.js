import Head from "next/head";
import Layout from "../components/public/layout";
import MenuDigitalIndex from "../components/public/MenuDigitalIndex";




const MenuDigital = () => {
    return (
        <>
            <Head>
                <title>منو دیجیتال | منو دیجیتال کافه ایران</title>
                <meta property="url" content="cafesiran.ir" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="کافه ایران" />
                <meta name="description" content="منوی دیجیتال کافه و رستوران" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Layout>
                <MenuDigitalIndex />
            </Layout>
        </>
    );
}

export default MenuDigital;

export async function getServerSideProps() {

} 