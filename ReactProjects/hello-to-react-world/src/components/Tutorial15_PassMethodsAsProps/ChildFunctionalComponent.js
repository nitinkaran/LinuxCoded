import React from 'react';

const ChildFunctionalComponent = (props) => {
    return (
        <div>
            <button 
                onClick={() => props.messageToParent("Hello Message from CHILD to PARENT")} >
                PassMessageFromChildToParent
            </button>
        </div>
    );
};

export default ChildFunctionalComponent;    