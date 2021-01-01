import React from 'react';

function Details(props) {
    const {details} = props;
    const {name, id, Image} = details;
    return (
        <div>
            {name}
        </div>
    );
}

export default Details;