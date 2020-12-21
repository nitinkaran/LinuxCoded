import React, { Component } from 'react';
import FunctionalEventHandling from "./FunctionalEventHandling";
import ClassEventHandling from "./ClassEventHandling";

/**
 * Event handler is a function which has to be called for Eg:- onClick --- it should not
 * be a function call otherwise the functionality of the function will be called once the
 * code is rendered. 
 * 
 *     <button onClick={clickHandler} name="button" />
 * Here the parenthesis are not added after the clickHandler, bcz mentioning () this would
 * mean to call this function but event handler is a function but not a function call
 * 
 * THis is even worse in the case of Class component where a clickHandler() is called then
 * we will get the infinite times clickHandler() method is getting called on some state is 
 * being changed or the method is get called once without even clicking button. Instead we will
 * call it like this
 *      <button onClick={this.clickHandler} name="button" />
 *                              OR
 *      <button onClick={() => this.clickHandler()} name="button" />
 * without () parenthesis
 * 
 * 
 */

class Tutorial13 extends Component {
    render() {
        return (
            <div>
                <FunctionalEventHandling />
                <ClassEventHandling />
            </div>
        );
    }
}

export default Tutorial13;