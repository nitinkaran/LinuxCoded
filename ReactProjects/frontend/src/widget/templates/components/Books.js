import React, { Component } from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import { getArticleBasedOnType } from '../../../Redux/Reducer/FrontendSelector';
import { mapDispatchToProps } from '../../Ecom.connect';
import FrontApi from '../../../Api/FrontendApi';
import GenericItem from './GenericItem/GenericItem';

const mapStateToProps = (state) => {    
    const productsList = getArticleBasedOnType(state, "books");
    return {
        productsList
    };
};

class Books extends Component {

    componentDidMount() {
        const { getProducts } = this.props;
        FrontApi.getProducts()
        .then((response) => {
            getProducts(response.data);
        });
    }

    GenerateList() {
        const { productsList, getSelectedProductDetails } = this.props;
        const GenericItemProps = {productsList, getSelectedProductDetails};
        if (_isEmpty(productsList)) {
            return;
        }
        return <GenericItem GenericItemProps={GenericItemProps} />;
    }

    render() {
        return (
            <div>
                {this.GenerateList()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);