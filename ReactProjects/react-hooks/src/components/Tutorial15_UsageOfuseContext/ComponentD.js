import React, {useContext} from 'react';
import {CommerceContext, ScienceContext} from './UsageOfUseContext';

function ComponentD() {
    const commerce = useContext(CommerceContext);
    const science  = useContext(ScienceContext);

    return (
        <div>
            <h1>Hello this context is in Child D</h1> <br />
            <h2>{commerce.map((item, id) => 
                <li key={id}>{item.name} {item.title} studied from {item.postGrad} with {item.science}</li>)}</h2> <br />
            <h3>{science}</h3> <br />
        </div>
    );
}

export default ComponentD;