import React from 'react';
import ButtonCounter from './ButtonCounter';
import HoverCounter from './HoverCounter'
function Example3() {
    return (
        <div>
            <hr/>
            <ButtonCounter value={5} />
            <HoverCounter value="React " />
        </div>
    );
}

export default Example3;