import { CATEGORYACTIONSYPES } from "./actions";



const initialStore = {
    load: false,
    categories: [],
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case CATEGORYACTIONSYPES.LOAD:
            return {
                ...state,
                load: action.payload.load
            }
        case CATEGORYACTIONSYPES.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.data
            }
        default:
            return state;
    }
}