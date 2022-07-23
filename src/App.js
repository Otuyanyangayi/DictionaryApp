import React, { useEffect } from "react";
import  Image  from "./Book.jpg";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";

const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries/en/plane" 
function App() {


  function fetchData(){
    fetch(DICTIONARY_API)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  useEffect(
    fetchData, []
  )
  return (
    <div  style={{ 
      backgroundImage: `url(${Image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain",
      height:600,width:600
    }}>
    <Router>
      <div>
      
        <Navbar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        
      </Routes>
      

    </Router>
    </div>
   
  );
}

export default App;
