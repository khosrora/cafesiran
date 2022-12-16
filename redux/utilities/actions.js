import { errorMessage } from "../../utils/toast";

export const UTILITIES = {
    NET_CONNECTION: "NET_CONNECTION",
}


export const checkConnection = bool => async dispatch => {
    try {
        dispatch({ type: UTILITIES.NET_CONNECTION, payload: { data: bool } })
    } catch (err) {
        errorMessage("لطفا دوباره امتحان کنید")
    }
}
