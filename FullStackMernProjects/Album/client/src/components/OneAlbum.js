import React, {useEffect, useState} from 'react'; 
import {useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const OneAlbum = (props) => {
    const [album, setAlbum] = useState({})//object bc it just returns one thing and not an array bc it doesnt return many things
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
        .then((res) => {//if succesfull..
            console.log(res.data);
            setAlbum(res.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
    },[])
    return(
        <div>
            <h1>Album: {album.albumName}</h1> 
            <h2>Artist: {album.artist} </h2>
            <h2>Release Year: {album.releaseYear}</h2>
            <h2>Genre: {album.genre}</h2>
            <span>Explicit?</span>
                {
                album.explicit?
                <span>Yes</span>:
                <span>No</span>
                }
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

export default OneAlbum;