import { 
    retrieveProductGroup, 
    retrieveProducts,
    storeSelectedProduct,
    retrieveProductById
} from '../Redux/Actions';
import { getProductCategoryName } from '../Redux/Reducer/FrontendSelector';

export const mapStateToProps = (state) => {
    const productGroupNames = getProductCategoryName(state);
    const { products } = state;
    return {
        productGroupNames,
        products
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
        }
    };
};