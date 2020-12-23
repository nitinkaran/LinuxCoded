import React, { Component } from 'react';
import { UserConsumer } from './useContext';
class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {(username) => {
                    return <h1>{username}</h1>
                }}
            </UserConsumer>
        );
    }
}

export default ComponentF;