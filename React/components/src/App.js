
import './App.css';
import Person from './components/Person';
import Shoe from './components/Shoe';

function App() {
  return (
    <div className="App">
      <Person
        name={"David"}
        seankerHeadLevel={9}
        yearsBeingSH="Broke My Scale"
      />
      <Shoe 
        title={"Air Force"}
        desc={"All With The White Check"} 
        cost={95.99} /> 
      <Shoe 
        title={"Jordan 9"} 
        desc={"Underated Shoe"} 
        cost={149.99} />
      </div>
  )
}

export default App;
