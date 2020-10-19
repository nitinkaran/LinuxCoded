import React, {Component} from 'react';
import { MapRoutes } from './ApplicationRoutes';

class Application extends Component {

    render() {
        return (
            <div className="react-dom">
                <MapRoutes />
            </div>
        );
    }
}

export default Application;