import React from 'react';
import history from '../history';

const Contacts = () => {
    return (
        <div className="home-component">
            <h1 className="darker-heading">
                Details Page
            </h1>
            <h4 className="faded-heading">
                A Details page to consist of the details of any item
            </h4>
            <button onClick={() => history.push('/Contacts')}>PREV</button>
            <button onClick={() => history.push('/Topics')}>NEXT</button>
        </div>
    );
};

export default Contacts;
