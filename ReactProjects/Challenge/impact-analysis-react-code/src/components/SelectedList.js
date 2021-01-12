import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card';

const createCardColumns = (item, index) => {
    const { Image, name} = item;
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

const SelectedList = ({candidateListProps}) => {
    console.log(candidateListProps);
    return (
        <CardColumns>
            {candidateListProps.map((item, index) => createCardColumns(item, index))}
        </CardColumns>
    );
};

export default SelectedList;