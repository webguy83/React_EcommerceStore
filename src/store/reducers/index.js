import { combineReducers } from 'redux';
import user from './user';
import miniCart from './minicart';
import cart from './cart';

export default combineReducers({
    user,
    miniCart,
    cart
})