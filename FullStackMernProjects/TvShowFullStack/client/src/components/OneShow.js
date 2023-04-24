import React, {useEffect, useState} from 'react'; //we import react, useeffect and usestate
import {useParams} from 'react-router-dom'//we use useParams
import axios from 'axios'//use axios, install to client if not done so already

const OneShow = (props) => {
    const [show, setShow] = useState({})//we get an object "{}" which is the specific show.
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{//we use axios
        axios.get(`http://localhost:8000/api/oneShow/${id}`)//we  use this route from our servers routes conencted to our api to use the ability to select one show.
        .then((res) => {//if succesfull..
            console.log(res.data.show);
            setShow(res.data.show)//setShow to res.data.show which would be the show if done correctly.
        })
        .catch((err) => {//if error..
            console.log(err);
        })
    },[])
    return(
        <div>
            {/* since it is just one show we are doing, we do not need to loop like we did for all shows but rather the below is suffice.*/}
            <h1>Title: {show.title}</h1> 
            {/* shows the title of the show */}
            <h2>Aired On: {show.network} in {show.releaseYear} </h2>
            {/* shows the releaseYear of the show */}
            <h2>Created By: {show.creator}</h2>
            {/* shows the creator of the show */}
            <h2>Genre: {show.genre}</h2>
            {/* shows the genre of the show */}
        </div>
    )
}

export default OneShow;