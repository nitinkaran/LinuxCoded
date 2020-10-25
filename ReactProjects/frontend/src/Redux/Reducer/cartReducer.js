import { ProductCategory } from './ActionType';

let initialState = {
};

export default function (state=initialState, action) {
    const {type, payload = {}} = action;
    let newState;

    switch(type) {
        case ProductCategory.CART_ITEM :
            newState={...state, ...payload}
            break;

        case ProductCategory.CART :
            newState={...state, ...payload}
            break;

        default :   newState=state;   
    }

    return newState;
}