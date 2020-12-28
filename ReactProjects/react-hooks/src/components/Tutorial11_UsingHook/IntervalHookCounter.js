import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        /**
         * Here we are incrementing the count irrespective of previous count value and after
         * each render EFFECT calls setInterval and after every 1sec tick method gets called
         * This tick contain the incremented value and EFFECT checks that it has to watch for
         * count update as mentioned in the [count]. Thus it renders the new updated value of
         * count.  But if the return function call is not done then it will infinitely keep 
         * on rendering bcz count value will be updated every time. So this return function
         * first clears the previous count value and then it updates with the new count value
         * 
         */

        const tick = () => {
            setCount(count + 1)
        }

        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count]);

    return (
        <div>
            Current count : {count}
        </div>
    );
}

export default IntervalHookCounter;