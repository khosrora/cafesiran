import { CATEGORYACTIONSYPES } from "./actions";



const initialStore = {
    load: false,
    laodCafe: false,
    categories: [],
    categoriesCafe: []
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
        case CATEGORYACTIONSYPES.GET_CATEGORIES_CAFE:
            return {
                ...state,
                categoriesCafe: action.payload.data
            }
        case CATEGORYACTIONSYPES.LOAD_GET_CATEGORIES_CAFE:
            return {
                ...state,
                laodCafe: action.payload.load
            }
        default:
            return state;
    }
}