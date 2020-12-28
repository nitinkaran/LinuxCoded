import {useState} from 'react';

function useCounterHook() {
    const [count, setCount, age, setAge] = [...useState(0), ...useState(25)];
    return {count, setCount, age, setAge};
}

export default useCounterHook;