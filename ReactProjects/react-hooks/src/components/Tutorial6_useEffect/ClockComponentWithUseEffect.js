import React, { useState, useEffect } from 'react';

function ClockComponentWithUseEffect() {

    const [time, setTime] = useState(new Date());

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect( () => {
        console.log("within useEffect")
        // setTime(new Date())
        const interval = setInterval(changeTime, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [] )

    return (
        <div>
            <h2> Current time in Hook is : {time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default ClockComponentWithUseEffect