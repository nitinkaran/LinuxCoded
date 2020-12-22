import React, { Component } from 'react';

class Clock1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

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
            </div>
        );
    }
}

export default Clock1;