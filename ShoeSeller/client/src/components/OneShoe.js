import React, {useEffect, useState} from 'react'; 
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const OneShoe = (props) => {
    const navigate = useNavigate();
    const [allShoes, setAllShoes] = useState([])
    const [shoe, setShoe] = useState({})//object bc it just returns one thing and not an array bc it doesnt return many things
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneShoe/${id}`)
        .then((res) => {//if succesfull..
            console.log(res.data);
            setShoe(res.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
    },[])
    const deleteHanlder = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteShoe/${id}`)
            .then((res) => {//if succesful..
                console.log(res);
                const updatedShoeList = allShoes.filter((shoe) => shoe._id !== id)
                setAllShoes(updatedShoeList)
                navigate('/')
            })
            .catch((err) => {//if error..
                console.log(err);
            })
    }
    return(
        <div>
            <h1>Name: {shoe.name}</h1> 
            <h2>Size: {shoe.shoeSize}</h2>
            <h2>Price: ${shoe.price} </h2>
            <Link to={`/updateShoe/${shoe._id}`}>Edit</Link>
            <button onClick={() => deleteHanlder(shoe._id)}>Delete</button>
        </div>
    )
}

export default OneShoe;