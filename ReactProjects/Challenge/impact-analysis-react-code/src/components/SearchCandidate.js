import React, {useState} from 'react';
import history from '../history';

function SearchCandidate({searchProps}) {
    const [name, setName] = useState('');
    const clearStates = () => {
        setName('');
        searchProps({
            searchedCandidateList: {},
            shortList: [],
            rejectList: []
        });
        history.push('/');
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
        </div>
    );
}

export default SearchCandidate;