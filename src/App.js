import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Tours from './Components/Tours';
import Viza from './Components/Viza';
import  About  from './Components/About';

function App() {
  return (
    <>
        <Navbar />
        <Home/>
        <Tours />
        <Viza />
        <About />
    </>
  );
}

export default App;
