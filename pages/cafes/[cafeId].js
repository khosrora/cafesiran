import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Layout from "../../components/public/layout";
import SingleCafe from "../../components/public/SingleCafe";
import { categoryList, getMenuList, getPublicDetailsCafe } from '../../redux/global/actions';
import CallWaiter from '../../components/public/CallWaiter';

const CafeId = (props) => {

    const dispatch = useDispatch();
    const { global, utilities } = useSelector(state => state);
    const items = global.menuList;
    const categories = global.categories;
    const cafeId = props.props.cafeId
    const connection = utilities.connection;

    useEffect(() => {
        if (connection) dispatch(categoryList(cafeId));
    }, [connection])

    useEffect(() => {
        if (cafeId && connection) dispatch(getMenuList(cafeId));
    }, [cafeId, connection])

    useEffect(() => {
        if (cafeId && connection) dispatch(getPublicDetailsCafe(cafeId));
    }, [cafeId, connection])


    return (
        <>
            <Head>
                <title>کافه ایران | menu Digital | منو دیجیتال کافه ها و رستوران ها و هتل ها </title>
                <meta name="description" content="کافه ایران ارائه دهنده سرویس منو دیجیتال به کافه ها و رستوران ها و هتل ها |‌کافه ایران" />
            </Head>
            <Layout>
                <SingleCafe items={items} categories={categories} cafeId={cafeId} />
                <CallWaiter
                    cafeId={cafeId}
                />
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