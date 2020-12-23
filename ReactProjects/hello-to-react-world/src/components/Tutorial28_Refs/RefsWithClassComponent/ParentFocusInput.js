import React, { Component } from 'react';
import ChildInput from './ChildInput';

class ParentFocusInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parentValue: ''
        }
        this.parentComponentRef = React.createRef();        
    }
    
    clickHandler = () => {
        this.parentComponentRef.current.childFocusInput();
    }

    handleChange = () => {
        this.setState({
            parentValue: this.parentComponentRef.current.state.childName
        })
    }

    render() {
        return (
            <div>
                <ChildInput ref={this.parentComponentRef} />
                <button onClick={this.clickHandler}>GET FOCUS</button> <br />
                <button onClick={this.handleChange}>PRINT TEXT</button><br />

                {(this.parentComponentRef.current !== null) &&
                <span>This is in child : {this.parentComponentRef.current.state.childName}</span>}
                
            </div>
        );
    }
}

export default ParentFocusInput;