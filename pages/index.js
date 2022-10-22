import Head from 'next/head';
import Layout from '../components/public/layout';
import HomePage from "../components/public/HomePage";



const Home = () => {

  return (
    <>
      <Head>
        <title>کافه ایران | menu Digital | منو دیجیتال کافه ها و رستوران ها</title>
        <meta name="description" content="کافه ایران ارائه دهنده سرویس منو دیجیتال به کافه ها و رستوران ها و آبمیوه بستنی ها و هتل ها |‌کافه ایران" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}


export default Home;