import _isEmpty from 'lodash/isEmpty';

import { 
    retrieveProductGroup, 
    retrieveProducts,
    storeSelectedProduct,
    retrieveProductById,
    saveCartItem,
    saveShoppingCart
} from '../Redux/Actions';

import FrontApi from '../Api/FrontendApi';
import { getProductCategoryName } from '../Redux/Reducer/FrontendSelector';

export const mapStateToProps = (state) => {
    const productGroupNames = getProductCategoryName(state);
    const { products, CartStore } = state;
    return {
        productGroupNames,
        products,
        CartStore
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductGroup : (response) => {
            dispatch(retrieveProductGroup(response));
        },

        getProducts : (response) => {
            dispatch(retrieveProducts(response));
        },

        getProductDetailsById : (response) => {
            dispatch(retrieveProductById(response));
        },

        getSelectedProductDetails : (selectedProductId) => {
            dispatch(storeSelectedProduct(selectedProductId));
        },

        saveCartItem : (response) => {
            dispatch(saveCartItem(response));
        },

        saveShoppingCart : (response) => {
            dispatch(saveShoppingCart(response));
        },
        
        removeShoppingCart : (cartId) => {
            FrontApi.removeShoppingCart(cartId)
            .then(response => {
                if (_isEmpty(response.data)) {
                    dispatch(saveShoppingCart(response.data));
                }
            })
        },

        removeCartItemFromShoppingCart : (shoppingCartId, cartItemId) => {
            FrontApi.removeCartItemFromShoppingCart(shoppingCartId, cartItemId)
            .then(response => {
                if (_isEmpty(response.data)) {
                    FrontApi.getShoppingCartById(shoppingCartId)
                    .then(res => {
                        dispatch(saveShoppingCart(res.data));
                    });
                }
            });
        }
    };
};