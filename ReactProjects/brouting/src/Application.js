import React, {Component} from 'react';
import history from './history';
import {locationSequence, MapRoutes} from './ApplicationRoutes';

class Application extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            pageSequence: locationSequence,
            prevButton: false,
            nextButton: true
        };
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrev() {
        let currentCount = this.state.count;
        let numOfPages = locationSequence.length - 1;
        if (currentCount>0 && currentCount <= numOfPages) {
            currentCount -= 1;            
        } else {
            currentCount = 0;
        }
        history.goBack();
    }
    
    handleNext() {
        let currentCount = this.state.count;
        let sequence = this.state.pageSequence;
        let numOfPages = locationSequence.length - 1;
        if (currentCount < numOfPages) {
            currentCount += 1;            
        } else {
            currentCount = 0;
        }
        history.push(sequence[currentCount]);
        this.setState({
            count: currentCount
        });
    }

    render() {
        return (
            <div className="react-dom">                
                <button className="btn btn-success" onClick={this.handlePrev}>
                    PREV
                </button>
                <button className="btn btn-success" onClick={this.handleNext}>
                    NEXT 
                </button>
                <MapRoutes />
            </div>
        );
    }
}

export default Application;