import { USERACTIONSYPES } from "./actions";



const initialStore = {
    load: false,
    user: null,
    isRequest: false,
    fav: null
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case USERACTIONSYPES.LOAD:
            return {
                ...state,
                load: action.payload.load
            }
        case USERACTIONSYPES.GET_USER:
            return {
                ...state,
                user: action.payload.data
            }
        case USERACTIONSYPES.IS_SEND_REQUEST: {
            return {
                ...state,
                isRequest: action.payload.data
            }
        }
        case USERACTIONSYPES.GET_FAV: {
            return {
                ...state,
                fav : action.payload.data
            }
        }

        default:
            return state;
    }
}