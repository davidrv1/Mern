import React from 'react';

const Shoe = (props) => {
    return (
        <div className="shoe">
            <h2>{ props.title }</h2> <br/>
            <p> Description: <br/>
                {props.desc}
            </p>
            <p> Cost: <br/> 
            {props.cost}
            </p>
        </div>
    )
}

export default Shoe;