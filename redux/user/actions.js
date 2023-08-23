import Cookies from "js-cookie";
import { getDataAPI, patchDataAPI, postDataAPI } from "../../utils/fetchData";
import { errorMessage, successMessage } from "../../utils/toast";
import { AUTHTACTIONSYPES } from "../auth/actions";
import { CARTActionsType } from "../cart/actions";

export const USERACTIONSYPES = {
    LOAD: "LOAD",
    GET_USER: "GET_USER",
    REQUEST_CAFE: "REQUEST_CAFE",
    IS_SEND_REQUEST: "IS_SEND_REQUEST",
    CHANGE_NAME: "CHANGE_NAME",
    ADD_VIP: "ADD_VIP",
    GET_FAV: "GET_FAV"
}

export const getDetailsUser = () => async dispatch => {
    try {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: true } })
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI("account/me/", token);
        dispatch({ type: USERACTIONSYPES.GET_USER, payload: { data: res.data } });
        dispatch({ type: AUTHTACTIONSYPES.LOGIN, payload: { data: true } })
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } })
    } catch (err) {
        // errorMessage("متاسفانه مشکلی از سمت سرور پیش آمده است")
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } })
    }
}

export const requestForCafe = (data) => async dispatch => {
    try {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI("cafe/cafes/", data, token);
        if (res.status === 201) {
            dispatch({ type: USERACTIONSYPES.IS_SEND_REQUEST, payload: { data: true } });
            successMessage("درخواست شما ثبت شد")
        }
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور پیش آمده است")
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const addOrder = (data) => async dispatch => {
    try {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI("cafe/order/", data, token);
        if (res.status === 201) {
            successMessage("سفارش شما ثبت شد.")
            dispatch({ type: CARTActionsType.CLEAR, payload: { data: [] } });
        }
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور پیش آمده است")
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const changeName = (name) => async dispatch => {
    try {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await patchDataAPI("account/me/", { fullName: name }, token);
        if (res.status === 200) {
            dispatch({ type: USERACTIONSYPES.GET_USER, payload: { data: res.data } });
            successMessage("نام شما تغییر کرد")
        }
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور پیش آمده است")
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const requestVip = (data) => async dispatch => {
    try {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI("cafe/customer/", data, token);
        if (res.status === 201) {
            successMessage("عضویت شما در این مجموعه ثبت شد")
        }
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage(err.response.data.message)
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getMyFavCafes = () => async dispatch => {
    try {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI("cafe/user_clubs/", token);
        if (res.status === 200) {
            dispatch({ type: USERACTIONSYPES.GET_FAV, payload: { data: res.data.results } });
        }
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: USERACTIONSYPES.LOAD, payload: { load: false } });
    }
}