import React, {Component} from 'react';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import locations from './locations';
import Home from './Home/Home';
import Stuff from './Stuff/Stuff';
import Contact from './Contact/Contact';
import Game from './Game/Board/Board';
import ShowPage from './ShowPage';

class Main extends Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }

    show() {
        return locations.map(element => <Route exact path={element.path} component={element.component} />);
    }

    render () {
        return (
            <div className='hashrouter'>
                <HashRouter>
                    <div className="router-content">
                        {/* <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/game" component={Game} />
                        <Route path="/showpage" component={ShowPage} /> */}
                        {this.show()}
                    </div>
                </HashRouter>

            </div>
        );
    }
}

export default Main;