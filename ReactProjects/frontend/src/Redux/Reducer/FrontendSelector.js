const getMappedArrayOfProductGroup = (productGroup) => {
    return Object.keys(productGroup).map(item => productGroup[item].productGroupType);
};

export const getProductCategoryName = (store={}) => {
    const { productGroup } = store;
    return getMappedArrayOfProductGroup(productGroup);   
};

const getMappedArrayOfArticleOnType = (products, type) => {
    return Object.keys(products).map(item => {
        return products[item].productType.toLowerCase() === type ? products[item] : null
    }).filter(item => item);
};

export const getArticleBasedOnType = (store={}, type) => {
    const { products } = store;
    return getMappedArrayOfArticleOnType(products, type);
};