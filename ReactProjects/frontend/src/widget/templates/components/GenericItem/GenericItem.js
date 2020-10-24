import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import history from '../../../../Redux/history';

import ImageLocation from "../../ImageLocation";

const updateLocation = (getSelectedProductDetails, productId) => {
    getSelectedProductDetails(productId);
    history.push('/articleConfiguration');
};

const createCardColumns = (item, getSelectedProductDetails) => {
    const { productName, productDescription, productPrice, productId } = item;
    return (
        <Card style={{ width: '18rem', height: '32rem' }} key={productId} >
            <Card.Img variant="top" src={require(`${ImageLocation.path2}`)} />
            <Card.Body>
                <Card.Title
                    style={{ 
                        overflow: 'hidden',
                        width: '250px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {productName}</Card.Title>
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
                <Button variant="primary" onClick={() => updateLocation(getSelectedProductDetails, productId)} block >Select</Button>
            </Card.Body>
        </Card>
    );
};

const GenericItem = ({GenericItemProps}) => {
    const { productsList, getSelectedProductDetails } = GenericItemProps;
    return (
        <CardColumns>
            {productsList.map(item => createCardColumns(item, getSelectedProductDetails))}
        </CardColumns>
    );
};

export default GenericItem;