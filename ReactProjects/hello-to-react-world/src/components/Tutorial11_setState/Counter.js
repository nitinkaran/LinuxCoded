import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countFive: 0
        };
    }
    
    increment() {

        /**
         * Here we want to execute some code after the setState method but there comes the discrepency
         * while execution i.e. UI count shows 1 and console shows 0 and so on. This is because console
         * statement is executed SYNCRONOUSLY but setState method is executed in ASYNC mode and hence
         * the discrepancy come while showing the content of the count
         */
        // this.setState({
        //     count: this.state.count + 1
        // });
        // console.log('Callback Value = ', this.state.count);

        /**
         * In order to execute some code after the setState method then write that code in the setState
         * method. Because setState takes 2 parameters i.e. 1st param is the prevState related code
         * and the 2nd param is related to the CALLBACK code which must be executed and then it will
         * execute the code. So here the console and setState method both gets executed in ASYNC mode 
         * and hence the same value is reflected on console and on UI
         */
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback Value = ', this.state.count);
            }
        );
        
    }

    incrementOne(){      
        /**
         * Uncomment this code to see another unwanted feature
         */
        // this.setState({
        //     countFive: this.state.countFive+1
        // });
        // console.log('SYNC console = ', this.state.countFive);

        this.setState(
            (prevState) => ({
                countFive: prevState.countFive + 1
            }),
            () => {
                console.log('CALLBACK console = ', this.state.countFive);
            }
        );

        console.log('SYNC console = ', this.state.countFive);
    }

    incrementFive() {
        
        /**
         * Say we want to increment the count value to 5 each times, and for that we called the
         * incrementOne method 5 times which will call the setState method 5 times and we will 
         * get the count value incremented by 5 each time.
         * 
         * But this does not happen so? Bcz when we are calling incrementOne 5 times then each of
         * the setState gets called but from the performance point of view REACT COMBINES ALL THE 
         * setState METHODS AND THEN INCREMENTS THE VALUE AS A RESULT we get to see the count value
         * is incremented by 1 each time instead of increasing by 5
         * 
         * 
         * So to achieve this we make a prevState which keeps the previous value and whenver the 
         * setState is called the countFive value is incremented by prevState + 1 WHICH GIVES 
         * INCREMENT VALUE TO BE 5 TIMES ON THE setState INSTEAD OF INCREASING IT BY 1. The 2nd
         * code is correspoding to this feature and it also contains the callback method. 
         * NOTE that 
         *          (prevState) => ({
         *               countFive: prevState.countFive + 1
         *          }),        
         * 
         * Here () parenthesis after arrow function, removing it will give the error i.e. 
         * expected an assignment or a function call instead saw an expression
         */
        this.incrementOne();
        this.incrementOne();
        this.incrementOne();
        this.incrementOne();
        this.incrementOne();
    }

    render() {
        return (
            <div>
                <h1>COUNT - {this.state.count}</h1>
                <button onClick={() => this.increment()} >Increment</button>
                <h1>COUNT  FIVE - {this.state.countFive}</h1>
                <button onClick={() => this.incrementFive()} >IncFive</button>
            </div>
        );
    }
}

export default Counter;