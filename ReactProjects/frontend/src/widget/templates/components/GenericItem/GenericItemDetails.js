import React, { Component } from 'react';
import {connect} from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ImageLocation from "../../ImageLocation";

import { mapStateToProps, mapDispatchToProps} from '../../../Ecom.connect';
import FrontApi from '../../../../Api/FrontendApi';
import history from '../../../../Redux/history';

const updateLocation = () => {
    history.push('/cart');
};

class GenericItemDetails extends Component{

    componentDidMount() {
        const {products={}, getProductDetailsById} = this.props;
        const {SelectedProductId} = products;
        FrontApi.getProductById(SelectedProductId)
        .then(response => {
            getProductDetailsById(response.data);
        });
    }
    
    render() {
        const { products={}} = this.props;
        const { productByIdResponse={} } = products;
          
        const {
            productId,
            productType,
            productName,
            productDescription,
            productPrice,
        } = productByIdResponse;

        if (_isEmpty(productByIdResponse)) {
            return null;
        }
        return (
            <div style={{width: '900px'}}>
                <Image style={{float: 'left', width: '550px'}} variant="top" src={require(`${ImageLocation.path2}`)} rounded />                                
                <Card style={{float: 'left', width: '350px'}} key={productId}>
                    <Card.Body style={{ width: '18rem', height: '32rem'}}>
                        <Card.Text> {productType}</Card.Text>
                        <Card.Title> {productName} </Card.Title>
                        <Card.Text>
                            {productDescription}
                        </Card.Text>
                        <Card.Text>Price : Rs {productPrice}</Card.Text>
                        <Button variant="primary" onClick={() => updateLocation()} >Select</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenericItemDetails);