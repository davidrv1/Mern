import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import './myStyles.css'

const CreatePet = (props) => {
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
    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/newPet', pet)
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
            <div>
            <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
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
                    <button className='addPet'>Add Pet</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePet;