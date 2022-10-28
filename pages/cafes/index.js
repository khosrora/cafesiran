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

    const title = `کافه و رستوران های ${province} | منو دیجیتال |‌ menu digital`
    const desc = `منو دیجیتال کافه ها و رستوران های ${province}`

    return (
        <>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={desc} />
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
