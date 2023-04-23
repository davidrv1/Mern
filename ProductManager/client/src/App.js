import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import OneProduct from './components/OneProduct';
import Main from './views/Main';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="/oneProduct/:id" element={<OneProduct />}/>
          <Route path="/updateProduct/:id" element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;