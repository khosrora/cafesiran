import { UTILITIES } from "./actions";



const initialStore = {
    connection: true
};


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case UTILITIES.NET_CONNECTION:
            return {
                ...state,
                connection: action.payload.data
            }
        default:
            return state;
    }
}