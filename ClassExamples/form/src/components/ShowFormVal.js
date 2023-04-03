import React, {useState} from 'react';

const ShowFormVal = (props) => {

    // let bool = true;
    //boolean set to true.

    // console.log(props);
    const {showList, setShowList} = props //this line isnt necessary. simply avoids having to type out props.etc rather we can just call them by their key name. 
    const [show, setShow] = useState ({ //we create show and setshow, give them a title release year and genre and start them off empty and ready for inputs.
        title:'',
        releaseYear:1920,
        genre:'',
        watchedShow:false
    })

    const changeHandler = (e) => {
        if(e.target.type === 'checkbox'){
            setShow({...show, watchedShow: !show.watchedShow})
        }
        //we created a changeHandler to hanlde all the changes we make in our inputs.
        //we call the function in order to "handle". we call it within our inputs.
        // console.log('VALUE: ',e.target.value);
        // console.log('NAME: ',e.target.name);
        else{
        setShow({...show, [e.target.name]:e.target.value})
        }
        //in our inputs we call changeHanlder on change therefore upon an input being typed we grab all that is currently in show by name and give it that value.
        //so if we have hello in our space for title in input then our name is the title and the value is hello and we make that part of the info belonging to show.
    }

    const submitHandler = (e) => {
        //we created a submit handle that we can call on and we call on for submits.
        e.preventDefault()
        // console.log(`this is your new show ${JSON.stringify(show)}`);
        setShowList([...showList, show]) //this line grabs inputs for show and adds it into showList
        setShow({
            title:'',
            releaseYear:1920,
            genre:'',
            watchedShow:false
        }) 
        //PART 1 OF WHY SET SHOW/VALUE
        //including this setShow allows us to set our value back to what they originally were. blanks ready for inputs.
        //this is the first step in. the second step is to add a value to our input. 
    }


    return (
        <div>
            {/* {
                //ternary
                bool? // sets the question.
                //if true it'll display the p tag that says so.
                <p>Boolean var is true.</p>: //if (:) , or can be thought of as "else", false 
                //it'll display the p tag that says false
                <p>Boolean var is false.</p>
            } */}
            <form className='show-form' onSubmit = {submitHandler}>
                <h1>Add Your Favorite TV Show!</h1>

                <div>
                    <label htmlFor="title">Title:</label>
                    {/* //PART 2 OF WHY SET SHOW/VALUE */}
                    {/* //show.title is used here bc we ask for the title here and we're setting it back to a blank. */}
                    <input type="text" name="title" id="title" onChange={changeHandler} value={show.title}/> 
                    {
                        show.title.length > 0 && show.title.length < 3?
                        <p>Title must be at least 3 characters</p>:
                        null
                    }
                </div>

                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseYear" onChange={changeHandler}  value={show.releaseYear}/>
                    {
                        show.releaseYear < 1920?
                        <p>Release year must be at least 1920.</p>:
                        null
                    }
                </div>

                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler}  value={show.genre}/>
                    {
                        show.genre.length > 0 && show.genre.length < 3?
                        <p>Genre must be at least 3 characters.</p>:
                        null
                    }
                </div>
                <div>
                    <label>I've Watched This show</label>
                    <input type="checkbox" name="watchedShow" onClick={changeHandler} checked={show.watchedShow}/> {/* onChange could've worked here too. i  think  the name doesnt matter but ofc make it obvious and reasonable */}
                </div>
                <button>Add Show!</button>
            </form>
        </div>
    )
}
export default ShowFormVal;