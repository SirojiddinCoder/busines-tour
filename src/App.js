import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Tours from './Components/Tours';
import Viza from './Components/Viza';
import  About  from './Components/About';
import Location from './Components/Location';
import About2 from './Components/About2';
import Contacts from './Components/Contacts';

function App() {
  return (
    <>
        <Navbar />
        <Home/>
        <Tours />
        <Viza />
        <About />
        <About2 />    
        {/* <Location /> */}
        <Contacts />  
    </>
  );
}

export default App;
