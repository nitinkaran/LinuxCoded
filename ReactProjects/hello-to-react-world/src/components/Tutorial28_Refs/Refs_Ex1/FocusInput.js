import React, { Component } from 'react';

class FocusInput extends Component {
    
    constructor(props) {
        super(props);        
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.inputRef);
        console.log(this.inputRef.current.attributes.name);
    }

    clickHandler() {
        // this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                Name : <input name="Name" ref={this.inputRef} onClick={ () => this.clickHandler } />
            </div>
        );
    }
}

export default FocusInput;