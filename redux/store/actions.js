import Cookies from "js-cookie";
import { getDataAPI } from "../../utils/fetchData";
import { errorMessage } from "../../utils/toast";

export const STOREACTIONTYPE = {
    LOAD: "LOAD",
    PRODUCTS: "PRODUCTS",
    ADD_BSKET: "ADD_BSKET",
    PLUS_ITEM: "PLUS_ITEM",
    MINUS_ITEM: "MINUS_ITEM",
    DELETE_ITEM_CART: "DELETE_ITEM_CART",
    NEXT_STORE: "NEXT_STORE",
    GET_PAYMENTS: "GET_PAYMENTS"
}


export const getProductsStore = (page) => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });
        const res = await getDataAPI(`store/products/?page=${page}`)
        if (res.status === 200) {
            dispatch({ type: STOREACTIONTYPE.NEXT_STORE, payload: { data: res.data.links.next } })
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
        delete product.category;
        product.product_id = product.id;
        dispatch({ type: STOREACTIONTYPE.ADD_BSKET, payload: { product } });
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("لطفا دوباره امتحان کنید")
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    }
}

export const plusCountItemStore = (id, num) => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });
        dispatch({ type: STOREACTIONTYPE.PLUS_ITEM, payload: { id, num } });
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    }
}

export const minusCountItemStore = (id, num, min) => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });
        dispatch({ type: STOREACTIONTYPE.MINUS_ITEM, payload: { id, num, min } });
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    }
}

export const deleteItemCartStore = (id) => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });
        dispatch({ type: STOREACTIONTYPE.DELETE_ITEM_CART, payload: { id } });
        errorMessage("آیتم از سبد سفارش حذف شد");
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    }
}

export const getPaymentsCafe = (page) => async dispatch => {
    try {
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI("payment/cafes/", token)
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: STOREACTIONTYPE.LOAD, payload: { load: false } });
    }
}

