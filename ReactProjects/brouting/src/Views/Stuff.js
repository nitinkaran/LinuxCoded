import React, { Component } from 'react';
import history from '../history';

// history hook works even in the component but the usage requires directory using 
// browsingHistory from the history package

class Stuff extends Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext() {
        history.push('/Contacts');
    }

    handlePrev() {
        history.push('/');
    }

    render() {
        return (
            <div className="home-component">
                <h1 className="darker-heading">
                    Stuff PAGE
                </h1>
                <h4 className="faded-heading">
                    Just a small STUFF page that has been created to render the stuff details
                </h4>
                <button onClick={this.handlePrev}>PREV</button>
                <button onClick={this.handleNext}>NEXT</button>
            </div>
        );
    }
}

export default Stuff;
