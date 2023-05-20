import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LayoutPanel from "../../../components/panel/layout/layoutPanel";
import Alert from "../../../components/shared/other/alert";
import { AddProductToBasket, getProductsStore } from "../../../redux/store/actions";
import CardStore from "../../../components/shared/cards/CardStore";
import DescProductModal from "../../../components/shared/modals/descProductModal";
import { errorMessage, successMessage } from "../../../utils/toast";
import { checkItemIn } from "../../../utils/functions";
import SCartItem from "../../../components/skillton/SCartItem";


const StoreIndex = () => {

    const [descProduct, setDescProduct] = useState(false)
    const { storeCafe } = useSelector(state => state);
    const load = storeCafe.load;
    const products = storeCafe.products;
    const basket = storeCafe.basket;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsStore())
    }, [])

    const AddToBasket = product => {
        const isInBasket = checkItemIn(basket, product.id)
        if (isInBasket) return errorMessage('محصول در سبد خرید موجود است');
        else {
            product.count = 1;
            dispatch(AddProductToBasket(product));
            successMessage("به سبد خرید اضافه شد")
        }
    }


    return (
        <>
            <LayoutPanel>
                {

                    load ?
                        <div className="grid gap-y-5 gap-x-2 my-5 grid-cols-2 md:grid-cols-3 max-w-7xl m-auto">
                            <SCartItem />
                        </div>
                        :
                        <>
                            {
                                basket.length > 0 ?
                                    <div className="">

                                    </div>
                                    : null
                            }
                            {
                                products.length === 0 ?
                                    <Alert
                                        message="محصولی برای نمایش وجود ندارد."
                                        title=""
                                    />
                                    :
                                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                                        {
                                            products.map(item => <CardStore product={item} setDescProduct={setDescProduct} AddToBasket={AddToBasket} />)
                                        }
                                    </div>
                            }
                        </>
                }
            </LayoutPanel>
            {
                descProduct ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center z-40 p-2">
                        <DescProductModal product={descProduct} setDescProduct={setDescProduct} AddToBasket={AddToBasket} />
                    </div>
                    : null
            }
        </>
    );
}

export default StoreIndex;