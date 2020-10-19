import Actions from './ActionType'
let initialState = {
};

export default function (state=initialState, action) {
    const {type, payload = {}} = action;
    switch(type) {
        case Actions.ProductCategory.PRODUCT_GROUP : return {
            ...state,
            ...payload
        };
        default :   return state;   
    }
}