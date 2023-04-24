import React, {useState} from 'react';//implement react and useState
import axios from 'axios'//implement axios
import {useNavigate} from 'react-router-dom'//useNavigate will be implemented

const CreateShow = (props) => {//not sure how to explain this line but all the within pertains to creating a show feature.
    const navigate = useNavigate();//naviagte is used so that we can direct the user to our page upon an action.
    const [show, setShow] = useState({//we saved in an object all the below settings them to empty strings excpet for release Year we cans starting at 1920.
        title:'',
        releaseYear:1920,
        network:'',
        creator:'',
        genre:''
    })
    const [errors,  setErros] = useState({})//we will implement errors so we create a setter and getter for them. our useState is an empty object bc what we will recieve, our errors, are objects.
    const changeHandler = (e) => {//changeHanlder function. //used to set the inputs to be set to what we ask
        setShow({...show, [e.target.name]:e.target.value})//when the changeHandler is activated we use setShow to set the show, all within the show to be the input and accept it through it e.target.name/value.
    }

    const submitHanlder = (e) => {//we usesubmitHanlder function //used for catching erros when someothing is not function or to simply submit if everything is done correctly.
        e.preventDefault(); //forgot how to explain this line
        axios.post('http://localhost:8000/api/newShow', show)//through axios we use our api created route to grab the aiblity to create a new show
        .then((res) => {//if succesful..
            console.log(res);
            navigate('/') //nagivate, or send user to, Display. this '/' came from our app.js. an existing route set to send us to our display page.
        })
        .catch((err) => {//if error..
            console.log(err.response.data.errors);//we console log the error.
            setErros(err.response.data.errors);//!come back to this
        })
    }
    return(
        <div>
            <form onSubmit={submitHanlder}>{/* upon submitting, we activate our submitHanlder. if successfull it'll lead to next response with no if done incorrectly error will be present. */}
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler}/> 
                    {/* on change, we activate our change handler which sets the input to be set to our title */}
                    {
                        errors.title?//is there errors on our title? can be thought of as the if
                        //if there are errors display the below
                        <p>{errors.title.message}</p>://the ':' is the else in this case
                        //if there are no errors then display null which is nothing no action
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="text" name="releaseYear" onChange={changeHandler}/>
                    {/* on change, we activate our change handler which sets the input to be set to our releaseYear */}
                    {
                        errors.releaseYear?//is there errors on our releaseYear? can be thought of as the if
                        //if there are errors display the below
                        <p>{errors.releaseYear.message}</p>://the ':' is the else in this case
                        //if there are no errors then display null which is nothing no action
                        null
                    }
                </div>
                <div>
                    <label>Network:</label>
                    <input type="text" name="network" onChange={changeHandler}/>
                    {/* on change, we activate our change handler which sets the input to be set to our network */}
                    {
                        errors.network?//is there errors on our network? can be thought of as the if
                        //the ':' is the else in this case
                        <p>{errors.network.message}</p>://the ':' is the else in this case
                        //if there are no errors then display null which is nothing no action
                        null
                    }
                </div>
                <div>
                    <label>Creator:</label>
                    <input type="text" name="creator" onChange={changeHandler}/>
                    {/* on change, we activate our change handler which sets the input to be set to our creator */}
                    {
                        errors.creator?//is there errors on our creator? can be thought of as the if
                        <p>{errors.creator.message}</p>://the ':' is the else in this case
                        //if there are no errors then display null which is nothing no action
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler}/>
                    {/* on change, we activate our change handler which sets the input to be set to our genre */}
                    {
                        errors.genre?//is there errors on our genre? can be thought of as the if
                        <p>{errors.genre.message}</p>://the ':' is the else in this case
                        //if there are no errors then display null which is nothing no action
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateShow;