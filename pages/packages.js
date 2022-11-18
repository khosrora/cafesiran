import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../redux/cafe/actions';

import Layout from "../components/public/layout";
import Stable from '../components/skillton/Stable';
import PackagesPanel from '../components/shared/other/packagesPanel';




const Packages = () => {

    const dispatch = useDispatch();
    const { cafeDetails } = useSelector(state => state);
    const data = cafeDetails.plans;
    const load = cafeDetails.load;

    useEffect(() => {
        dispatch(getPlans())
    }, [dispatch])

    return (
        <Layout>
            {
                load ?
                    <div className="max-w-7xl m-auto lg:my-16">
                        <Stable />
                    </div>
                    :
                    <div className="max-w-7xl m-auto lg:my-16">
                        <div className="grid grid-cols-1 px-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 mb-2">
                            {
                                data &&
                                data.map((i, index) => <PackagesPanel data={i} key={index} />)
                            }
                        </div>
                    </div>
            }

        </Layout>
    );
}

export default Packages;