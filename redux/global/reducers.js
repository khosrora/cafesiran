import { globalActionsType } from "./actions";



const initialStore = {
    load: false,
    cafe: null,
    categories: [],
    menuList: [],
    cafesList: []
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case globalActionsType.LOAD_GLOBAL:
            return {
                ...state,
                load: action.payload.load
            }
        case globalActionsType.GET_DETAIL_CAFE:
            return {
                ...state,
                cafe: action.payload.data
            }
        case globalActionsType.GET_MENUELIST:
            return {
                ...state,
                menuList: action.payload.data
            }
        case globalActionsType.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.data
            }
        case globalActionsType.GET_CAFES:
            return {
                ...state,
                cafesList: action.payload.data
            }
        default:
            return state;
    }
}