import {useState} from 'react';

function useCounterHook2(value) {
    const [count, setCount] = useState(value);
    return [count, setCount];
}

export default useCounterHook2;