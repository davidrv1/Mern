import React, {useState} from 'react';
//OBJECT WAY

//this is another way to do the same. diff from Form.js and diff from what is show on the platform. this one is less code.
const FormAlt = (props) => {
    const [show, setShow] = useState ({
        title:'',
        releaseYear:1920,
        genre:''
    })
    //names in input are mandatory and they must match for this one to work!!!!

    const changeHandler = (e) => {
        // console.log(e.target);
        console.log('VALUE: ',e.target.value);
        console.log('NAME: ',e.target.name);
        //console loggin name and value shows you that they are the same output.
        //w that knowledge we can..
        setShow({...show, [e.target.name]:e.target.value})
        //the ...show is saying to involve everything that is currently within show.
        //key name match from within useState to input.
        //":" sets the value
        //we set it to e.target.value

    }
    return (
        <div>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" onChange={changeHandler}/>


                <label>Release Year:</label>
                <input type="number" name="releaseYear" onChange={changeHandler}/>


                <label>Title:</label>
                <input type="text" name="genre" onChange={changeHandler}/>
            </form>
        </div>
    )
}
export default FormAlt;