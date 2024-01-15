import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import Orders from "../../components/panel/orders";
import { getOrdersCafe } from "../../redux/cafe/actions";




const MyOrders = () => {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrdersCafe(page))
    }, [page])

    const { cafeDetails } = useSelector(state => state)

    return (
        <LayoutPanel>
            <Orders cafeDetails={cafeDetails} page={page} setPage={setPage} />
        </LayoutPanel>
    );
}

export default MyOrders;