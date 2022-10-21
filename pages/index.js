import Head from 'next/head';
import Layout from '../components/public/layout';
import HomePage from "../components/public/HomePage";



const Home = () => {

  return (
    <>
      <Head>
        <title>کافه ایران | منو دیجیتال کافه ها و رستوران ها</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}


export default Home;