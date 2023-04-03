import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Words from './components/Words';
import ColorWords from './components/ColorWords';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/number/:id" element={<Number />}/>
          <Route path="/words/:word" element={<Words />}/>
          <Route path="/hello/:blue/:red" element={<ColorWords />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
