import React, {useState, useEffect} from 'react';
import axios from 'axios';

function RetrieveData() {
    let initialLoad = false;
    const [list, setList] = useState([]);
    const [load, setLoad] = useState(initialLoad);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            setList(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[]);

    return (
        <div>
            <button onClick={()=> setLoad(prevState => !prevState)}>Load All Data Now</button>
            {
                load &&
                <ul>
                    { list.map((item, index) => <li key={index}>{item.title}</li>)}
                </ul>
            }
        </div>
    );
}

export default RetrieveData;