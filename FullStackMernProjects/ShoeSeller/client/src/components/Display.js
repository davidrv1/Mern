import React, { useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = (props) => {
    const {allShoes, setAllShoes} = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allShoes')
        .then((response) => {
            console.log(response);
            setAllShoes(response.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
        }, [])

    return (
        <div>
            {
                allShoes.map((shoe) => (
                    <div key={shoe._id}>
                        <Link to={`/oneShoe/${shoe._id}`}>{shoe.name}</Link> 
                    </div>
                ))
            }
        </div>
    )
}
export default Display;