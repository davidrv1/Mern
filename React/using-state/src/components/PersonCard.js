import React, { useState } from 'react';

const PersonCard = (props) => {
    // const [ inAmount, setInAmount ] = useState(0);
    const [ age, setAge ] = useState( props.age );
    return (
        <div className="PersonCard">
            <h2>{ props.name }</h2>
            <p> Age: { age }</p>
            <p> Hair Color: {props.haircolor}</p>
            <div className="buttons">
                <button onClick={ (event) => setAge(age + 1)}> Birthday Button for { props.name} </button>
            </div>
        </div>
    )
};

export default PersonCard; 