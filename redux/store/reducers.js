import { DeleteData, minusItemFunc, plusItemFunc } from "../../utils/functions";
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
        case STOREACTIONTYPE.PLUS_ITEM:
            return {
                ...state,
                basket: plusItemFunc(state.basket, action.payload.id, action.payload.num)
            }
        case STOREACTIONTYPE.MINUS_ITEM:
            return {
                ...state,
                basket: minusItemFunc(state.basket, action.payload.id, action.payload.num, action.payload.min)
            }
        case STOREACTIONTYPE.DELETE_ITEM_CART:
            return {
                ...state,
                basket: DeleteData(state.basket, action.payload.id)
            }
        default:
            return state;
    }
}