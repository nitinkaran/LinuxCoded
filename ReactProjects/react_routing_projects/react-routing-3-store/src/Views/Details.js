import React, { Component } from 'react';
import { nextButton, prevButton } from "../store/NavigationActions";
import { connect } from "react-redux";

export const mapDispatchToProps = (dispatch) => {
    return {
        handleNextButton : (page) => {
            dispatch(nextButton(page));
        },

        handlePrevButton : (page) => {
            dispatch(prevButton(page));
        }
    };
};

class Details extends Component {
    render() {
        return (
            <div>
                <h3>This is the Details PAGE containing the details of all the pages</h3>
                <button onClick={() => this.props.handlePrevButton('/contact')}>PREV</button>
                <button onClick={() => this.props.handleNextButton('/items')}>NEXT</button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Details);