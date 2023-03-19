import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <> 
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </>
  );
}
// the above could've been put inside a div. 
//instead of just <></> => <div></div>
// if we wanted to style it, like in html, we'd give it a class="" but instead here..
// we  would use className="". same thing, simply that class has a diff def here already. 
export default App;