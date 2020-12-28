import React, {useReducer} from 'react';

const initialState = {
    firstCounter : 0,
    secondCounter : 10
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' : return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' : return {...state, firstCounter: state.firstCounter - action.value}
        case 'reset' : return initialState;
        default : return state;
    }
}

function CounterWithUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    const [countThree, dispatchThree] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>First Counter  : {count.firstCounter}</h2>
            <button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement', value : 1})}>Decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
            <br /><br />

            <h2>Second Counter  : {countTwo.firstCounter}</h2>
            <button onClick={() => dispatchTwo({type : 'increment', value : 5})}>Increment 5 </button>
            <button onClick={() => dispatchTwo({type : 'decrement', value : 5})}>Decrement 5 </button>
            <button onClick={() => dispatchTwo({type : 'reset'})}>Reset</button>
            <br /><br />

            <h2>Third Counter  : {countThree.firstCounter}</h2>
            <button onClick={() => dispatchThree({type : 'increment', value : 7})}>Increment 7 </button>
            <button onClick={() => dispatchThree({type : 'decrement', value : 7})}>Decrement 7 </button>
            <button onClick={() => dispatchThree({type : 'reset'})}>Reset</button> 
        </div>
    );
}

export default CounterWithUseReducer;