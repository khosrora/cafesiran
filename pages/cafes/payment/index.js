import Router from 'next/router'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Basket from "../../../components/public/basket";
import Layout from "../../../components/public/layout";



const Payment = () => {

    const { cartDetails } = useSelector(state => state);
    const order = cartDetails.orderList;

    useEffect(() => {
        if(order.length === 0) Router.back();
    } , [order]);

    return (
        <Layout>
            <Basket items={order} />
        </Layout>
    );
}

export default Payment;