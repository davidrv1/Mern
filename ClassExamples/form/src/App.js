import logo from './logo.svg';
import './App.css';
// import Form from './components/Form';
// import FormAlt from './components/FormAlt';
import ShowFormVal from './components/ShowFormVal'
import { useState } from 'react'; //imported bc we use useState within this file.
import DisplayShows from './components/DisplayShows';



function App() {
  const[showList, setShowList] = useState([]) //this line exists bc it creates a place to store the data. also done here  so that more than  one file can use it.
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <FormAlt /> */}
    <ShowFormVal showList={showList} setShowList={setShowList}/> {/* we pass this information down as props */}
    <DisplayShows showList={showList} setShowList={setShowList}/>
    </div>
  );
}

export default App;
