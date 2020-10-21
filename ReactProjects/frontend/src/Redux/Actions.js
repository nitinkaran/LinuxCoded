import { ProductCategory } from './Reducer/ActionType';

export const retrieveProductGroup = (response) => {
    return {
        type : ProductCategory.PRODUCT_GROUP,
        payload : {
            ...response
        }
    };
};

export const retrieveProducts = (response) => {
    return {
        type : ProductCategory.PRODUCTS,
        payload : {
            ...response
        }
    };
};