import { AUTHTACTIONSYPES } from "./actions";



const initialStore = {
    load: false,
    login: false,
    getOtp: false,
    modalLogin: false
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case AUTHTACTIONSYPES.MODAL_LOGIN:
            return {
                ...state,
                modalLogin: action.payload.data
            }
        case AUTHTACTIONSYPES.LOAD:
            return {
                ...state,
                load: action.payload.load
            }
        case AUTHTACTIONSYPES.GET_OTP:
            return {
                ...state,
                getOtp: action.payload.data
            }
        case AUTHTACTIONSYPES.LOGIN:
            return {
                ...state,
                login: action.payload.data
            }
        default:
            return state;
    }
}