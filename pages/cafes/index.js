import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CafesPage from "../../components/public/cafesPage";
import Layout from "../../components/public/layout";
import { getCafes } from '../../redux/global/actions';




const Cafes = (props) => {
    const province = props.props.province;
    const provinceId = props.props.provinceId;
    const city = props.props.city;

    const dispatch = useDispatch();

    useEffect(() => {
        if (province) dispatch(getCafes(province, city))
    }, [province, city]);


    return (
        <>
            <title>{`کافه و رستوران های ${province} | منو دیجیتال |‌ menu digital`}</title>
            <meta name="description" content={`منو کافه ها و رستوران های ${province} در وب سایت کافه ایران`} />
            <Layout>
                <CafesPage provinceId={provinceId} province={province} />
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
