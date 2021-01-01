import React, { useState } from 'react';

function HookCounter3(props) {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    /**
     * This will increment by 1 instead of 5 bcz the count is not dependent on the 
     * previous count value within the loop. The setCount method works in Async way
     * after running for 5 times all the setCount methods are merged into one and 
     * then it updates the count value due to which the value remains 1 even after
     * the loop ran for 5 times
     */
    // const incrementFive = () => {
    //     for(let i=0; i<5; i++){
    //         // console.log('Within Loop', count);
    //         setCount( count +1)
    //     }
    // }

    /**
     * This implementation correctly increments the value by 5 bcz it keeps count of
     * the previous state value and then increment the count. 
     * setCount is also an ASYNC call same as setState
     */
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount( prevCount => prevCount + 1 )
            console.log("After set Count : "+ count);
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