import React from 'react';

const Person = (props) => {
    return (
        <div className="Person">
            <h2>{ props.name }</h2> <br/>
            <p> 1-10:<br/>
                { props.seankerHeadLevel}
            </p>
            <p> Cost: <br/> 
                {props.yearsBeingSH}
            </p>
        </div>
    )
}

// const Person = (props) => {
//     return (
//         <div className="person">
//             <Connection firstName={"Kevin"} lastName={"Smith"} randName={"Harley"}/>
//         </div>
//     )
// }

// const Connection = (props) => {
//     return(
//         <div>
//             <p>Hello! My name is { props.firstName } { props.lastName }</p>
//             <p>{props.firstName}</p>
//             <p>{props.randName}</p>
//         </div>
//     )
// };

// let connection = Person(props);
// console.log("Connection: ", connection);

export default Person;