import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>

      

    </Router>
   
  );
}

export default App;
