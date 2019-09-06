import { ADD_CART_ITEM } from './actionTypes';

export const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM,
        payload: item
    }
}