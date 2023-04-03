import React, { useState } from 'react';
import './DisplayToDo.css'

const DisplayToDo = (props) => {
    
    const {toDoList, setToDoList} = props

    const toggleToDo = (toDo) => {
        const updatedToDoList = toDoList.map((myToDo) => {
            if(myToDo === toDo){
                myToDo.toDoComplete = !myToDo.toDoComplete
            }
            return myToDo
        })
        setToDoList(updatedToDoList)
    }

    const deleteHandler = (toDo) => {
        const updatedToDoList = toDoList.filter((myToDo) => myToDo !== toDo)
        setToDoList(updatedToDoList)
    }

    return(
        <div className='container-aToDo'>
            {
                toDoList.map((toDo, idx) => (
                    <div className='flex-toDo' key={idx}>
                        {
                            toDo.toDoComplete?
                            <p className='line-through'>{toDo.aToDo}</p>:
                            <p>{toDo.aToDo}</p>
                        }
                        <input type="checkbox" name="toDoComplete" 
                        checked={toDo.toDoComplete} onClick={() => toggleToDo(toDo)}/>
                        <button className='delete-button' onClick={() => deleteHandler(toDo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayToDo;