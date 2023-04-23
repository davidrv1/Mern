import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom'

const EditPet = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState({
        name:'',
        type:'',
        description:'',
        skillOne:'',
        skillTwo:'',
        skillThree:''
    })
    const [errors,  setErros] = useState({})
    const changeHandler = (e) => {
        if(e.target.name === 'explicit'){//this is bc
            setPet({...pet, explicit: !pet.explicit})//we have a check box
        }else{
        setPet({...pet, [e.target.name]:e.target.value})//normally it woud've just been this line basically
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
        .then((res) => {
            setPet(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.put(`http://localhost:8000/api/updatePet/${id}`, pet)//
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
            <Link to={'/'}>Back To Home</Link>
            <h1>Pet Shelter</h1>
            <h2>Edit {pet.name} </h2>
            <form onSubmit={submitHanlder}>
                    <div className='fullHalf'>
                    <div className='leftHalf'>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" onChange={changeHandler}/> 
                            {
                                errors.name?
                                <p>{errors.name.message}</p>:
                                null
                            }
                        </div>
                        <div>
                            <label>Type:</label>
                            <input type="text" name="type" onChange={changeHandler}/>
                            {
                                errors.type?
                                <p>{errors.type.message}</p>:
                                null
                            }
                        </div>
                        <div>
                            <label>Description:</label>
                            <input type="text" name="description" onChange={changeHandler}/>
                            {
                                errors.description?
                                <p>{errors.description.message}</p>:
                                null
                            }
                        </div>
                    </div>
                    <div className='rightHalf'>
                        <p>Skills (Optional):</p>
                        <div>
                            <label>Skill 1:</label>
                            <input type="text" name="skillOne" onChange={changeHandler} value={pet.skillOne}/>
                        </div>
                        <div>
                            <label>Skill 2:</label>
                            <input type="text" name="skillTwo" onChange={changeHandler} value={pet.skillTwo}/>
                        </div>
                        <div>
                            <label>Skill 3:</label>
                            <input type="text" name="skillThree" onChange={changeHandler} value={pet.skillThree}/>
                        </div>
                    </div>
                    </div>
                    <button className='addPet'>Edit Pet</button>
            {/* <form onSubmit={submitHanlder}>
                <div>
                    <label>Pet:</label>
                    <input type="text" name="name" onChange={changeHandler} value={pet.name}/> 
                    {
                        errors.name?
                        <p>{errors.name.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Type:</label>
                    <input type="text" name="artist" onChange={changeHandler} value={pet.type}/>
                    {
                        errors.type?
                        <p>{errors.type.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" onChange={changeHandler} value={pet.description}/>
                    {
                        errors.description?
                        <p>{errors.description.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Skill 1:</label>
                    <input type="text" name="skillOne" onChange={changeHandler} value={pet.skillOne}/>
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type="text" name="skillTwo" onChange={changeHandler} value={pet.skillTwo}/>
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type="text" name="skillThree" onChange={changeHandler} value={pet.skillThree}/>
                </div> */}
            </form>
        </div>
    )
}

export default EditPet;