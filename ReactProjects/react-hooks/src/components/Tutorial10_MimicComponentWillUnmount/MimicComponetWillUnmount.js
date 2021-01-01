import React, {useState, useEffect} from 'react';

function MimicComponetWillUnmount() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const changeMouseLocation = (event) => {
        console.log('MouseLoaction event')
        setX(event.clientX)
        setY(event.clientY)
    } 

    useEffect( () => {
        console.log('USE EFFECT CALLED');
        window.addEventListener('mousemove', changeMouseLocation);

        /**
         * To clean up the useEffect hook once unmounted, we need to return a function
         * to unmount the event listener i.e. clear the state that could be updated
         * by react even after unmounting happens. This happens bcz once we disable the
         * event listener, react tries to update the state which happens after unmounting
         * of the component
         */

        return () => {
            console.log('Unmount event listener code')
            window.removeEventListener('mousemove', changeMouseLocation);
        }

    }, []);

    return (
        <div>            
            <h2>X : {x} and Y : {y}</h2>
        </div>
    );
}

export default MimicComponetWillUnmount;