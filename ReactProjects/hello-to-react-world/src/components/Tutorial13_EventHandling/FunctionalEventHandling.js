import React from 'react';

const FunctionalEventHandling = () => {

    function clickHandler(){
        console.log("Button clicked in functional component")
    }

    return (
        <div>
            Functional Button : <button onClick={clickHandler} >FButton</button>
        </div>
    );
}

export default FunctionalEventHandling;