import React from 'react';
import Persons from './Persons';

/**
 * Whenever we are rendering the list it is advisable that keep the JSX being returned 
 * to another file and then pass the props as attributes to the child component
 */

function Tutorial17() {
    const names = ['Bruce', 'Clark', 'Diana'];
    const namesList = names.map(name => <h2 key={name} >{name}</h2> );

    const persons = [
        { id: 1, name: 'Bruce', age: 23, skill: 'React' },
        { id: 2, name: 'Clark', age: 33, skill: 'Java' },
        { id: 3, name: 'Diana', age: 43, skill: 'Vue' },
        { id: 4, name: 'Bill', age: 41, skill: 'Angular' }
    ];
    // const personsList = persons.map(person => <Persons person={person} />);

    return (
        <div>
            {namesList}
            {persons.map((person, index) => <Persons key={index} person={person} />)}
        </div>
    );
}

export default Tutorial17;
