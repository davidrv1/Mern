import React, {useState} from 'react';


//this is the alternate way to do it. this one is different than shown in the platform
const Form = (props) => {
    const [title, setTitle] = useState("")
    const [releaseYear, setReleaseYear] = useState(1920)
    const [genre, setGenre] = useState("")

    const handleTitle = (event) =>{
        setTitle(event.target.value)
        //on the console, every time something is created it is an event. that is where the event comes from.
        // the within the even, you can locate target which is where target comes from. within target, you can locate value (what we typed in)
        //which is where value comes from.
        //therefore, we are setting title to what is present in that event. in this case, what we type in, or in other words, on change. 


    }
        const handleReleaseYear = (event) => {
            setReleaseYear(event.target.value)
        }

        const handleGenre = (event) => {
            setGenre(event.target.value)
        }
    return (
        <div>
            <form>
                <label htmlFor="title">Title:</label>
                {/* htmlFor ties to the id of the input */}
                <input type="text" name="title" id="title" onChange={handleTitle}/>
                {/* no parameters are required here because react naturally passes it in for us. */}
                {/* though, it is important to know that nothing would break 
                if we did not have an htmlFor or the id in input just as done below */}


                <label>Release Year:</label>
                <input type="number" name="releaseYear" onChange={handleReleaseYear}/>
                {/* what is IMPORTANT though rather than the id is the NAME in input. */}

                <label>Title:</label>
                <input type="text" name="genre" onChange={handleGenre}/>
            </form>
        </div>
    )
}

export default Form;