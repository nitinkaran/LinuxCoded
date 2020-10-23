import _isEmpty from 'lodash/isEmpty';

const getMappedArrayOfProductGroup = (productGroup) => {
    return Object.keys(productGroup).map(item => productGroup[item].productGroupType);
};

export const getProductCategoryName = (store={}) => {
    const { productGroup } = store;
    return getMappedArrayOfProductGroup(productGroup);   
};

const getMappedArrayOfArticleOnType = (products, type) => {
    if (_isEmpty(products)) {
        return
    }

    const {products: productsObject} = products;
    return Object.keys(productsObject).map(item => {
        return productsObject[item].productType.toLowerCase() === type ? productsObject[item] : null
    }).filter(item => item);
};

export const getArticleBasedOnType = (store={}, type) => {
    const { products } = store;
    return getMappedArrayOfArticleOnType(products, type);
};