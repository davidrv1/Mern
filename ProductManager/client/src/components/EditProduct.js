import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const EditProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title:'',
        price:'0.01',
        description:'',
    })
    const [errors,  setErros] = useState({})
    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
        }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)//
        .then((res) => {
            console.log(res);
            navigate('/')
        })
        .catch((err) => {//if error..
            console.log(err.response.data.errors);//we console log the error.
            setErros(err.response.data.errors);//!come back to this
        })
    }
    return(
        <div>
            <form onSubmit={submitHanlder}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title}/> 
                    {
                        errors.title?
                        <p>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" onChange={changeHandler} value={product.price}/>
                    {
                        errors.price?
                        <p>{errors.price.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" onChange={changeHandler} value={product.description}/>
                    {
                        errors.description?
                        <p>{errors.description.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditProduct;