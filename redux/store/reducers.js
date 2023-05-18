import { globalActionsType } from "./actions";



const initialStore = {
    load: false,
    loadMore: false,
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case globalActionsType.LOAD_GLOBAL:
            return {
                ...state,
                load: action.payload.load
            }
        default:
            return state;
    }
}