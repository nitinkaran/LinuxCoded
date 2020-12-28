import React from 'react';
import useCounterHook2 from '../Hooks/useCounterHook2';

function Counter2() {
    const [count, setCount]  = useCounterHook2(233);
    const [age, setAge] = useCounterHook2(-29);
    const [century, setCentury] = useCounterHook2(5000);
    return (
        <div>
            <h4>Count is : {count}</h4>
            <button onClick={()=> setCount(count + 1)}>Increment Count</button> <br />

            <h4>Age is : {age}</h4>
            <button onClick={()=> setAge(age + 1)}>Increment Age</button> <br />

            <h4>century is : {century}</h4>
            <button onClick={()=> setCentury(century + 1)}>Increment century</button> <br />
        </div>
    );
}

export default Counter2;