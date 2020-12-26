import React, {useState, useEffect} from 'react';

function ClockHook() {

    const [time, setTime] = useState(new Date());

    /**
     * Here the useEffect has the same working as the clock is set in the 
     * componentDidMount Cycle and then 
     */

    useEffect(()=> {
        setInterval(()=>setTime(new Date()) , 10);
    }, [time]);

    return (
        <div>
            Current time is : <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default ClockHook;