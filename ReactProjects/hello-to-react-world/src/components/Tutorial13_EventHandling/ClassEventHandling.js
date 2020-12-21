import React, { Component } from 'react';

class ClassEventHandling extends Component {

    clickHandler(){
        console.log("Button clicked in class");
    }

    render() {
        return (
            <div>
                Class Button : <button onClick={this.clickHandler} > Cbutton</button>
            </div>
        );
    }
}

export default ClassEventHandling;