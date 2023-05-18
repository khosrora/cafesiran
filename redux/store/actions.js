import { getDataAPI } from "../../utils/fetchData";
import { errorMessage } from "../../utils/toast";

export const STOREACTIONTYPE = {
    LOAD: "LOAD",
    PRODUCTS: "PRODUCTS",
    ADD_BSKET: "ADD_BSKET"
}


export const getProductsStore = () => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });
        const res = await getDataAPI(`store/products/`)
        if (res.status === 200) {
            dispatch({ type: STOREACTIONTYPE.PRODUCTS, payload: { data: res.data.results } })
        }
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
        dispatch({ type: STOREACTIONTYPE.PRODUCTS, payload: { data: [] } });
    }
}

export const AddProductToBasket = (product) => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });

        dispatch({ type: STOREACTIONTYPE.ADD_BSKET, payload: { product } });

        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("لطفا دوباره امتحان کنید")
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    }
}