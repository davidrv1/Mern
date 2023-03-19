import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div>
      <PersonCard 
      name={"David"}
      age={23}
      haircolor={"Black"}
      />
        <PersonCard 
      name={"Gisselle"}
      age={21}
      haircolor={"Dark Brown"}
      />
        <PersonCard 
      name={"Amaris"}
      age={7}
      haircolor={"Dark Brown"}
      />
    </div>
  );
}

export default App;
