export const addProductGroup = (response) => {
    return {
        type : 'productGroup',
        payload : {
            ...response
        }
    };
};

export const addProducts = (response) => {
    return {
        type : 'products',
        payload : {
            ...response
        }
    };
};