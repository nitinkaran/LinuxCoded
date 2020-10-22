import { retrieveProductGroup, retrieveProducts } from '../Redux/Actions';
import { getProductCategoryName } from '../Redux/Reducer/FrontendSelector';

export const mapStateToProps = (state) => {
    const productGroupNames = getProductCategoryName(state);
    return {
        productGroupNames
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductGroup : (response) => {
            dispatch(retrieveProductGroup(response));
        },

        getProducts : (response) => {
            dispatch(retrieveProducts(response));
        }
    };
};