import React, { Component } from 'react';
import { NotBindingHandler } from "./NotBindingHandler";
import Method1 from './Method1';
import Method2 from './Method2';
import Method3 from './Method3';
import Method4 from './Method4';

/**
 * We bind the event handlers bcz of the way 'this' keyword works in the javascript and not bcz 
 * of React. 
 */

class Tutorial14 extends Component {
    render() {
        return (
            <div>
                <NotBindingHandler />
                <Method1 />
                <Method2 />
                <Method3 />
                <Method4 />
            </div>
        );
    }
}

export default Tutorial14;