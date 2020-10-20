import React, { Component } from 'react';
import { nextButton } from "../store/NavigationActions";
import { connect } from "react-redux";

export const mapDispatchToProps = (dispatch) => {
    return {
        handleNextButton : (page) => {
            dispatch(nextButton(page));
        }
    };
};
 
class Home extends Component {

    render() {
        return (
            <div>
                <h3>This is the HOME PAGE and is to be shown in the default view</h3>
                <button onClick={() => this.props.handleNextButton('/contact')} >NEXT</button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Home);