import React from 'react';
import CardColumns from "react-bootstrap/CardColumns";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedList from './SelectedList';
import RejectedList from './RejectedList';
import { useHistory } from 'react-router-dom';

const createCardColumns = (item, index, history, candidateListProps) => {
    const { Image, name } = item;
    const {updateShortList, updateRejectList} = candidateListProps;
     return (
        <Card style={{ width: '18rem', height: '28rem' }} key={index} >
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
                <Button variant="primary" onClick={()=>updateShortList(item)}>Select</Button>
                <Button variant="secondary" onClick={()=>updateRejectList(item)}>Reject</Button>
            </Card.Body>
        </Card>
    );
};

const GenericItem = ({candidateListProps}) => {
    const {candidateList, goToShortList, shortList, goToRejectList, rejectList} = candidateListProps;
    let history = useHistory();
    console.log(candidateList);

    if(goToShortList === true) {
        return <SelectedList candidateListProps={shortList} />
    }else if(goToRejectList === true) {
        return <RejectedList candidateListProps={rejectList} />
    }else {
        return (
            <CardColumns>
                {candidateList.map((item, index) => createCardColumns(item, index, history, candidateListProps))}
            </CardColumns>
        );
    }
};

export default GenericItem;