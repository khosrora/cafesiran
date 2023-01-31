import { globalActionsType } from "./actions";



const initialStore = {
    load: false,
    loadMore: false,
    isShowLoad: true,
    loadCate: true,
    loadItem: true,
    cafe: null,
    categories: [],
    menuList: [],
    cafesList: [],
    blogs: [],
    blog: null,
    eventsCafe: []
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case globalActionsType.LOAD_GLOBAL:
            return {
                ...state,
                load: action.payload.load
            }
        case globalActionsType.LOAD_MORE:
            return {
                ...state,
                loadMore: action.payload.load
            }
        case globalActionsType.is_SHOW_LOAD_MORE:
            return {
                ...state,
                isShowLoad: action.payload.data
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
        case globalActionsType.LOAD_CATEGORIES:
            return {
                ...state,
                loadCate: action.payload.load
            }
        case globalActionsType.LOAD_ITEM:
            return {
                ...state,
                loadItem: action.payload.load
            }
        case globalActionsType.GET_BLOGS:
            return {
                ...state,
                blogs: action.payload.data
            }
        case globalActionsType.GET_BLOG:
            return {
                ...state,
                blog: action.payload.data
            }
        case globalActionsType.GET_EVENTS:
            return {
                ...state,
                eventsCafe: action.payload.data
            }
        case globalActionsType.GET_EVENTS_LOAD_MORE:
            return {
                ...state,
                eventsCafe: state.eventsCafe.concat(action.payload.data)
            }
        default:
            return state;
    }
}