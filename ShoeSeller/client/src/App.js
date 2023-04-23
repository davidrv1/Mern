import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import OneShoe from './components/OneShoe';
import Main from './views/Main';
import EditShoe from './components/EditShoe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="/oneShoe/:id" element={<OneShoe />}/>
          <Route path="/updateShoe/:id" element={<EditShoe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;