import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    // componentDidMount() {
    //     const { getProducts } = this.props;
    //     FrontApi.getProducts()
    //     .then((response) => {
    //         getProducts(response.data);
    //     });
    // }

    GenerateList() {
        const { productsList } = this.props;
        return <GenericItem productsList={productsList} />;
    }

    render() {
        // const { productsList } = this.props;
        // return Array.isArray(productsList) ? <GenericItem productsList={productsList} /> : null;
        return (
            <div>
                {this.GenerateList()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);