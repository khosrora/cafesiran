import { DeleteData, EditData, EditDataComment, EditDataReserve } from "../../utils/functions";
import { CAFEACTIONSYPES } from "./actions";



const initialStore = {
    load: false,
    cafe: [],
    items: [],
    item: null,
    gallery: [],
    suggestions: [],
    reserve: [],
    comments: [],
    orders: [],
    detailsOrder: null,
    plans: [],
    next: null,
    searchData: {}
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case CAFEACTIONSYPES.LOAD:
            return {
                ...state,
                load: action.payload.load
            }
        case CAFEACTIONSYPES.GET_DATA:
            return {
                ...state,
                cafe: action.payload.data
            }
        case CAFEACTIONSYPES.EDIT_CAFE:
            return {
                ...state,
                cafe: action.payload.data
            }
        case CAFEACTIONSYPES.ITEMS_MENU:
            return {
                ...state,
                items: action.payload.data
            }
        case CAFEACTIONSYPES.DELETE_ITEM_MENU:
            return {
                ...state,
                items: DeleteData(state.items, action.payload.data)
            }
        case CAFEACTIONSYPES.ITEM_MENU:
            return {
                ...state,
                item: action.payload.data
            }
        case CAFEACTIONSYPES.GET_GALLERY:
            return {
                ...state,
                gallery: action.payload.data
            }
        case CAFEACTIONSYPES.ADD_GALLERY:
            return {
                ...state,
                gallery: [action.payload.data, ...state.gallery]
            }
        case CAFEACTIONSYPES.DELETE_IMAGE:
            return {
                ...state,
                gallery: DeleteData(state.gallery, action.payload.id)
            }
        case CAFEACTIONSYPES.GET_CAFES_SUGGEST:
            return {
                ...state,
                suggestions: action.payload.data
            }
        case CAFEACTIONSYPES.GET_CAFES_RESERVE:
            return {
                ...state,
                reserve: action.payload.data
            }
        case CAFEACTIONSYPES.GET_CAFES_COMMENTS:
            return {
                ...state,
                comments: action.payload.data
            }
        case CAFEACTIONSYPES.GET_ORDERS:
            return {
                ...state,
                orders: action.payload.data
            }
        case CAFEACTIONSYPES.EDIT_ITEM_MENU_STATUS:
            return {
                ...state,
                items: EditData(state.items, action.payload.id, action.payload.data)
            }
        case CAFEACTIONSYPES.DETAILS_ORDER:
            return {
                ...state,
                detailsOrder: action.payload.data
            }
        case CAFEACTIONSYPES.CHANGE_ORDER_STATE:
            return {
                ...state,
                detailsOrder: { ...state.detailsOrder, state: action.payload.data }
            }
        case CAFEACTIONSYPES.DELETE_RESERVE:
            return {
                ...state,
                reserve: DeleteData(state.reserve, action.payload.id)
            }

        case CAFEACTIONSYPES.CHANGE_STATE_RESERV:
            return {
                ...state,
                reserve: EditDataReserve(state.reserve, action.payload.id, action.payload.state)
            }

        case CAFEACTIONSYPES.GET_PLANS:
            return {
                ...state,
                plans: action.payload.data
            }

        case CAFEACTIONSYPES.GET_NEXT:
            return {
                ...state,
                next: action.payload.data
            }

        case CAFEACTIONSYPES.GET_SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload.data
            }

        case CAFEACTIONSYPES.DELETE_COMMENT:
            return {
                ...state,
                comments: DeleteData(state.comments, action.payload.id)
            }

        case CAFEACTIONSYPES.TEST:
            return {
                ...state,
                comments: EditDataComment(state.comments, action.payload.id)
            }
        default:
            return state;
    }
}