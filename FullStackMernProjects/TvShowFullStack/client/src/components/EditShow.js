import React, {useState, useEffect} from 'react'; //react, useState, and useEffect, to be implemented on this file.
import axios from 'axios'//implement axios, install if not already installed.
import {useNavigate, useParams} from 'react-router-dom'//implelemnt useNavigate, useParams
const EditShow = (props) => {
    const navigate = useNavigate();//identifies that navigate will be used to refer to useNavigate() to do the navigating action
    const {id} = useParams() //identifies that {id} will  be used to refer to useParams and performs useParams
    const [show, setShow] = useState({//we identify our getters and setters using show, and setshow and we use useState to identify all props within an object and start them off as an empty string.
        title:'',//title is identified and set to an empty string
        releaseYear:1920,//releaseYear is identified and set to an empty string
        network:'', //network is identified and set to an empty string
        creator:'', //creator is identified and set to an empty string 
        genre:'' //genre is identified and set to an empty string
    })
    const [errors, setErros] = useState({})
    //we will be adding erros. so we create getters(error) and setters(setErrors). and we set useSet to be an empty object
    
    const changeHandler = (e) => {//we create a changeHandler event
        setShow({...show, [e.target.name]:e.target.value}) //upon the event taking action, we say that we setshow, so we grab all within show (...show) and set them to their input 
        //based off their e.target.name and value
    }

    useEffect(() => {//seems to be used when we will use a setter?
                //.get is replaceable. it always depends on what we are doing. in this case it is get  because we are getting a specific 
        axios.get(`http://localhost:8000/api/oneShow/${id}`)//we use axios.get to retrieve our api route from server found within routes that get grab one specific show.
        .then((res) => {//if succesful.. 
            console.log(res.data.show);
            setShow(res.data.show)//we use setShow to set the selected show to the result(res.data.show) which would be the selected show
        })
        .catch((err) => {//if there is an error..
            console.log(err);
            setErros(err.response.data.errors);//we set the error, using setErrors to equal err.response.data.errors which would be the error
        })
    }, [])

    const submitHanlder = (e) => {
        e.preventDefault();
                //.put is replaceable. it always depends on what we are doing. in this case it is put because we are updating
        axios.put(`http://localhost:8000/api/updateShow/${id}`, show)//we use axios to grab a the api route of updateShow which has the ability  to update show
        .then((res) => {//if succesful
            console.log(res);
            navigate('/')//nagivate to the  display page. the '/' comes from app.js which holds the  routes thatll  send user to pages. '/' is a route used to send users to the display page
        })
        .catch((err) => {//if there is an error..
            console.log(err)
            setErros(err.response.data.errors)
        })
    }
    return (
        <div>
            <h2>Edit Show</h2>
            <form onSubmit={submitHanlder}>
                {/* on submit we activate the submit hanlder */}
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={show.title}/>
                    {/* on change, the input for title works with changehanlder which does what changehalder aquires it too */}
                    {/* the value makes it so that when a show is selected for editing, what you wish to edit is already there. */}
                    {
                        errors.title? //is there an error on the title?
                        //if so present the error message for title
                        <p>{errors.title.message}</p>: //':' performs as an else
                        null //if no error present nothing/do nothing
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="text" name="releaseYear" onChange={changeHandler}  value={show.releaseYear}/>
                    {
                        errors.releaseYear?//is there an error on the releaseYear?
                        //if so present the error message for releaseYear
                        <p>{errors.releaseYear.message}</p>: //':' performs as an else
                        null //if no error present nothing/do nothing
                    }
                </div>
                <div>
                    <label>Network:</label>
                    <input type="text" name="network" onChange={changeHandler}  value={show.network}/>
                    {
                        errors.network?//is there an error on the network?
                        //if so present the error message for network
                        <p>{errors.network.message}</p>: //':' performs as an else
                        null //if no error present nothing/do nothing
                    }
                </div>
                <div>
                    <label>Creator:</label>
                    <input type="text" name="creator" onChange={changeHandler}  value={show.creator}/>
                    {/* value is necessary so that page is pre populated with what you wish to edit */}
                    {
                        errors.creator?//is there an error on the creator?
                        //if so present the error message for message
                        <p>{errors.creator.message}</p>: //':' performs as an else
                        null //if no error present nothing/do nothing
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler}  value={show.genre}/>
                    {
                        errors.genre?//is there an error on the genre?
                        //if so present the error message for genre
                        <p>{errors.genre.message}</p>: //':' performs as an else
                        null //if no error present nothing/do nothing
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditShow;