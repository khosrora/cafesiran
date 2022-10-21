import Layout from "../../components/public/layout";
import SingleCafe from "../../components/public/SingleCafe";
import { wrapper } from "../../redux/store";
import { API } from "../../utils/baseApi";

const CafeId = ({ items, categories }) => {

    return (
        <Layout>
            <SingleCafe items={items} categories={categories} />
        </Layout>
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