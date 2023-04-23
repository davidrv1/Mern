import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const EditShoe = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [shoe, setShoe] = useState({
        name:'',
        size:'',
        price:'0.01'
    })
    const [errors,  setErros] = useState({})
    const changeHandler = (e) => {
        setShoe({...shoe, [e.target.name]:e.target.value})
        }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneShoe/${id}`)
        .then((res) => {
            setShoe(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.put(`http://localhost:8000/api/updateShoe/${id}`, shoe)//
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
                    <label>Name:</label>
                    <input type="text" name="name" onChange={changeHandler} value={shoe.name}/> 
                    {
                        errors.name?
                        <p>{errors.name.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Size:</label>
                    <input type="text" name="shoeSize" onChange={changeHandler} value={shoe.shoeSize}/>
                    {
                        errors.shoeSize?
                        <p>{errors.shoeSize.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" onChange={changeHandler} value={shoe.price}/>
                    {
                        errors.price?
                        <p>{errors.price.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditShoe;