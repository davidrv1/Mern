import {useState, useEffect} from 'react'
import axious from 'axios'
import './App.css';

function App() {
  const [starWarsCharacters, setStarWarsCharacters] = useState([])//this line is to save the result. we know its an array because when we look at out "results:" in the console on browser is states that it is an Array(10) meaning there 10 items in it.
  useEffect(() => {
    axious.get('https://swapi.dev/api/people/')
    .then((response) => {
      //console.log(`RESPONSE: ${reponse}`);
      console.log('REPONSE');
      // console.log(response.data.results);
      setStarWarsCharacters(response.data.results)//this is how it is saved in star wars characters
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <h1>Using the Star Wars API!</h1>
      <a href="https://swapi.dev/" target='_blank'>Click here to view the <b>swapi</b> documention</a>
      {
        starWarsCharacters.map((character,idx) => (
          <div key={idx}>
            <h2>Name: {character.name} </h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
