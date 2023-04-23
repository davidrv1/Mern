import axios from 'axios'
import { useState} from 'react'
// import{useNavigate} from 'react-router-dom';

const CreateShoe = (props) => {
    // const navigate = useNavigate();
    const {allShoes, setAllShoes} = props;
    const [shoe, setShoe] = useState({
        name:'',
        shoeSize:'3',
        price:'0.01'
    })

    const [errors,  setErros] = useState({})
    const changeHandler = (e) => {
        setShoe({...shoe, [e.target.name]:e.target.value})
    }
    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/newShoe', shoe)
        .then((res) => {
            setAllShoes([...allShoes, res.data]);
            console.log(res);
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErros(err.response.data.errors);
        })
    }

    return(
        <div>
            <div>
                <form onSubmit={submitHanlder}>
                    <h2>Shoe</h2>
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
                        <label>Size:</label>
                        <input type="text" name="shoeSize" onChange={changeHandler}/>
                        {
                            errors.shoeSize?
                            <p>{errors.shoeSize.message}</p>:
                            null
                        }
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="text" name="price" onChange={changeHandler}/>
                        {
                            errors.price?
                            <p>{errors.price.message}</p>:
                            null
                        }
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreateShoe;