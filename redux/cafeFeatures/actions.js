import Cookies from "js-cookie";
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from "../../utils/fetchData";
import { errorMessage, successMessage } from "../../utils/toast";

export const CAFEFETURESTYPE = {
    LOAD: "LOAD",
    GET_LIST_PRINT: "GET_LIST_PRINT",
    GET_ALL_RECEPTOR: "GET_ALL_RECEPTOR",
    CREATE_RECEPTOR: "CREATE_RECEPTOR",
    DELETE_RECEPTOR: "DELETE_RECEPTOR",
    CHANGE_ACTIVE_RECEPTOR: "CHANGE_ACTIVE_RECEPTOR",
    COMMENT_MODAL: "COMMENT_MODAL",
    COMMENT_ADD: "COMMENT_ADD",
    GET_COMMENTS: "GET_COMMENTS"
}

export const getListPrint = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/order/${id}/`, token);
        dispatch({ type: CAFEFETURESTYPE.GET_LIST_PRINT, payload: { data: res.data } });
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}


export const getAllReceptor = () => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/bartender/`, token)
        dispatch({ type: CAFEFETURESTYPE.GET_ALL_RECEPTOR, payload: { data: res.data.results } })
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}

export const createReceptor = (data) => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI(`cafe/bartender/`, data, token)
        if (res.status === 201) {
            dispatch({ type: CAFEFETURESTYPE.CREATE_RECEPTOR, payload: { data: res.data } })
            successMessage("سالن دار با موفقیت اضافه شد")
        }
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}

export const deleteReceptor = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await deleteDataAPI(`cafe/bartender/${id}`, token)
        if (res.status === 204) {
            dispatch({ type: CAFEFETURESTYPE.DELETE_RECEPTOR, payload: { id } })
            successMessage("سالن دار با حذف شد")
        }
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}

export const changeActiveReceptor = (id, bool) => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        let data = { is_active: !bool }
        const res = await patchDataAPI(`cafe/bartender/${id}/`, data, token)
        if (res.status === 200) {
            dispatch({ type: CAFEFETURESTYPE.CHANGE_ACTIVE_RECEPTOR, payload: { id, data: !bool } });
            successMessage("وضعیت سالن دار تغییر کرد")
        }
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}


export const getAllComments = commentId => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`comment/item_comments/${commentId}`, token)
        if (res.status === 200) {
            dispatch({ type: CAFEFETURESTYPE.GET_COMMENTS, payload: { data: res.data.data } });
        }
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        // errorMessage(error.response.data.message)
        dispatch({ type: CAFEFETURESTYPE.GET_COMMENTS, payload: { data: [] } });
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}

export const openModalComment = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        dispatch({ type: CAFEFETURESTYPE.COMMENT_MODAL, payload: { data: id } });
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}

export const addComment = (data) => async dispatch => {
    try {
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI(`comment/create/`, data, token)
        if (res.status === 201) {
            let newComment = res.data;
            newComment.response = null;
            const formatYmd = date => date.toISOString().slice(0, 10);
            newComment.date = formatYmd(new Date())
            newComment.name = ''
            dispatch({ type: CAFEFETURESTYPE.COMMENT_ADD, payload: { data: newComment } });
            successMessage("دیدگاه ارسال شد")
        }
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    } catch (error) {
        errorMessage(error.response.data.non_field_errors[0])
        dispatch({ type: CAFEFETURESTYPE.LOAD, payload: { load: false } });
    }
}

