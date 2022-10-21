import CafesPage from "../../components/public/cafesPage";
import Layout from "../../components/public/layout";




const Cafes = ({ cityId }) => {

    return (
        <Layout>
            <CafesPage cityId={cityId} />
        </Layout>
    );
}

export default Cafes;

export async function getServerSideProps(context) {
    const { province, id } = context.query;

    return {
        props: {
            province: JSON.parse(JSON.stringify(province)),
            cityId: JSON.parse(JSON.stringify(id))
        }
    }
} 