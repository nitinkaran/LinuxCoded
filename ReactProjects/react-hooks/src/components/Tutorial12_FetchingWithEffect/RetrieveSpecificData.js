import React, {useState, useEffect} from 'react';
import axios from 'axios';

function RetrieveSpecificData() {
    const [list, setList] = useState([]);
    const [request, setRequest] = useState(1);
    const [buttonText, setButtonText] = useState(request);

    const handleInputText =(event) => {
        setRequest(event.target.value);
    }

    const handleClick = () => {
        setButtonText(request);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonText}`)
        .then(response => {
            console.log(response);
            setList(response.data);
        })
        .catch(error => {
            console.log(error);
            setList({
                title: `Error encountered while requesting for the resource with Id : ${buttonText}`
            })
        })
    },[buttonText]);

    return (
        <div>
            <input type="text" value={request} onChange={handleInputText} />
            <button onClick={handleClick}>Fetch</button>
            <h2>{list.title}</h2>
        </div>
    );
}

export default RetrieveSpecificData;