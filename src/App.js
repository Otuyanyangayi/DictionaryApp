import React, { useEffect, useState } from "react";
import  Image  from "./Book.jpg";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import { Container } from "@material-ui/core";
import Definitions from "./components/Definitions/Definitions";
import Search from "./components/Search/Search";
import Contacts from "./components/Contacts/Contacts";


function App() {

  const [word, setWord] = useState("")
  
  const [meanings, setMeanings ] = useState([])
  const [category, setCategory] = useState("en")


  function fetchData(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}` )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMeanings(data)
    })
  }

  console.log(meanings)

  useEffect(
    fetchData, [word] // category
  )
  return (
    <div style={{height : "100vh" , backgroundColor: "#6495ED", backgroundImage: {Image} }}>
      
    <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height : "100vh" }}>
      
    <Router>
     
      <Navbar/>
      
      
      
      
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/search" element={<><Search category={category} setCategory={setCategory}
        word={word} setWord={setWord}/><Definitions/></>}></Route>
        
        <Route exact path="/contacts" element={<Contacts/>}></Route>
        
        
      </Routes>
      

    </Router>

    </Container>
    </div>
   
  );
}

export default App;
