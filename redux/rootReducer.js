import { combineReducers } from 'redux';


// ! reducers
import globalReducer from './global/reducers';
import authReducer from './auth/reducers';
import userReducer from './user/reducers';
import cafeReducer from './cafe/reducers';
import categoriesReducer from './category/reducers';
import cartReducer from './cart/reducers';
import cafeFeReducer from './cafeFeatures/reducers';



const rootReducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    userDetails: userReducer,
    cafeDetails: cafeReducer,
    categoryDetails: categoriesReducer,
    cartDetails: cartReducer,
    cafeFaetures: cafeFeReducer,
});

export default rootReducer;