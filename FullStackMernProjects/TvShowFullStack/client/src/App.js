import './App.css';
import {useEffect, useState} from 'react'
//use  effect is necessary when involving api
//use state is used for storing data. we did not use it on this file.
import Display from './components/Display'; //imports/allows us to connect our Display file to this file.
import CreateShow from './components/CreateShow';//imports/allows us to connect our CreateShow file to this file.
import OneShow from './components/OneShow';//imports/allows us to connect our OneShow file to this file.
import EditShow from './components/EditShow';//imports/allows us to connect our EditShow file to this file.
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' //we use broswer router which holds our routes which has few specific routes that connect us to our files.

function App() {
  const [tvShowList, setTvShowList] = useState([]) //bc we have this here, we can also then implement to our files like we show on our route for Diplay.
  //when we use setTvShowList, you can think of it as a way to save it as TvShowList
  //empty array bc the data that is coming back is an array
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Welcome To Our TV Show App</h1>
      <Link to={'/createShow/form'}>Add your favorite show</Link> {/* creates a link that sends the user CreateShow */}
      <br />
      <Link to={'/'}>Home</Link> {/* creates a link that sends the user Display. as shown within routes, '/' is a route used to send to Display */}
        <Routes>
          <Route path='/' element={<Display tvShowList={tvShowList} setTvShowList={setTvShowList}/>}/> 
          {/* we this route is user it will send the user to Display which implement tvShowList and setTvShowList */}
          <Route path='/createShow/form' element={<CreateShow />}/>
          {/* when this route is used it sends the user to CreateShow */}
          <Route path='/viewShow/:id' element={<OneShow />}/>
          {/* when this route is used, it sends  the user to OneShow */}
          <Route path='/editShow/:id' element={<EditShow />}/>
          {/* when this route is used, it sends the user to EditShow */}
        </Routes>
        {/* bc we included tvshowlist and its set like we did in the above we can now also include them in the Display file. */}
      </BrowserRouter>
    </div>
  );
}

export default App;
