import React, { Component } from 'react';
import ChildClock from './ChildClock';

class Clock1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    /**
     * This is another approach to render the time by using both componentDidMount(1) and 
     * componentDidUpdate(2). Here for the first time we call the setState method in the
     * (1) which updates the time and then again in the (2) we compare the prevState and 
     * the new Date. Once they are unequal make a new call to setInterval to get a new time
     * This sets the time state again. Each time (2) changes the state of time (2)gets called
     * and compared with the prevState which again updates the timer. In this way we are 
     * updating the time and is reflected in the UI
     */

    componentDidMount() {
        this.increment();
    }

    componentDidUpdate(prevState) {
        if(prevState !== new Date() ) {
            this.timerId = setInterval(
                                () => this.increment()
                                ,
                                1000
                            );
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    increment() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>Hello Clock !! What's the current time</h3>
                <h1>It is : {this.state.time.toLocaleTimeString()}.</h1>
                <hr />
                <ChildClock time={this.state.time.toLocaleTimeString()} />
            </div>
        );
    }
}

export default Clock1;