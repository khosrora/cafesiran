import Cookies from "js-cookie";
import { getDataAPI, postDataAPI } from "../../utils/fetchData";
import { errorMessage, successMessage } from "../../utils/toast";

import { UTILITIES } from './../utilities/actions';


export const globalActionsType = {
    LOAD_GLOBAL: "LOAD_GLOBAL",
    LOAD_MORE: "LOAD_MORE",
    is_SHOW_LOAD_MORE: "is_SHOW_LOAD_MORE",
    LOAD_CATEGORIES: "LOAD_CATEGORIES",
    LOAD_ITEM: "LOAD_ITEM",
    GET_DETAIL_CAFE: "GET_DETAIL_CAFE",
    GET_CATEGORIES: "GET_CATEGORIES",
    GET_MENUELIST: "GET_MENUELIST",
    GET_CAFES: "GET_CAFES",
    GET_BLOGS: "GET_BLOGS",
    GET_BLOG: "GET_BLOG",
    GET_EVENTS: "GET_EVENTS",
    GET_EVENTS_LOAD_MORE: "GET_EVENTS_LOAD_MORE",
}

export const getMenuList = id => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_ITEM, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI(`cafe/menuitem_list/${id}/`);
        dispatch({ type: globalActionsType.GET_MENUELIST, payload: { data: res.data } });
        dispatch({ type: globalActionsType.LOAD_ITEM, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}
export const categoryList = () => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_CATEGORIES, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        const res = await getDataAPI(`cafe/category_list`);
        dispatch({ type: globalActionsType.GET_CATEGORIES, payload: { data: res.data } });
        dispatch({ type: globalActionsType.LOAD_CATEGORIES, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}
export const getPublicDetailsCafe = id => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI(`cafe/cafe_detail_page/${id}/`);
        dispatch({ type: globalActionsType.GET_DETAIL_CAFE, payload: { data: res.data } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const sendSuggest = data => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        const res = await postDataAPI(`cafe/send_suggest/`, data, null);
        if (res.status === 201) successMessage("پیام شما با موفقیت ارسال شد")
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید")
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const sendReserve = data => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI(`cafe/reservations/`, data, token);
        if (res.status === 201) successMessage("درخواست شما ارسال شد.");
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (err) {
        errorMessage("در حال حاضر درخواست شما ثبت شده است")
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}
export const sendContactUs = data => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const token = Cookies.get("CafesIran__TOKEN")
        const res = await postDataAPI(`siteinfo/contact_us/`, data, token);
        if (res.status === 201) successMessage("پیام شما ارسال شد.");
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (err) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const searchCafe = async code => {
    try {
        const res = await getDataAPI(`cafe/cafe_detail/${code}/`);
        return res.data.id;
    } catch (error) {
        errorMessage(error.response.data.message)
    }
}

export const getCafes = (slug, cityId) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI(`cafe/province_cafes/${slug}/?city=${cityId}`);
        if (res.status === 200) {
            dispatch({ type: globalActionsType.GET_CAFES, payload: { data: res.data } });
        } else if (res.status === 204) {
            dispatch({ type: globalActionsType.GET_CAFES, payload: { data: [] } });
        }
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (error) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.GET_CAFES, payload: { data: [] } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}


export const liveRegisterAction = (data) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        const res = await postDataAPI("cafe/fast_register/", data, null);
        if (res.status === 201) {
            successMessage("با شماره ثبت شده میتوانید وارد وب سایت شوید")
            successMessage("عملیات با موفقیت به اتمام رسید.")
        }
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (error) {
        errorMessage("مجموعه شما قبلا ثبت شده است")
        dispatch({ type: globalActionsType.GET_CAFES, payload: { data: [] } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const getBlogs = (data) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI("blog/iran-cafe/", data, null);
        if (res.status === 200) {
            dispatch({ type: globalActionsType.GET_BLOGS, payload: { data: res.data.results } });
        }
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (error) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.GET_CAFES, payload: { data: [] } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const getSingleBlog = (slug) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI(`blog/${slug}/`);
        if (res.status === 200) {
            dispatch({ type: globalActionsType.GET_BLOG, payload: { data: res.data } });
        }
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (error) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.GET_CAFES, payload: { data: null } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const getEventsCafe = (id) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        dispatch({ type: globalActionsType.is_SHOW_LOAD_MORE, payload: { data: true } })
        const res = await getDataAPI(`cafe/cafe_events/${id}/`);
        if (res.status === 200) {
            dispatch({ type: globalActionsType.GET_EVENTS, payload: { data: Object.keys(res.data).length === 0 ? [] : res.data.events } });
            console.log(res.data.events.length);
            if (res.data.events.length < 6) dispatch({ type: globalActionsType.is_SHOW_LOAD_MORE, payload: { data: false } });
        }
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    } catch (error) {
        // dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.GET_CAFES, payload: { data: null } });
        dispatch({ type: globalActionsType.LOAD_GLOBAL, payload: { load: false } });
    }
}

export const getEventsCafeLoadMore = (id, page) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_MORE, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI(`cafe/cafe_events/${id}/?page=${page}`);
        if (res.status === 200) {
            dispatch({ type: globalActionsType.GET_EVENTS_LOAD_MORE, payload: { data: res.data.events } });
            if (res.data.events.length < 6) dispatch({ type: globalActionsType.is_SHOW_LOAD_MORE, payload: { data: false } });
        }
        dispatch({ type: globalActionsType.LOAD_MORE, payload: { load: false } });
    } catch (error) {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: false } });
        dispatch({ type: globalActionsType.GET_CAFES, payload: { data: null } });
        dispatch({ type: globalActionsType.LOAD_MORE, payload: { load: false } });
    }
}