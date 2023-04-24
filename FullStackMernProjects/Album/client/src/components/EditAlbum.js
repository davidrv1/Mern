import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const EditAlbum = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState({
        albumName:'',
        artist:'',
        releaseYeare:'1920',
        genre:'',
        explicit:false //best to have them set as false
    })
    const [errors,  setErros] = useState({})
    const changeHandler = (e) => {
        if(e.target.name === 'explicit'){//this is bc
            setAlbum({...album, explicit: !album.explicit})//we have a check box
        }else{
        setAlbum({...album, [e.target.name]:e.target.value})//normally it woud've just been this line basically
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
        .then((res) => {
            setAlbum(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.put(`http://localhost:8000/api/updateAlbum/${id}`, album)//
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
                    <label>Album:</label>
                    <input type="text" name="albumName" onChange={changeHandler} value={album.albumName}/> 
                    {
                        errors.albumName?
                        <p>{errors.albumName.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="text" name="releaseYear" onChange={changeHandler} value={album.releaseYeare}/>
                    {
                        errors.releaseYear?
                        <p>{errors.releaseYear.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Artist:</label>
                    <input type="text" name="artist" onChange={changeHandler} value={album.artist}/>
                    {
                        errors.artist?
                        <p>{errors.artist.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <select name="genre" onChange={changeHandler} value={album.genre}>
                        <option value="selectGenre">Select Genre...</option>
                        <option value="Rock">Rock</option>
                        <option value="Rap">Rap</option>
                        <option value="RNB">RNB</option>
                        <option value="Other">Other</option>
                    </select>
                    {
                        errors.genre?
                        <p>{errors.genre.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Explicit:</label>
                    <input type="checkbox" name="explicit" onChange={changeHandler} value={album.explicit}/>
                    {
                        errors.explicit?
                        <p>{errors.explicit.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditAlbum;