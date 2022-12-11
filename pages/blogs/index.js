import Head from "next/head";
import Link from "next/link";
import { PencilIcon } from '@heroicons/react/outline';
import Layout from "../../components/public/layout";
import Blogs from "../../components/public/blog/blogs";




const IndexBlogs = () => {
    return (
        <>
            <Head>
                <title>مقالات آموزشی کافه و رستوران  و منو دیجیتال |‌کافه ایران</title>
                <meta name="description" content=" همه چیز در مورد کافه داری و رستوران داری در مقالات منو دیجیتال کافه ایران" />
            </Head>
            <Layout>
                <Blogs />
            </Layout>
        </>
    );
}

export default IndexBlogs;