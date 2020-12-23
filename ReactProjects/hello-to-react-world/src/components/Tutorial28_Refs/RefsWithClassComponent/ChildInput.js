import React, { Component } from 'react';

class ChildInput extends Component {

    constructor(props) {
        super(props);
        this.childInputRef = React.createRef();
        this.state = {
            childName: ''
        };
    }

    childFocusInput(){
        this.childInputRef.current.focus();
    }

    changeInput = (event) => {
        this.setState({
            childName: event.target.value
        })
    }

    render() {
        return (
            <div>
                Child Input Tag : 
                    <input 
                        type="text" 
                        ref={this.childInputRef} 
                        value={this.state.childName}
                        onChange={this.changeInput}
                         />
            </div>
        );
    }
}

export default ChildInput;