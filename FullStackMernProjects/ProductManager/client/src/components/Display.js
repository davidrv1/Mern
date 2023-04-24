import React, { useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = (props) => {
    const {allProducts, setAllProducts} = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((response) => {
            console.log(response);
            setAllProducts(response.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
        }, [])

    return (
        <div>
            {
                allProducts.map((product) => (
                    <div key={product._id}>
                        <Link to={`/oneProduct/${product._id}`}>{product.title}</Link> 
                    </div>
                ))
            }
        </div>
    )
}
export default Display;