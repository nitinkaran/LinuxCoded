import React, { Component } from 'react';

class ClockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount(){
        this.setState({
            time: new Date()
        })
    }

    componentDidUpdate(prevProps, prevState){        
        if(prevState.time !== this.state.time) {
            setInterval(() => {
                this.setState({
                    time: new Date()
                })
            }, 1000)
        }
    }
    
    render() {
        return (
            <div>
                <h2>Current time : {this.state.time.toLocaleTimeString()}</h2>            
            </div>
        );
    }
}

export default ClockComponent;