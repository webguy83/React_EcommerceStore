import { SHOP_DATA } from '../../data/shopData';
import { UPDATE_COLLECTIONS } from '../actions/actionTypes';

const initState = {
    data: SHOP_DATA
}

export default (state = initState, action) => {
    switch(action.type) {
        case UPDATE_COLLECTIONS: 
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state;
    }
}