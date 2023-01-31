import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head'
import EventsCafeCm from "../../../components/public/events/eventsCafe";
import Layout from "../../../components/public/layout";
import { getEventsCafe, getEventsCafeLoadMore } from "../../../redux/global/actions";




const EventsCafe = (props) => {

    const { global } = useSelector(state => state);
    const events = global.eventsCafe;
    const load = global.load;
    const loadMoreData = global.loadMore;
    const showBtnLoadMore = global.isShowLoad;

    const dispatch = useDispatch();
    const [page, setPage] = useState(2);
    const id = props.props.cafeId;
    const cafeName = props.props.cafeName;

    useEffect(() => {
        dispatch(getEventsCafe(id))
    }, [])


    const loadMore = (num) => {
        setPage(page + num)
        dispatch(getEventsCafeLoadMore(id, page))
    }

    return (
        <>
            <Head>
                <title>رویداد های {cafeName}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={`رویداد های و برنامه های ${cafeName} در منو دیجیتال کافه ایران`} />
                <meta name="robots" content="index, follow" />
            </Head>
            <Layout>
                <EventsCafeCm data={events} load={load} loadMore={loadMore} loadMoreData={loadMoreData} showBtnLoadMore={showBtnLoadMore} cafeName={cafeName}/>
            </Layout>
        </>
    );
}

EventsCafe.getInitialProps = async (ctx) => {
    try {
        const cafeId = ctx.query.id
        const cafeName = ctx.query.cafeName

        return {
            props: {
                cafeId,
                cafeName
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}

export default EventsCafe;

