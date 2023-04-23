import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
const Word = (props) => {
    const {color, id} = useParams()
    return (
        <div>
            <h2>Word Component</h2>
            <h3 style={{backgroundColor: color}}>You typed in the number {id}</h3>
        </div>
    )
}

export default Word;