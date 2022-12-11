import Head from "next/head";
import Script from "next/script";
import SingleBlog from "../../../components/public/blog/singleBlog";
import Layout from "../../../components/public/layout";
import { API } from "../../../utils/baseApi";



const IndexBlog = (props) => {

    const blog = props.data;
    const latestBlog = props.latestBlog;

    return (
        <>
            <Script rel="preload" src="/js/yektanet.js" strategy="afterInteractive" />
            <Head>
                <meta name="robots" content="index, follow" />
            </Head>
            <Layout>
                <SingleBlog blog={blog} latestBlog={latestBlog} />
            </Layout>
        </>
    );
}


export async function getServerSideProps({ query }) {
    const res = await fetch(`${API}blog/${query.slug}/`)
    const resLatestBlog = await fetch(`${API}blog/the_latest_blogs`)
    const latestBlog = await resLatestBlog.json();
    const data = await res.json()
    return {
        props: {
            data , 
            latestBlog
        }
    }
}

export default IndexBlog;