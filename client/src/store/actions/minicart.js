import { TOGGLE_MINI_CART_HIDDEN, ICON_CART_HIDDEN } from './actionTypes';

export const toggleMiniCartHidden = () => {
    return {
        type: TOGGLE_MINI_CART_HIDDEN
    }
}

export const iconCartHidden = (hide) => {
    return {
        type: ICON_CART_HIDDEN,
        payload: hide
    }
}