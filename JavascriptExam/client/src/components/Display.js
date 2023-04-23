
import axios from 'axios'; 
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './myStyles.css'

const Display = (props) => {
    const [allPets, setAllPets] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
        .then((response) => {
            console.log(response);
            setAllPets(response.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
        }, [])
    return (
        <div>
            <Link to={'/CreatePet/form'} className="homeLink">Add A Pet To The Shelter</Link>
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home</h2>
            {
                allPets.map((pet) => (
                    <div key={pet.type}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name:</th>
                                    <th>Type:</th>
                                    <th>Actions:</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/onePet/${pet._id}`}>Details</Link> <Link to={`/editPet/${pet._id}`}>Edit</Link> </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }
        </div>

        // <div>
        //         <h1>Pet Shelter</h1>
        //         <h2>These pets are looking for a good home</h2>
        //         {
        //             allPets.map((pet) => (
        //                 <div key={pet._id}>

        //                     <h3>Pet: {pet.name}</h3> 
        //                     {/* <p>Type: {pet.type}</p>
        //                     <p>Skiils (Optional):  {pet.skillOne}</p> */}
        //                     <Link to={`/onePet/${pet._id}`}>Details</Link>
        //                     <br/>
        //                     <Link to={`/editPet/${pet._id}`}>Edit</Link>
        //                 </div>
        //             ))
        //         }
        //     </div>
    )
}

export default Display;