import React, {useState, useEffect} from 'react';
import axios from 'axios';

function RetrieveData() {
    const [list, setList] = useState([]);

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
            <ul>
                { list.map((item, index) => <li key={index}>{item.title}</li>)}
            </ul>
        </div>
    );
}

export default RetrieveData;