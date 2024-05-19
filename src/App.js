import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';







function App() {
  return (
 <>
   <div className="header">
     <div className="App">
   <Navbar />
    </div>
   </div>
   <Home/>

 
 </>
  );
}

export default App;
