import Cookies from "js-cookie";
import { getDataAPI, postDataAPI } from "../../utils/fetchData";
import { errorMessage, successMessage } from "../../utils/toast";

import { UTILITIES } from './../utilities/actions';


export const globalActionsType = {
    LOAD_GLOBAL: "LOAD_GLOBAL",
    LOAD_MORE: "LOAD_MORE",
    is_SHOW_LOAD_MORE: "is_SHOW_LOAD_MORE",
}


export const getEventsCafeLoadMore = (id, page) => async dispatch => {
    try {
        dispatch({ type: globalActionsType.LOAD_MORE, payload: { load: true } });
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: true } });
        const res = await getDataAPI(`store/products/`);
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