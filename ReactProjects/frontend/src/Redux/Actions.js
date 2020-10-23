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
            products : {
                ...response
            }
        }
    };
};

export const storeSelectedProduct = (selectedProductId) => {
    return {
        type : ProductCategory.PRODUCT_SELECTED,
        payload : selectedProductId
    }
};

export const retrieveProductById = (response) => {
    return {
        type : ProductCategory.PRODUCT_DETAILS,
        payload : {
            productByIdResponse : {
                ...response
            }
        }
    }
};