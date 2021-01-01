import {useState} from 'react';

/**
 * Here this hook is returning an object, which means that while receiving in other
 * components we can get these values in any order 
 */
function useCounterHook() {
    const [count, setCount, age, setAge] = [...useState(0), ...useState(25)];
    return {count, setCount, age, setAge};
}

export default useCounterHook;