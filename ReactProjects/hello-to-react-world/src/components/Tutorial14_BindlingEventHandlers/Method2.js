import React, { Component } from 'react';

class Method2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Method 2 Handler'
        }
    }
    
    clickHandler() {        
        this.setState({
            message: "Method is bind in the render method"
        });
        console.log(this);
    }

    render() {
        /**
         * Here we don't need the {} curly braces or return keyword after => because the
         * function is a single statement and also we are calling the handler and returning
         * that value that's why () parenthesis are required
         * 
         * This approach is best suited if we want to pass some parameters to our handler 
         * 
         * 
         * ------------------------------------------------------------------------------
         *                  DISADVANTAGE OF THIS METHOD
         * ------------------------------------------------------------------------------
         * The problem with this syntax is that a different callback is created each time 
         * the LoggingButton renders. In most cases, this is fine. However, if this 
         * callback is passed as a prop to lower components, those components might do an 
         * extra re-rendering. We generally recommend binding in the constructor or using 
         * the class fields syntax, to avoid this sort of performance problem.
         * 
         */

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={ () => this.clickHandler() } >Method2</button>
            </div>
        );
    }
}

export default Method2;