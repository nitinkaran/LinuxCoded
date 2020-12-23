import React from 'react';

function ReactMemoEx(props) {
    // console.log("********* REACT MEMO **************");
    return (
        <div>
            <h1>This is in MEMO Functional Component : {props.name}</h1>
        </div>
    );
}

// export default ReactMemoEx;
export default React.memo(ReactMemoEx);