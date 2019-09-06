import { TOGGLE_MINI_CART_HIDDEN } from '../actions/actionTypes';

const initState = {
    miniCartHidden: true
}

export default (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_MINI_CART_HIDDEN:
            return {
                ...state,
                miniCartHidden: !state.miniCartHidden
            }
        default:
            return state
    }
}