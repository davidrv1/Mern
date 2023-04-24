import React, {useEffect, useState} from 'react'; 
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const OneProduct = (props) => {
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useState([])
    const [product, setProduct] = useState({})//object bc it just returns one thing and not an array bc it doesnt return many things
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res) => {//if succesfull..
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
    },[])
    const deleteHanlder = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {//if succesful..
                console.log(res);
                const updatedProductList = allProducts.filter((product) => product._id !== id)
                setAllProducts(updatedProductList)
                navigate('/')
            })
            .catch((err) => {//if error..
                console.log(err);
            })
    }
    return(
        <div>
            <h1>Title: {product.title}</h1> 
            <h2>Price: ${product.price} </h2>
            <h2>Description: {product.description}</h2>
            <Link to={`/updateProduct/${product._id}`}>Edit</Link>
            <button onClick={() => deleteHanlder(product._id)}>Delete</button>
        </div>
    )
}

export default OneProduct;