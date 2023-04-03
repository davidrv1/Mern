import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axious from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    axious.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      //console.log(`RESPONSE: ${reponse}`);
      console.log('REPONSE');
      // console.log(response.data.results);
      setPokemon(response.data.results)//this is how it is saved in star wars characters
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div className="App">
      <h1>Axious Pokemon API!</h1>
      {
        pokemon.map((character,idx) => (
          <div key={idx}>
            <li>{character.name}</li>
          </div>
        ))
      }
    </div>
  );
}

export default App;
