import Head from "next/head";
import SingleBlog from "../../../components/public/blog/singleBlog";
import Layout from "../../../components/public/layout";
import { API } from "../../../utils/baseApi";



const IndexBlog = (props) => {

    const blog = props.data;
    const latestBlog = props.latestBlog;
    return (
        <>
            <Head>
                <title>{blog.title} | منو دیجیتال کافه ایران</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={blog.short_desc}/>
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