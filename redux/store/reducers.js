import { STOREACTIONTYPE } from "./actions";



const initialStore = {
    load: false,
    loadMore: false,
    products: [],
    basket: []
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case STOREACTIONTYPE.LOAD:
            return {
                ...state,
                load: action.payload.load
            }
        case STOREACTIONTYPE.PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            }
        case STOREACTIONTYPE.ADD_BSKET:
            return {
                ...state,
                basket: [...state.basket, action.payload.product]
            }
        default:
            return state;
    }
}