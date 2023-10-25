import React from 'react';
import catTest from './pages/catTest.jpg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Redirect, 
} from "react-router-dom"; 
import Art from './pages/Art';
import Home from './pages/Home';

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/art' element={<Art />} />
          </Routes>
        </Router>
  );
}

export default App;
