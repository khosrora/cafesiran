import { DeleteData, EditDataReceptor } from "../../utils/functions";
import { CAFEFETURESTYPE } from "./actions";



const initialStore = {
    load: false,
    printList: null,
    allReciptor: []
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
        default:
            return state;
    }
}