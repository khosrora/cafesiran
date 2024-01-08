import { DeleteData, EditDataReceptor, deleteLastIndex, EditDataCategories } from "../../utils/functions";
import { CAFEFETURESTYPE } from "./actions";



const initialStore = {
    load: false,
    printList: null,
    allReciptor: [],
    commentModal: false,
    comments: [],
    vipUsers: [],
    events: [],
    next: null,
    userLoyals: [],
    tables: [],
    categoriesCafe: [],
    loadAddCategories: false
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case CAFEFETURESTYPE.LOAD:
            return {
                ...state,
                load: action.payload.load
            }
        case CAFEFETURESTYPE.GET_LIST_PRINT:
            return {
                ...state,
                printList: action.payload.data
            }
        case CAFEFETURESTYPE.GET_ALL_RECEPTOR:
            return {
                ...state,
                allReciptor: action.payload.data
            }
        case CAFEFETURESTYPE.CREATE_RECEPTOR:
            return {
                allReciptor: [...state.allReciptor, action.payload.data]
            }
        case CAFEFETURESTYPE.DELETE_RECEPTOR:
            return {
                allReciptor: DeleteData(state.allReciptor, action.payload.id)
            }
        case CAFEFETURESTYPE.CHANGE_ACTIVE_RECEPTOR:
            return {
                allReciptor: EditDataReceptor(state.allReciptor, action.payload.id, action.payload.data)
            }
        case CAFEFETURESTYPE.COMMENT_MODAL:
            return {
                ...state,
                commentModal: action.payload.data
            }
        case CAFEFETURESTYPE.GET_COMMENTS:
            return {
                ...state,
                comments: action.payload.data.reverse()
            }
        case CAFEFETURESTYPE.COMMENT_ADD:
            return {
                ...state,
                comments: [action.payload.data, ...state.comments]
            }
        case CAFEFETURESTYPE.GET_VIP_USERS:
            return {
                ...state,
                vipUsers: action.payload.data
            }
        case CAFEFETURESTYPE.GET_NEXT_FE:
            return {
                ...state,
                next: action.payload.data
            }
        case CAFEFETURESTYPE.GET_EVENNT:
            return {
                ...state,
                events: action.payload.events
            }
        case CAFEFETURESTYPE.ADD_EVENT:
            return {
                ...state,
                events: [action.payload.events, ...state.events]
            }
        case CAFEFETURESTYPE.DELETE_EVENT:
            return {
                ...state,
                events: DeleteData(state.events, action.payload.id)
            }
        case CAFEFETURESTYPE.GET_USER_LOYALS:
            return {
                ...state,
                userLoyals: action.payload.data
            }
        case CAFEFETURESTYPE.GET_TABALES:
            return {
                ...state,
                tables: action.payload.data
            }
        case CAFEFETURESTYPE.CREATE_TABALE:
            return {
                ...state,
                tables: [action.payload.data, ...state.tables]
            }
        case CAFEFETURESTYPE.DELETE_TABALE:
            return {
                ...state,
                tables: deleteLastIndex(state.tables)
            }
        case CAFEFETURESTYPE.GET_CATEGORY:
            return {
                ...state,
                categoriesCafe: action.payload.data
            }
        case CAFEFETURESTYPE.ADD_CATEGORY:
            return {
                ...state,
                categoriesCafe: [action.payload.cate, ...state.categoriesCafe]
            }
        case CAFEFETURESTYPE.EDIT_CATEGORY:
            return {
                ...state,
                categoriesCafe: EditDataCategories(state.categoriesCafe, action.payload.id, action.payload.data)
            }
        case CAFEFETURESTYPE.LOAD_ADD_CATEGORY:
            return {
                ...state,
                loadAddCategories: action.payload.load
            }
        default:
            return state;
    }
}