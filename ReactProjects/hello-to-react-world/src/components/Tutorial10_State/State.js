import React, { Component } from 'react';

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'This Will Change On Button Click'
        }
    }
    
    changeText() {

        /**
         * Here the message will be changed and each time the button is clicked the same message will be
         * referred again. Since the change has already been reflected in the UI it will not change the
         * context again        
         */
        // this.setState({
        //     message: 'Message changed on Button Click'
        // });


        /**
         * Here the prevState contains the previous message and each time the button is click the content
         * "CHANGED THE TEXT " is appended to the prevState. Hence the text changes always and 
         * rendered on UI
         */
        this.setState( (prevState) => ({
            message: prevState.message + " CHANGED THE teXT"
        }) );
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div><br />
                <button onClick={() => this.changeText() } >CHANGE TEXT</button>
            </div>
        );
    }
}

export default State;