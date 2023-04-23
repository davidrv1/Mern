import React from 'react';
import {useParams} from 'react-router-dom';

const Words = (props) => {
    const {word} = useParams()
    return (
        <div>
            <p>The word is {word}</p>
        </div>
    )
}

export default Words;