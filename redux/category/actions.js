import { getDataAPI } from "../../utils/fetchData";
import { errorMessage } from "../../utils/toast";

export const CATEGORYACTIONSYPES = {
    LOAD: "LOAD",
    GET_CATEGORIES: "GET_CATEGORIES",
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