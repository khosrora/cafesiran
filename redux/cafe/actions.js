import Cookies from "js-cookie";
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI, putDataAPI } from "../../utils/fetchData";
import { errorMessage, successMessage } from "../../utils/toast";
import { UTILITIES } from './../utilities/actions';


export const CAFEACTIONSYPES = {
    LOAD: "LOAD",
    GET_DATA: "GET_DATA",
    EDIT_CAFE: "EDIT_CAFE",
    ITEMS_MENU: "ITEMS_MENU",
    ITEM_MENU: "ITEM_MENU",
    DELETE_ITEM_MENU: "DELETE_ITEM_MENU",
    GET_GALLERY: "GET_GALLERY",
    ADD_GALLERY: "ADD_GALLERY",
    DELETE_IMAGE: "DELETE_IMAGE",
    GET_CAFES_SUGGEST: "GET_CAFES_SUGGEST",
    GET_CAFES_RESERVE: "GET_CAFES_RESERVE",
    GET_CAFES_COMMENTS: "GET_CAFES_COMMENTS",
    GET_ORDERS: "GET_ORDERS",
    EDIT_ITEM_MENU_STATUS: "EDIT_ITEM_MENU_STATUS",
    CHANGE_ORDER_STATE: "CHANGE_ORDER_STATE",
    DETAILS_ORDER: "DETAILS_ORDER",
    DELETE_RESERVE: "DELETE_RESERVE",
    CHANGE_STATE_RESERV: "CHANGE_STATE_RESERV",
    TEST: "TEST",
    DELETE_COMMENT: "DELETE_COMMENT",
    GET_PLANS: "GET_PLANS",
    GET_NEXT: "GET_NEXT",
    DELETE_SUGGEST: "DELETE_SUGGEST",
    GET_SEARCH_DATA: "GET_SEARCH_DATA"
}


export const getDetailsCafe = id => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/cafes/${id}/`, token);
        dispatch({ type: CAFEACTIONSYPES.GET_DATA, payload: { data: res.data } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}
export const editRequestForCafe = (id, data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await putDataAPI(`cafe/cafes/${id}/`, data, token);
        if (res.status === 200) {
            successMessage("ویرایش با موفقیت به اتمام رسید");
            dispatch({ type: CAFEACTIONSYPES.EDIT_CAFE, payload: { data: res.data } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const createItemMenu = (data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI(`cafe/menuitems/`, data, token);
        if (res.status === 201) successMessage("آیتم منو با موفقیت ساخته شد")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getAllItemCafe = (page) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/menuitems/?page=${page}`, token);
        dispatch({ type: CAFEACTIONSYPES.ITEMS_MENU, payload: { data: res.data.results } })
        dispatch({ type: CAFEACTIONSYPES.GET_NEXT, payload: { data: res.data.links.next } })
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getOneItemMenu = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.ITEM_MENU, payload: { data: null } })
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/menuitems/${id}`, token);
        dispatch({ type: CAFEACTIONSYPES.ITEM_MENU, payload: { data: res.data } })
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const editItemMenu = (id, data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await putDataAPI(`cafe/menuitems/${id}/`, data, token);
        if (res.status === 200) {
            successMessage("آیتم منو با موفقیت ویرایش شد")
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const isActiveItem = (id, data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        let boolData = {
            is_active: data
        }
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await patchDataAPI(`cafe/menuitems/${id}/`, boolData, token);
        if (res.status === 200) {
            dispatch({ type: CAFEACTIONSYPES.EDIT_ITEM_MENU_STATUS, payload: { id, data } })
            successMessage("آیتم منو با موفقیت ویرایش شد")
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const deleteMenuItems = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await deleteDataAPI(`cafe/menuitems/${id}/`, token);
        if (res.status === 204) {
            dispatch({ type: CAFEACTIONSYPES.DELETE_ITEM_MENU, payload: { data: id } });
            errorMessage("آیتم منو با موفقیت حذف شد");
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}



export const getGalleriesCafe = (page) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/galleries/?page=${page}`, token);
        if (res.status === 200) {
            dispatch({ type: CAFEACTIONSYPES.GET_NEXT, payload: { data: res.data.links.next } })
            dispatch({ type: CAFEACTIONSYPES.GET_GALLERY, payload: { data: res.data.results } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const addImageGalley = (data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI(`cafe/galleries/`, data, token);
        if (res.status === 201) {
            dispatch({ type: CAFEACTIONSYPES.ADD_GALLERY, payload: { data: res.data } })
            successMessage("عکس با موفقیت به روز شد")
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const deleteImageGallery = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await deleteDataAPI(`cafe/galleries/${id}`, token);
        if (res.status === 204) {
            dispatch({ type: CAFEACTIONSYPES.DELETE_IMAGE, payload: { id } })
            successMessage("عکس با موفقیت حذف شد")
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getSuggestCafe = (page) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/suggestions/?page=${page}`, token);
        dispatch({ type: CAFEACTIONSYPES.GET_NEXT, payload: { data: res.data.next } });
        dispatch({ type: CAFEACTIONSYPES.GET_CAFES_SUGGEST, payload: { data: res.data.results } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getReserveCafe = (page) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/reservations/?page=${page}`, token);
        dispatch({ type: CAFEACTIONSYPES.GET_NEXT, payload: { data: res.data.links.next } });
        dispatch({ type: CAFEACTIONSYPES.GET_CAFES_RESERVE, payload: { data: res.data.results } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getCommentsCafe = (page) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`comment/cafes_comments?page=${page}`, token);
        dispatch({ type: CAFEACTIONSYPES.GET_NEXT, payload: { data: res.data.next } });
        dispatch({ type: CAFEACTIONSYPES.GET_CAFES_COMMENTS, payload: { data: res.data.results } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}


export const getOrder = () => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/order/`, token);
        dispatch({ type: CAFEACTIONSYPES.GET_ORDERS, payload: { data: res.data } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getDetailsOrder = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await getDataAPI(`cafe/order/${id}/`, token);
        if (res.status === 200) dispatch({ type: CAFEACTIONSYPES.DETAILS_ORDER, payload: { data: res.data } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const changeStateOrder = (state, id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await putDataAPI(`cafe/order/${id}/`, { state: state.toString() }, token);
        if (res.status === 200) {
            dispatch({ type: CAFEACTIONSYPES.CHANGE_ORDER_STATE, payload: { data: state } });
            successMessage("وضعیت سفارش تغییر کرد");
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const deleteReserve = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await deleteDataAPI(`cafe/reservations/${id}/`, token);
        if (res.status === 204) {
            successMessage("حذف رزرو با موفقیت انجام شد")
            dispatch({ type: CAFEACTIONSYPES.DELETE_RESERVE, payload: { id } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const changeStateReserve = (id, state) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await putDataAPI(`cafe/reservations/${id}/`, { state }, token);
        if (res.status === 200) {
            successMessage("وضعیت درخواست تغییر کرد");
            dispatch({ type: CAFEACTIONSYPES.CHANGE_STATE_RESERV, payload: { id, state } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const changeIsOpenAction = (bool, id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await patchDataAPI(`cafe/cafes/${id}/`, { is_open: bool }, token);
        if (res.status === 200) {
            successMessage("وضعیت مجموعه تغییر کرد");
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}



export const editTaxCafe = (id, data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await patchDataAPI(`cafe/cafes/${id}/`, data, token);
        if (res.status === 200) {
            successMessage("مبلغ ارزش افزوده ویرایش شد");
            dispatch({ type: CAFEACTIONSYPES.EDIT_CAFE, payload: { data: res.data } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}


export const getPlans = () => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await getDataAPI(`plan/plans/`, token);
        if (res.status === 200) {
            dispatch({ type: CAFEACTIONSYPES.GET_PLANS, payload: { data: res.data } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const addAddress = (id, data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await patchDataAPI(`cafe/cafes/${id}/`, data, token);
        if (res.status === 200) {
            successMessage("موقعیت مجموعه شما به روز شد")
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const getOrdersSearch = (data) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await getDataAPI(`queries/order/?start_date=${data.start_date}&end_date=${data.end_date}`, token);
        if (res.status === 200) {
            dispatch({ type: CAFEACTIONSYPES.GET_SEARCH_DATA, payload: { data: res.data } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const addResponseCafe = data => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await postDataAPI(`comment/response_comment`, data, token);
        if (res.status === 201) {
            dispatch({ type: CAFEACTIONSYPES.TEST, payload: { id: data.id } });
            successMessage("پاسخ دیدگاه ارسال شد");
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}

export const deleteComment = (id) => async dispatch => {
    try {
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN");
        const res = await deleteDataAPI(`comment/comment/${id}`, token);
        if (res.status === 200) {
            successMessage("دیدگاه با موفقیت خذف شد")
            dispatch({ type: CAFEACTIONSYPES.DELETE_COMMENT, payload: { id } });
        }
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    } catch (err) {
        errorMessage("متاسفانه مشکلی از سمت سرور رخ داده است")
        dispatch({ type: CAFEACTIONSYPES.LOAD, payload: { load: false } });
    }
}