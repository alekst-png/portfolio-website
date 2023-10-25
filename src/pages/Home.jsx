import React from "react"; 
// importing Link from react-router-dom to navigate to  
// different end points. 
import { Link } from "react-router-dom"; 
import catTest from './catTest.jpg';
  
const Home = () => { 
  return ( 
    <div className="App">
    <header className="App-header">
    <h1>
        Alexander's Portfolio
    </h1>
    <img src={catTest} className="App-logo" alt="cat logo" />
    <p>
      Software Engineering Portfolio
    </p>
    <p>
      <Link to="/art">Digital and Traditional Art Portfolio</Link> 
    </p>
    </header>
  </div>
  ); 
}; 
  
export default Home; 
