import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Layout from "../../components/public/layout";
import SingleCafe from "../../components/public/SingleCafe";
import { categoryList, getMenuList, getPublicDetailsCafe } from '../../redux/global/actions';

const CafeId = (props) => {

    const dispatch = useDispatch();
    const { global } = useSelector(state => state);
    const items = global.menuList;
    const categories = global.categories;
    const cafeId = props.props.cafeId

    useEffect(() => {
        dispatch(categoryList());
    }, [])

    useEffect(() => {
        if (cafeId) dispatch(getMenuList(cafeId));
    }, [cafeId])

    useEffect(() => {
        if (cafeId) dispatch(getPublicDetailsCafe(cafeId));
    }, [])

    return (
        <>
            <Head>
                <title>کافه ایران | menu Digital | منو دیجیتال کافه ها و رستوران ها</title>
                <meta name="description" content="کافه ایران ارائه دهنده سرویس منو دیجیتال به کافه ها و رستوران ها و آبمیوه بستنی ها و هتل ها |‌کافه ایران" />
            </Head>
            <Layout>
                <SingleCafe items={items} categories={categories} cafeId={cafeId} />
            </Layout>
        </>
    );
}

CafeId.getInitialProps = async (ctx) => {
    try {
        // ! get token
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
}

export default CafeId;