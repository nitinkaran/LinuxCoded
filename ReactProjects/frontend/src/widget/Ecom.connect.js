import { addProductGroup, addProducts } from '../Redux/Actions';

export const mapStateToProps = (state) => {
    const { productGroup } = state;
    return {
        productGroup
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductGroup : (response) => {
            dispatch(addProductGroup(response));
        },

        getProducts : (response) => {
            dispatch(addProducts(response));
        }
    };
};