import React, { useState } from 'react';

function HookCounter3(props) {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    /**
     * This will increment by 1 instead of 5 bcz the count is not dependent on the 
     * previous count value within the loop
     */
    // const incrementFive = () => {
    //     for(let i=0; i<5; i++){
    //         setCount( count + 1 )
    //     }
    // }

    /**
     * This implementation correctly increments the value by 5 bcz it keeps count of
     * the previous state value and then increment the count
     */
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount( prevCount => prevCount + 1 )
        }
    }

    const callIncrement = () => {
        setCount(count => count + 1);   // safe method of increment the count 
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <br />
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>IncrementFive</button>
            <button onClick={callIncrement}>AnotherInc 5</button>
        </div>
    );
}

export default HookCounter3;