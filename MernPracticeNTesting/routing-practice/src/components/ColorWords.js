import React from 'react';
import {useParams} from 'react-router-dom';

const ColorWords = (props) => {
    const {blue, red} = useParams()
    return(
        <div>
            <p style={{backgroundColor: blue, color:red}}>Hello</p>
        </div>
    )
}

export default ColorWords;