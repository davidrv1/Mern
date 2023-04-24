import axios from 'axios'
import { useState} from 'react'
// import{useNavigate} from 'react-router-dom';

const CreateProduct = (props) => {
    // const navigate = useNavigate();
    const {allProducts, setAllProducts} = props;
    const [product, setProduct] = useState({
        title:'',
        price:'0.01',
        description:''
    })

    const [errors,  setErros] = useState({})
    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }
    const submitHanlder = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/newProduct', product)
        .then((res) => {
            setAllProducts([...allProducts, res.data]);
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
                    <h2>Product Manager</h2>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" onChange={changeHandler}/> 
                        {
                            errors.title?
                            <p>{errors.title.message}</p>:
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
                    <div>
                        <label>Description:</label>
                        <input type="text" name="description" onChange={changeHandler}/>
                        {
                            errors.description?
                            <p>{errors.description.message}</p>:
                            null
                        }
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreateProduct;