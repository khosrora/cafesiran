import Head from 'next/head';
import Layout from '../components/public/layout';
import HomePage from "../components/public/HomePage";


const Home = () => {

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
        <HomePage />
      </Layout>
    </>
  );
}


export default Home;

export async function getServerSideProps() {
  return {
    props: {
    }
  }
} 