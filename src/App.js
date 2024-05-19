import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Tours from './Components/Tours';





function App() {
  return (
    <>
        <Navbar />
        <Home/>
        <Tours />
    </>
  );
}

export default App;
