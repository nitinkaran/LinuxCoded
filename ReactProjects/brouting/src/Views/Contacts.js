import React from 'react';
import history from '../history';

const Contacts = () => {
    return (
        <div className="home-component">
            <h1 className="darker-heading">
                Contacts Page
            </h1>
            <h4 className="faded-heading">
                Just a small CONTACTS page containing all the known contacts of this person
            </h4>
            <button onClick={() => history.push('/Stuff')}>PREV</button>
            <button onClick={() => history.push('/Details')}>NEXT</button>
        </div>
    );
};

export default Contacts;
