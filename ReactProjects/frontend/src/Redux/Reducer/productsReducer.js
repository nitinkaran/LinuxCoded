import { ProductCategory } from './ActionType'
let initialState = {
};

export default function (state=initialState, action) {
    const {type, payload = {}} = action;
    switch(type) {
        case ProductCategory.PRODUCTS : return {
            ...state,
            ...payload
        };
        default :   return state;   
    }
}