import React, {useState} from 'react';

function TitleNameUseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    function incrementCount() {
        setCount(count + 1)
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={incrementCount}> Click Me</button>
            <button onClick={() => setCount(0)}> RESET Count</button>
            <br />
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={() => setName('')}> RESET Input</button>
        </div>
    );
}

export default TitleNameUseEffect;