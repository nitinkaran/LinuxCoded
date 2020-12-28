import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

const initialState = {    
    loading: true,
    data : [],
    error: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS' : return {
            loading: false,
            data: action.payload,
            error: ''
        }

        case 'FETCH_FAILURE' : return {
            loading: false,
            data: [],
            error: 'Something went wrong !!'
        }

        default : return state;
    }
}

function FetchingDataWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [show, showMethod] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_FAILURE'})
        })
    }, [])

    return (
        <div>
            <button onClick={ () => showMethod(!show) }>GET DATA</button>
            {show && <ul>
                { state.loading ? 'loading data...' : state.data.map(item => <li key={item.id}>{item.title}</li> )}
                { state.data.length === 0 ? state.error : null}
            </ul>}
        </div>
    );
}

export default FetchingDataWithUseReducer;