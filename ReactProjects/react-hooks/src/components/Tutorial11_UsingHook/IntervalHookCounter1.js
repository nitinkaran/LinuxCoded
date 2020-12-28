import React, {useState, useEffect} from 'react';

function IntervalHookCounter1() {

    const [count, setCount] = useState(0);

    /**
     * Here we are incrementing the count based on previous count value and after and this
     * count value is controlled from setInterval method which changes this value after 
     * every 1 sec. Since the change in the count value is itself being taken care of by
     * setCount, hence we don't need to look for this change explicitly in [count]. But 
     * he we must clear off the previous count value update from EFFECT method.
     */
    const tick = () => {        
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return ()=> clearInterval(interval)
    },[])

    return (
        <div>
            <br />
            Current count : {count}        
        </div>
    );
}

export default IntervalHookCounter1;