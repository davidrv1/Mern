import logo from './logo.svg';
//single page application.

import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';
import Form from './components/Form';

// const Home = (props) => {
//   return(
//     <div>
//       <h1 style={{color: "red"}}>
//         Home Component
//       </h1>
//       {/* w Link, as shown below, we can create link which can help us switch between components */}
//       {/* must also import Link as above. */}
//       <Link to={"/about"}>Go To About</Link>
//     </div>
//   )
// }
// const About = (props) => {
//   return(
//     <div>
//       <h1 style={{color: "blue"}}>
//         About Component
//       </h1>
//       <Link to={"/home"}>Go To Home</Link>
//     </div>
//   )
// }
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />} />
        {/* the line below route to const About. */}
          {/* <Route path="/" element={<About />} /> */}
        {/* the line below route to const Home. */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          {/* <Route path="/word/:color" element={<Word />} /> */}
          <Route path="/word/:color/:id" element={<Word />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
