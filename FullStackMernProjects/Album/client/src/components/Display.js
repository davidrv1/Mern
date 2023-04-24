import axios from 'axios'; 
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Display = (props) => {
    const [allAlbums, setAllAlbums] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
        .then((response) => {
            console.log(response);
            setAllAlbums(response.data)
        })
        .catch((err) => {//if error..
            console.log(err);
        })
        }, [])
        const deleteHanlder = (id) => {
            console.log(id);
            axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
                .then((res) => {//if succesful..
                    console.log(res);
                    const updatedProductList = allProducts.filter((product) => product._id !== id)
                    //
                    setAllProducts(updatedProductList)//
                })
                .catch((err) => {//if error..
                    console.log(err);
                })
        }
    return (
        <div>
            {
                allAlbums.map((album) => (
                    <div key={album._id}>
                        <h2>Album: {album.albumName}</h2> 
                        <h2>Artist: {album.artist}</h2>
                        <h2>Release Year: {album.releaseYear}</h2>
                        <h2>Genre: {album.genre}</h2>
                        <span>Explicit?</span>
                        {
                            album.explicit?
                            <span> Yes</span>:
                            <span> No</span>
                        }
                        <br />
                        <Link to={`/oneAlbum/${album._id}`}>View</Link>
                        <br/>
                        <Link to={`/editAlbum/${album._id}`}>Edit</Link>
                        <button onClick={() => deleteHanlder(album._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;
// we export display so we can import it in our app.js