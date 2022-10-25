import Head from 'next/head';
import Layout from "../../components/public/layout";
import SingleCafe from "../../components/public/SingleCafe";
import { wrapper } from "../../redux/store";
import { API } from "../../utils/baseApi";

const CafeId = ({ items, categories }) => {

    return (
        <>
            <Head>
                <title>کافه ایران | menu Digital | منو دیجیتال کافه ها و رستوران ها</title>
                <meta name="description" content="کافه ایران ارائه دهنده سرویس منو دیجیتال به کافه ها و رستوران ها و آبمیوه بستنی ها و هتل ها |‌کافه ایران" />
            </Head>
            <Layout>
                <SingleCafe items={items} categories={categories} />
            </Layout>
        </>
    );
}

export default CafeId;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (ctx) => {
        try {
            const cafeId = ctx.query.cafeId;
            const resCategories = await fetch(`${API}cafe/category_list`)
            const resMenuList = await fetch(`${API}cafe/menuitem_list/${cafeId}/`)
            const categories = await resCategories.json()
            const items = await resMenuList.json()
            return {
                props: {
                    categories,
                    items
                }
            }
        } catch (error) {
            return {
                notFound: true
            }
        }
    });