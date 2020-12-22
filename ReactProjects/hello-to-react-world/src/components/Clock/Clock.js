import React, { Component } from 'react';
import Clock1 from './Clock1';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    /**
     * Here setInterval calls tick method after every 1000ms and time is set with the new time
     * Whenever new time is generated render method is updated. Again componentDidMount updates
     * the time again render method is called and so on. This continues due to which we see the
     * timer is updated every time.
     * 
     * Here we are also using a variable 
     *                          this.timerId
     * its a variable which can be taken other than this.state and this.props. This is helpful
     * whenever the component is unmounted
     */
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
            </div>
        );
    }
}

export default Clock;