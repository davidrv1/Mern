import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateAlbum from './components/CreateAlbum';
import OneAlbum from './components/OneAlbum';
import EditAlbum from './components/EditAlbum';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/CreateAlbum/form' element={<CreatePet/>}/>
          <Route path='/' element={<Display/>}/>
          <Route path="/oneAlbum/:id" element={<OnePet />}></Route>
          <Route path="/editAlbum/:id" element={<EditPet />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
