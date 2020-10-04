import React, { Component } from 'react';
import { connect } from 'react-redux';
import propsProvider from "./Ecom.propsProvider";
import { mapDispatchToProps, mapStateToProps } from './Ecom.connect';
import FrontApi from '../Api/FrontendApi';
// import MainView from './templates/Ecom.MainView';

class EcommerceComponent extends Component {

    constructor(props) {
        super(props);
        this.propsProvider = new propsProvider(this.props);
        this.state = {
            productGroup : {},
            products: {}
        };
    }

    componentDidMount() {
        const {getProductGroup, getProducts} = this.props;
        FrontApi.getProductCategories()
        .then((response) => {
            getProductGroup(response.data);
            this.setState({productGroup : response.data});
        });

        FrontApi.getProducts()
        .then((res) => {
            getProducts(res.data);
            this.setState({products: res.data});
        });
    }

    render() {

        const data = this.state.productGroup;
        console.log('------------\n'+JSON.stringify(data)+'\n---------------');
        return (
            <div>
                "Hello"
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EcommerceComponent);