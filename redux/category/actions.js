import Cookies from "js-cookie";
import { getDataAPI } from "../../utils/fetchData";
import { errorMessage } from "../../utils/toast";

export const CATEGORYACTIONSYPES = {
    LOAD: "LOAD",
    GET_CATEGORIES: "GET_CATEGORIES",
    GET_CATEGORIES_CAFE: "GET_CATEGORIES_CAFE",
    LOAD_GET_CATEGORIES_CAFE: "LOAD_GET_CATEGORIES_CAFE",
}

export const getCategories = () => async dispatch => {
    try {
        dispatch({ type: CATEGORYACTIONSYPES.LOAD, payload: { load: true } });
        const res = await getDataAPI(`cafe/category_list`);
        dispatch({ type: CATEGORYACTIONSYPES.GET_CATEGORIES, payload: { data: res.data } })
        dispatch({ type: CATEGORYACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CATEGORYACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getCategoriesCafe = () => async dispatch => {
    try {
        dispatch({ type: CATEGORYACTIONSYPES.LOAD_GET_CATEGORIES_CAFE, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/categories/`, token);
        dispatch({ type: CATEGORYACTIONSYPES.GET_CATEGORIES_CAFE, payload: { data: res.data } })
        dispatch({ type: CATEGORYACTIONSYPES.LOAD_GET_CATEGORIES_CAFE, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CATEGORYACTIONSYPES.LOAD_GET_CATEGORIES_CAFE, payload: { load: false } });
    }
}