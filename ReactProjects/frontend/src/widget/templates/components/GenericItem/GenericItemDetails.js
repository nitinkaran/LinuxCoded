import React, { Component } from 'react';
import {connect} from 'react-redux';

import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ImageLocation from "../../ImageLocation";

import { mapStateToProps, mapDispatchToProps} from '../../../Ecom.connect';
import FrontApi from '../../../../Api/FrontendApi';

class GenericItemDetails extends Component{

    componentDidMount() {
        const {products : {SelectedProductId}, getProductDetailsById} = this.props;
        FrontApi.getProductById(SelectedProductId)
        .then(response => {
            getProductDetailsById(response.data);
        });
    }
    
    render() {
        const { productByIdResponse={} } = this.props;
          
        const {
            productId,
            productType,
            productName,
            productDescription,
            productPrice,
        } = productByIdResponse;
        return (
            <div>
                <CardColumns>
                    <Card style={{ width: '18rem', height: '32rem' }} key={productId}>
                        <Card.Img variant="top" src={require(`${ImageLocation.path2}`)} />
                    </Card>
                    <Card style={{ width: '18rem', height: '32rem' }} key={productId}>
                        <Card.Body>
                            <Card.Title>{productName} {productType}</Card.Title>
                            <Card.Text 
                                style={{ 
                                    overflow: 'hidden',
                                    width: '250px',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {productDescription}
                            </Card.Text>
                            <Card.Text>Price : Rs {productPrice}</Card.Text>
                            <Button variant="primary" >Select</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenericItemDetails);