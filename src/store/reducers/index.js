import { combineReducers } from 'redux';
import user from './user';
import miniCart from './minicart';

export default combineReducers({
    user,
    miniCart
})