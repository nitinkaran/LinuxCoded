import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function SearchCandidate({searchProps}) {
    const [name, setName] = useState('');
    let history = useHistory();
    const clearStates = () => {
        setName('');
        searchProps({searchedCandidateList: {}})
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by candidate name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <button onClick={()=> searchProps({searchedCandidate: name})}>Search</button>
            <button onClick={clearStates}>Clear</button>

            {/* <br />
            <button onClick={()=> showSelectedList(searchProps)}>Show Select List</button>
            <br />
            <button onClick={}>Show Reject List</button> */}
        </div>
    );
}

export default SearchCandidate;