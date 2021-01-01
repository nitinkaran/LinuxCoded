import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const createCardColumns = (item, index) => {
    const { Image, name, id } = item;
    return (
        <Card style={{ width: '18rem', height: '25rem' }} key={index} >
            <Card.Img style={{height: '20rem' }} variant="top" src={Image} />
            <Card.Body>
                <Card.Title
                    style={{ 
                        overflow: 'hidden',
                        width: '250px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {name}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

const RejectedList = ({candidateListProps}) => {
    console.log(candidateListProps);
    return (
        <CardColumns>
            {candidateListProps.map((item, index) => createCardColumns(item, index))}
        </CardColumns>
    );
};

export default RejectedList;