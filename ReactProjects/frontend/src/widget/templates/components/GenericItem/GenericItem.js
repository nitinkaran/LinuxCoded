import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ImageLocation from "../../ImageLocation";

const createCardColumns = (item) => {
    const { productName, productDescription, productPrice } = item;
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={require(`${ImageLocation.path12}`)} /> */}
            <Card.Img variant="top" src={`${ImageLocation.path1}`} />
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>{productDescription}</Card.Text>
            </Card.Body>
            <small>Price : Rs {productPrice}</small>
            <Button variant="primary">Select</Button>
        </Card>
    );
};

const GenericItem = ({productsList}) => {
    return (
        <CardColumns>
            {
                productsList.map(item => createCardColumns(item))
            }
        </CardColumns>
    );
};

export default GenericItem;