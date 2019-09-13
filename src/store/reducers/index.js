import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import miniCart from './minicart';
import cart from './cart'
import category from './category';
import shop from './shop';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

export default persistReducer(persistConfig, combineReducers({
    user,
    miniCart,
    cart,
    category,
    shop
}))