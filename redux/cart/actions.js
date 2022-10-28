import { errorMessage, successMessage } from "../../utils/toast";

export const CARTActionsType = {
    LOAD: "LOAD",
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_ITEM_CART: "DELETE_ITEM_CART",
    PLUS_ITEM: "PLUS_ITEM",
    MINUS_ITEM: "MINUS_ITEM",
    CLEAR: "CLEAR"
}


export const clearCart = () => async dispatch => {
    try {
        dispatch({ type: CARTActionsType.CLEAR , payload: { data: [] } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    }
}
export const addToCart = (data) => async dispatch => {
    try {
        dispatch({ type: CARTActionsType.LOAD, payload: { load: true } });
        dispatch({ type: CARTActionsType.ADD_TO_CART, payload: { data } });
        successMessage("آیتم به سبد سفارش اضافه شد");
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    }
}


export const deleteItemCart = (data) => async dispatch => {
    try {
        dispatch({ type: CARTActionsType.LOAD, payload: { load: true } });
        dispatch({ type: CARTActionsType.DELETE_ITEM_CART, payload: { data } });
        errorMessage("آیتم از سبد سفارش حذف شد");
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    }
}

export const plusCountItem = (id, num) => async dispatch => {
    try {
        dispatch({ type: CARTActionsType.LOAD, payload: { load: true } });
        dispatch({ type: CARTActionsType.PLUS_ITEM, payload: { id, num } });
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    }
}

export const minusCountItem = (id, num) => async dispatch => {
    try {
        dispatch({ type: CARTActionsType.LOAD, payload: { load: true } });
        dispatch({ type: CARTActionsType.MINUS_ITEM, payload: { id, num } });
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CARTActionsType.LOAD, payload: { load: false } });
    }
}