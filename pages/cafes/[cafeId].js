import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Layout from "../../components/public/layout";
import SingleCafe from "../../components/public/SingleCafe";
import { wrapper } from "../../redux/store";
import { categoryList, getMenuList } from '../../redux/global/actions';

const CafeId = ({ cafeId }) => {

    const dispatch = useDispatch();
    const { global } = useSelector(state => state);
    const items = global.menuList;
    const categories = global.categories;

    useEffect(() => {
        dispatch(categoryList());
        dispatch(getMenuList(cafeId));
    }, [cafeId])


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

            return {
                props: {
                    cafeId
                }
            }
        } catch (error) {
            return {
                notFound: true
            }
        }
    });