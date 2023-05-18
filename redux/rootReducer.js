import { combineReducers } from 'redux';


// ! reducers
import utilitiesReducer from './utilities/reducers';
import globalReducer from './global/reducers';
import authReducer from './auth/reducers';
import userReducer from './user/reducers';
import cafeReducer from './cafe/reducers';
import categoriesReducer from './category/reducers';
import cartReducer from './cart/reducers';
import cafeFeReducer from './cafeFeatures/reducers';
import storeReducer from './store/reducers';



const rootReducer = combineReducers({
    utilities: utilitiesReducer,
    global: globalReducer,
    auth: authReducer,
    userDetails: userReducer,
    cafeDetails: cafeReducer,
    categoryDetails: categoriesReducer,
    cartDetails: cartReducer,
    cafeFaetures: cafeFeReducer,
    storeCafe: storeReducer
});

export default rootReducer;