import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [pokemonCard, setPokemonCard] = useState([])

  
  return (
    <div className="App">
      <Form pokemonCard={pokemonCard} setPokemonCard={setPokemonCard}/>
      <Display pokemonCard={pokemonCard}/>
    </div>
  );
}

export default App;
