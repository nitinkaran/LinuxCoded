import React, {useState, useCallback} from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(115000);

    const handleAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const handleSalary = useCallback(() => {
        setSalary(salary + 10000);
    }, [salary]);

    return (
        <div>
            <br /><br /><br />
            <Title />
            <Count value={age}>Age is : </Count>
            <Button handleClick={handleAge}>Increment Age </Button>
            <Count value={salary}>Salary is : </Count>
            <Button handleClick={handleSalary} >Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;