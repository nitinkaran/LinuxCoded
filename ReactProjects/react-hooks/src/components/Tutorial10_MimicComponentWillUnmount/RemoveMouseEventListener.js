import React, {useState} from 'react';
import MimicComponetWillUnmount from './MimicComponetWillUnmount';

function RemoveMouseEventListener() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)} > Toggle Display</button>
            {display && <MimicComponetWillUnmount /> }
        </div>
    );
}

export default RemoveMouseEventListener;