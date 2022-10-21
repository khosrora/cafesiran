import { DeleteData, minusItemFunc, plusItemFunc } from "../../utils/functions";
import { CARTActionsType } from "./actions";



const initialStore = {
    load: false,
    orderList: []
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case CARTActionsType.LOAD_GLOBAL:
            return {
                ...state,
                load: action.payload.load
            }
        case CARTActionsType.ADD_TO_CART:
            return {
                ...state,
                orderList: [...state.orderList, action.payload.data]
            }
        case CARTActionsType.DELETE_ITEM_CART:
            return {
                ...state,
                orderList: DeleteData(state.orderList, action.payload.data)
            }
        case CARTActionsType.PLUS_ITEM:
            return {
                ...state,
                orderList: plusItemFunc(state.orderList, action.payload.id, action.payload.num)
            }
        case CARTActionsType.MINUS_ITEM:
            return {
                ...state,
                orderList: minusItemFunc(state.orderList, action.payload.id, action.payload.num)
            }
        case CARTActionsType.CLEAR:
            return {
                ...state,
                orderList: []
            }
        default:
            return state;
    }
}