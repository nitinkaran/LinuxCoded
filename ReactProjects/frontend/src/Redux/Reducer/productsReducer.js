import { ProductCategory } from './ActionType';

let initialState = {
};

export default function (state=initialState, action) {
    const {type, payload = {}} = action;
    let newState;
    switch(type) {
        case ProductCategory.PRODUCTS : 
            newState = {...state, ...payload};
            break;

        case ProductCategory.PRODUCT_SELECTED :
            newState={...state, SelectedProductId: payload}
            break;
        
        case ProductCategory.PRODUCT_DETAILS : 
            newState={...state, ...payload};
            break;

        default :   newState=state;
    }
    return newState;
}