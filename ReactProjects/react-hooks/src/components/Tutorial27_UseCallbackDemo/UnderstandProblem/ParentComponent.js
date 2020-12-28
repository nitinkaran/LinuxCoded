import React, {useState} from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(115000);

    const handleAge = () => {
        setAge(prevAge => prevAge + 1);
    }

    const handleSalary = () => {
        setSalary(prevSalary => prevSalary + 10000);
    }

    return (
        <div>
            <Title />
            <Count value={age}>Age is : </Count>
            {/* <h1>Age is : {age}</h1> */}
            <Button handleClick={handleAge}>Increment Age </Button>
            <Count value={salary}>Salary is : </Count>
            <Button handleClick={handleSalary} >Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;