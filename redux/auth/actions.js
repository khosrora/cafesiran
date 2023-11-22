import Cookies from "js-cookie";
import { getDataAPI, postDataAPI } from "../../utils/fetchData";
import { errorMessage, successMessage } from "../../utils/toast";
import { USERACTIONSYPES } from "../user/actions";

export const AUTHTACTIONSYPES = {
    LOAD: "LOAD",
    LOGIN: "LOGIN",
    GET_OTP: "GET_OTP",
    MODAL_LOGIN: "MODAL_LOGIN",
}


export const show_Modal_Login = data => async dispatch => {
    try {
        dispatch({ type: AUTHTACTIONSYPES.MODAL_LOGIN, payload: { data } })
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید")
    }
}

export const getOtp = phone => async dispatch => {
    try {
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: true } });
        const res = await postDataAPI("account/login_or_register/", phone, null);
        if (res.status === 201) {
            dispatch({ type: AUTHTACTIONSYPES.GET_OTP, payload: { data: true } })
            successMessage("کد اعتبار سنجی برای شما ارسال شد")
        }
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید")
        dispatch({ type: AUTHTACTIONSYPES.GET_OTP, payload: { data: false } })
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const handleSendAgainCode = () => async dispatch => {
    try {
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: AUTHTACTIONSYPES.GET_OTP, payload: { data: false } })
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: AUTHTACTIONSYPES.GET_OTP, payload: { data: false } })
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const CheckOtp = data => async dispatch => {
    try {
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: true } });
        const res = await postDataAPI("account/token/", data, null);
        if (res.status === 200) {
            Cookies.set("CafesIran__TOKEN", res.data.token, { expires: 90 })
            dispatch({ type: AUTHTACTIONSYPES.MODAL_LOGIN, payload: { data: false } })
            getDataAPI("account/me/", res.data.token).then(result => {
                dispatch({ type: USERACTIONSYPES.GET_USER, payload: { data: result.data } });
                dispatch({ type: AUTHTACTIONSYPES.LOGIN, payload: { data: true } })
            }).catch(err => {
                errorMessage("لطفا دوباره امتحان کنید")
            })
            successMessage("خوش آمدید");
        }
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        console.log(err);
        errorMessage(err.response.data.non_field_errors)
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    }
}


export const logOutUser = () => async dispatch => {
    try {
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await getDataAPI("account/logout/", token);
        if (res.status === 200) {
            Cookies.remove("CafesIran__TOKEN");
            dispatch({ type: AUTHTACTIONSYPES.LOGIN, payload: { data: false } });
            dispatch({ type: USERACTIONSYPES.GET_USER, payload: { data: null } });
            dispatch({ type: AUTHTACTIONSYPES.GET_OTP, payload: { data: false } })
            successMessage(res.data.detail)
        }
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: AUTHTACTIONSYPES.LOAD, payload: { load: false } });
    }
}