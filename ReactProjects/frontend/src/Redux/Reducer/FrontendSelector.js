const getMappedArrayOfProductGroup = (productGroup) => {
    return Object.keys(productGroup).map(item => productGroup[item].productGroupType);
};

export const getProductCategoryName = (store={}) => {
    const { productGroup } = store;
    return getMappedArrayOfProductGroup(productGroup);   
};