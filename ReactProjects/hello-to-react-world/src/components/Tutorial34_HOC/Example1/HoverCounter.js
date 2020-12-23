import React, { Component } from 'react';

class HoverCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.hoverRef = React.createRef();
    }

    getFocus = () => {
        this.createRef.current.focus();
    }

    incrementCount = () => {        
        this.setState( (prevState) => ({
            count: prevState.count + 1
        }) );
    }

    render() {
        let count = this.state.count;
        return (
            <div>
                <h1 onMouseOver={this.incrementCount} onFocus={this.getFocus} > HOVERED {count} times </h1>
            </div>
        );
    }
}

export default HoverCounter;