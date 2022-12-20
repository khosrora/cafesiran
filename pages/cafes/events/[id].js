import Head from 'next/head'
import EventsCafeCm from "../../../components/public/events/eventsCafe";
import Layout from "../../../components/public/layout";




const EventsCafe = () => {


    return (
        <>
            <Head>
                <title>رویداد های مجموعه فلان</title>
            </Head>
            <Layout>
                <EventsCafeCm />
            </Layout>
        </>
    );
}

EventsCafe.getInitialProps = async (ctx) => {
    try {
        const cafeId = ctx.query.id
        
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

export default EventsCafe;

