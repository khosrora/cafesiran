import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CafesPage from "../../components/public/cafesPage";
import Layout from "../../components/public/layout";
import NoConnection from '../../components/shared/utilities/noConnection';
import { getCafes } from '../../redux/global/actions';




const Cafes = (props) => {

    const { utilities } = useSelector(state => state);
    const province = props.props.province;
    const provinceId = props.props.provinceId;
    const city = props.props.city;
    const connection = utilities.connection;
    const dispatch = useDispatch();

    useEffect(() => {
        if (province && connection) dispatch(getCafes(province, city))
    }, [province, city, connection]);


    return (
        <>
            <title>{`کافه و رستوران های ${province} | منو دیجیتال |‌ menu digital`}</title>
            <meta name="description" content={`منو کافه ها و رستوران های ${province} در وب سایت کافه ایران`} />
            <Layout>
                {
                    connection ?
                        <CafesPage provinceId={provinceId} province={province} />
                        :
                        <NoConnection />
                }
            </Layout>
        </>
    );
}

Cafes.getInitialProps = async (ctx) => {
    try {
        // ! get token
        const { province, id, city } = ctx.query;

        return {
            props: {
                province: JSON.parse(JSON.stringify(province)),
                provinceId: JSON.parse(JSON.stringify(id)),
                city: city ? JSON.parse(JSON.stringify(city)) : null,
            },
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}

export default Cafes;
