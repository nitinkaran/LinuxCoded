import React, { useState } from 'react';

function HookCounter4() {
    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <form>
            <label>
                FirstName : 
            <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value })} />
            </label>
            <br />
            <label>
                LastName : 
            <input 
                type="text" 
                value={name.lastName}  
                onChange={e => setName({...name,  lastName: e.target.value })} />
            </label>
            <br />
            <h3>FirstName : {name.firstName}</h3>
            <h3>LastName : {name.lastName}</h3>
        </form>
    );
}

export default HookCounter4;