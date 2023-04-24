import axios from 'axios'; //install axios so we can implement it. install on client terminal
import {useEffect, useState} from 'react' //useEffect for our axios
import {Link} from 'react-router-dom' //link to create links

const Display = (props) => {
    const {tvShowList, setTvShowList} = props; //implementing the props passed through from app.js
    useEffect(() => {//this came from App.js but now that it is here we can delete it from app.js
        axios.get('http://localhost:8000/api/allShows') //we use useEffect to use our apis ability to grab all shows from code we created in server.
        .then((response) => {//if it followes through..
            console.log(response);
            setTvShowList(response.data.shows)// we set setTvShowList to "reponse.data.shows" which is the response which would be all shows if done correctly.
          //the response is found within response object which holds the data object which holds the shows object which has the response we're looking for of all shows.
          //this one has response.data.SHOWS bc we added a shows: "" for our all shows in our controllers. if we had not then there would be no need
        })
        .catch((err) => {//if error..
            console.log(err);
        })
        }, [])

    const deleteHanlder = (id) => {//handler used for deleting. id must be the same all throughout this handler like used below.
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteShow/${id}`)//we use axios to use our api route from server to grab the ability of deleting a show 
            .then((res) => {//if succesful..
                console.log(res);
                const updatedShowList = tvShowList.filter((show) => show._id !== id)
                //upatedShowList is set to equal the now filtered version of tvShowList that becomes all but the selected id.
                setTvShowList(updatedShowList)//we set all but the selected part of the new list
            })
            .catch((err) => {//if error..
                console.log(err);
            })
    }
    return (
        <div>
            <h2>All of our shows</h2>
            {
                tvShowList.map((show) => (//we map through our tvShowList which holds a list of all our shows. we map so that we can basically loop through the list to be able to display them.
                    <div key={show._id}> {/* ? forgot .. i think its to have all their own ids tied to them here as well.*/} 
                        <h2>Title: {show.title}</h2> 
                        {/* for every show show the title */}
                        <h2>Network: {show.network}</h2>
                        {/* for every show show the network */}
                        <h2>Genre: {show.genre}</h2>
                        {/* for every show show the genre */}
                        <Link to={`/viewShow/${show._id}`}>View</Link>
                        {/* this comes from app js since this is how we send the user  to  a diff page. the route for this action is in our app js and not our regular routes api folder */}
                        <br/>
                        <Link to={`/editShow/${show._id}`}>Edit</Link>
                        {/* comes from app.js which sends user to a the page to edit show. */}
                        <button onClick={() => deleteHanlder(show._id)}>Delete</button>
                        {/* we make an onclick for delete */}
                    </div>
                ))
            }

        </div>
    )
}

export default Display;
// we export display so we can import it in our app.js