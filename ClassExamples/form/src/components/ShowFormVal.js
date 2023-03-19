import React, {useState} from 'react';

const ShowFormVal = (props) => {

    // let bool = true;
    //boolean set to true.

    const [show, setShow] = useState ({
        title:'',
        releaseYear:1920,
        genre:''
    })

    const changeHandler = (e) => {

        console.log('VALUE: ',e.target.value);
        console.log('NAME: ',e.target.name);
        setShow({...show, [e.target.name]:e.target.value})

    }
    return (
        <div>
            <h1>Add Your Favorite TV Show!</h1>
            {/* {
                //ternary
                bool? // sets the question.
                //if true it'll display the p tag that says so.
                <p>Boolean var is true.</p>: //if (:) , or can be thought of as "else", false 
                //it'll display the p tag that says false
                <p>Boolean var is false.</p>
            } */}
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" onChange={changeHandler}/>
                {
                    show.title.length < 3?
                    <p>Title must be at least 3 characters</p>:
                    null
                }

                <label>Release Year:</label>
                <input type="number" name="releaseYear" onChange={changeHandler}/>
                {
                    show.releaseYear < 1920?
                    <p>Release year must be at least 1920.</p>:
                    null
                }


                <label>Genre:</label>
                <input type="text" name="genre" onChange={changeHandler}/>
                {
                    show.genre.length < 3?
                    <p>Genre must be at least 3 characters.</p>:
                    null
                }
            </form>
        </div>
    )
}
export default ShowFormVal;