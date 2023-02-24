import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import Alert from "../../components/shared/other/alert";
import { getPlans } from '../../redux/cafe/actions';
import PackagesPanel from '../../components/shared/other/packagesPanel';



const Plans = () => {

    const dispatch = useDispatch();
    const { cafeDetails } = useSelector(state => state);
    const data = cafeDetails.plans;
    const load = cafeDetails.load;

    useEffect(() => {
        dispatch(getPlans())
    }, [dispatch])

    if (load) return <p>در حال دریافت اطلاعات</p>
    return (
        <LayoutPanel>
            <Alert title="توجه کنید !!!!" message="با هر بار خرید از تعرفه ها به میزان پلن خریداری شده به روزهای فعال کافه اضافه خواهد شد." />
            <h1 className="mt-4">پلن های منو دیجیتال</h1>
            <div className="grid grid-cols-1 gap-y-4 mt-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 mb-2">
                {
                    data.map((i, index) => <PackagesPanel key={index} data={i} />)
                }
            </div>
        </LayoutPanel>
    );
}

export default Plans;