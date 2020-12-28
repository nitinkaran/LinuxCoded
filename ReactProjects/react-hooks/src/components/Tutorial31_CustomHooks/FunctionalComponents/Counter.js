import React from 'react';
import useCounterHook from '../Hooks/useCounterHook';

function Counter() {
    // If array is returned then same order must be preserved here
    // const [count, setCount, age, setAge] = useCounterHook();
    const {age, setAge, count, setCount} = useCounterHook();
    return (
        <div>
            <h4>Count is : {count}</h4>
            <button onClick={()=> setCount(count + 1)}>Increment Count</button> <br />

            <h4>Age is : {age}</h4>
            <button onClick={()=> setAge(age + 1)}>Increment Age</button> <br />
        </div>
    );
}

export default Counter;