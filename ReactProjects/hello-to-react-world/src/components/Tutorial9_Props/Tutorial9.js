import React, { Component } from 'react';
import Greet from './Greet';

class Tutorial9 extends Component {
    render() {
        return (
            <div>
                <Greet name="Kalam" heroName="Missile Man of India" /> 
                <Greet name="Theresa" heroName="Missile Woman of India" />
                <Greet name="Satish Dhawan" heroName="A great leader" />
                <Greet name="showUnknown" heroName="Unknow COntent">
                    <p>This is shown as a children props i.e. props.children</p>
                </Greet>
            </div>
        );
    }
}

export default Tutorial9;