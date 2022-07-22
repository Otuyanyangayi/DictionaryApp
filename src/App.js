import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        
      </Routes>
      

    </Router>
   
  );
}

export default App;
