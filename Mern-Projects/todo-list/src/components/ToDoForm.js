import React, {useState} from 'react'
import './ToDoForm.css'

const ToDoForm = (props) => {

    const {toDoList, setToDoList} = props
    const [toDo, setToDo] = useState({
        aToDo:'',
        toDoComplete:false
    })

    const changeHandler = (e) => {
        setToDo({toDo, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setToDoList([...toDoList, toDo])
        setToDo({
            aToDo:''
        })
    }

    return (
        <div>
            <form className='show-form' onSubmit = {submitHandler}>
                <div>
                    <input type="text" name="aToDo" id="aToDo" onChange={changeHandler} value={toDo.aToDo}/>
                </div>
                <button className='add-button'>Add</button>
            </form>
        </div>
    )
}

export default ToDoForm;