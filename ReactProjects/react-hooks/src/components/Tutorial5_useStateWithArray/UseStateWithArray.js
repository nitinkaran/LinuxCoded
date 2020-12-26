import React, {useState} from 'react';

function UseStateWithArray() {

    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }]);
    }

    const removeItems = () => {
        setItems([]);
    }

    return (
        <div>
            <button onClick={addItems} >Add Items</button>
            <button onClick={removeItems} >Reset Items</button>
            <ul> {items.map(item => <li key={item.id}>{item.value}</li>)} </ul>
        </div>
    );
}

export default UseStateWithArray;