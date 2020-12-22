import React from 'react';

function Persons({person}) {
    const { name, age, skill } = person;
    return (
        <div>
            <h3 >Person Name  : {name} | Person Age   : {age} | Person Skill : {skill}</h3>
        </div>
    );
}

export default Persons;