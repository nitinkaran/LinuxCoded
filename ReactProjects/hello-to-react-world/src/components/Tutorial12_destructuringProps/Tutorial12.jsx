import React, { Component } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from "./ClassComponent";

class Tutorial12 extends Component {
    render() {
        return (
            <div>
                <FunctionalComponent name="Functional" value="Component" />
                <ClassComponent name="Class" value="Component" />
            </div>
        );
    }
}

export default Tutorial12;