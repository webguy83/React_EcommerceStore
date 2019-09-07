import { ADD_CART_ITEM } from '../actions/actionTypes';
import { addToCart } from '../../helpers/generic';

const initState = {
    cartItems: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}