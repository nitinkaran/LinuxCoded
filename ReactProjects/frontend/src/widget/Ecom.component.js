import React, { Component } from 'react';
import axios from 'axios';
import FrontApi from '../Api/FrontendApi';
// import MainView from './templates/Ecom.MainView';

export default class EcommerceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productGroup : {},
            products: {}
        };
    } getUrl

    componentDidMount() {        
        FrontApi.getProductCategories()
        .then((response) => {
            FrontApi.getProducts()
            .then((res) => {                
                this.setState({productGroup: response.data, products: res.data});
            });
        });
    }

    render() {

        const data = this.state;
        console.log('------------\n'+JSON.stringify(data)+'\n---------------');
        return (
            <div>
                "Hello"
            </div>
        );
    }

}