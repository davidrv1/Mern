import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import OnePet from './components/OnePet';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/CreatePet/form' element={<CreatePet/>}/>
          <Route path='/' element={<Display/>}/>
          <Route path="/onePet/:id" element={<OnePet />}></Route>
          <Route path="/editPet/:id" element={<EditPet />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;