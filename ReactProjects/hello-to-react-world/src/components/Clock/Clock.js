import React, { Component } from 'react';
import Clock1 from './Clock1';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
            ,
            1000
        );
        console.log('------------', this.state.time);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
          time: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>Hello Timer !! Whats the current Date and  time</h3>
                <h1>
                    Date is {this.state.time.toLocaleDateString() } and TIME : 
                    {this.state.time.toLocaleTimeString()}</h1>
                <br />
                <hr />
                <Clock1 />
            </div>
        );
    }
}

export default Clock;