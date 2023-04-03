import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import DisplayToDo from './components/DisplayToDo';
import {  useState } from 'react';

function App() {
  const[toDoList, setToDoList] = useState([])
  return (
    <div className="App">
      <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />
      <DisplayToDo toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
