import React, { useEffect, useState } from "react";
import  Image  from "./Book.jpg";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import { Container } from "@material-ui/core";
import { color } from "@mui/system";
import Search from "./components/Search/Search";
import Contacts from "./components/Contacts/Contacts";

const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries/en/good" 
function App() {

  const [word, setWord] = useState("")
  
  const [meanings, setMeanings ] = useState([])


  function fetchData(){
    fetch(DICTIONARY_API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMeanings(data)
    })
  }

  console.log(meanings)

  useEffect(
    fetchData, []
  )
  return (
    <div style={{height : "100vh" , backgroundColor: "#6495ED" }}>
      
    <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height : "100vh" }}>
      
    <Router>
     
      <Navbar/>
      
      
      
      
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
        <Route exact path="/contacts" element={<Contacts/>}></Route>
        
        
      </Routes>
      

    </Router>

    </Container>
    </div>
   
  );
}

export default App;
