import { TOGGLE_MINI_CART_HIDDEN, ICON_CART_HIDDEN } from '../actions/actionTypes';

const initState = {
    miniCartHidden: true,
    iconCartHidden: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_MINI_CART_HIDDEN:
            return {
                ...state,
                miniCartHidden: !state.miniCartHidden
            }
        case ICON_CART_HIDDEN:
            return {
                ...state,
                iconCartHidden: action.payload
            }
        default:
            return state
    }
}