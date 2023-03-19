import React, { useState } from 'react';

const PersonCard = (props) => {
    // const [ inAmount, setInAmount ] = useState(0);
    const [ inAmount, setInAmount ] = useState( props.age );
    return (
        <div className="PersonCard">
            <h2>{ props.name }</h2>
            <p> Age: { inAmount }</p>
            <p> Hair Color: {props.haircolor}</p>
            <div className="buttons">
                <button onClick={ (event) => setInAmount(inAmount + 1)}> Birthday Button for { props.name} </button>
            </div>
        </div>
    )
};

export default PersonCard; 