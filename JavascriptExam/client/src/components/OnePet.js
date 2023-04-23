import React, {useEffect, useState} from 'react'; 
import {useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './myStyles.css'

const OnePet = (props) => {
    const navigate = useNavigate();
    const [allPets, setAllPets] = useState([])
    const [pet, setPet] = useState({})//object bc it just returns one thing and not an array bc it doesnt return many things
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/onePet/${id}`)
        .then((res) => {//if succesfull..
            console.log(res.data);
            setPet(res.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
    },[])
    const adoptHanlder = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
            .then((res) => {//if succesful..
                console.log(res);
                const updatedPetList = allPets.filter((pet) => pet._id !== id)
                //
                setAllPets(updatedPetList)//
                navigate('/')
            })
            .catch((err) => {//if error..
                console.log(err);
            })
    }
    return(
        <div> 
            <Link to={'/'}>Back To Home</Link>
            <button className='adoptPet' onClick={() => adoptHanlder(pet._id)}>Adopt {pet.name}</button>
            <h1>Pet Shelter</h1>
            <h2>Details about: {pet.name}</h2>
            <div>
                <h2>Pet Type: {pet.type} </h2>
                <h2>Description: {pet.description}</h2>
                <h2>Skills: {pet.skillOne} {pet.skillTwo} {pet.skillThree}</h2>
            </div>
        </div>
    )
}

// const deleteHanlder = (id) => {
//     console.log(id);
//     axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
//         .then((res) => {//if succesful..
//             navigate('/')
//         })
//         .catch((err) => {//if error..
//             console.log(err);
//         })
// }

export default OnePet;