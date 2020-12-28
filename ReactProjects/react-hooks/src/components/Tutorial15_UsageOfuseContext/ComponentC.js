import React, {useContext} from 'react';
import ComponentD from './ComponentD';
import {CommerceContext, ScienceContext} from './UsageOfUseContext';

function ComponentC() {

    const commerce = useContext(CommerceContext);
    const science  = useContext(ScienceContext);

    return (
        <div>
            <h2>In ComponentC</h2>
            <h4>{commerce.map((item, id) => 
                <li key={id}>{item.name} {item.title} studied from {item.postGrad} with {item.science}</li>)}</h4> <br />
            <h3>{science}</h3> <br />
            <hr />
            <ComponentD />
        </div>
    );
}

export default ComponentC;