import React from 'react';
import history from '../history';

const Home = () => {
    return (
        <div className="home-component">
            <h1 className="darker-heading">
                HOME PAGE
            </h1>
            <h4 className="faded-heading">
                Just a small HOME page need to be editted
            </h4>
            <button onClick={() => history.push('/Stuff')}>NEXT</button>
        </div>
    );
};

export default Home;
