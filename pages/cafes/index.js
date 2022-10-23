import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CafesPage from "../../components/public/cafesPage";
import Layout from "../../components/public/layout";
import { getCafes } from '../../redux/global/actions';




const Cafes = ({ province, provinceId, city }) => {

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

export default Cafes;

export async function getServerSideProps(context) {
    const { province, id, city } = context.query;

    return {
        props: {
            province: JSON.parse(JSON.stringify(province)),
            provinceId: JSON.parse(JSON.stringify(id)),
            city: city ? JSON.parse(JSON.stringify(city)) : null,
        }
    }
} 