import React, { useEffect, useState } from "react";

import Navbar from "./components/NavBar";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./components/Home";
import { Container, withStyles,Switch } from "@material-ui/core";
import Definitions from "./components/Definitions/Definitions";
import Search from "./components/Search/Search";
import Contacts from "./components/Contacts/Contacts";
import { grey } from "@material-ui/core/colors";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Background from "./assets/bg5.jpg"
import background from "./assets/diyanet_raporu_1-284ab72b.jpeg"




function App() {

  const [word, setWord] = useState("")
  
  const [meanings, setMeanings ] = useState([])
  const [category, setCategory] = useState("en")
  const [LightMode, setLightMode] = useState(true)
  
  

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked" : {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch)


  function fetchData(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}` )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.title!=="No Definitions Found"){
        setMeanings(data)
      }
      
    } ) 
   
   
  }

    // console.log(meanings)

  useEffect(
    fetchData, [word, category] // category
  )
  return (
    <div className="html" style={{ backgroundImage: LightMode ? `url(${Background})`: `url(${background})`,backgroundRepeat:"no-repeat"
    ,backgroundSize: "cover",height : "100vh" ,  color: LightMode ? "black" : "white" }}>
      
    <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height : "100vh" }} >
      
    <Router>
     
      <Navbar/>
      <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode 
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
      
      
      
      <Routes>
         
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/" element={<Navigate to="/" />} />
        <Route exact path="/search" element={<><Search category={category} setCategory={setCategory}
        word={word} setWord={setWord} LightMode={LightMode}/>
        {/*definitions will only render if there is something inside of the meanings */}
        {meanings && (<Definitions word={word} meanings={meanings}  LightMode={LightMode} category={category} 
        /> )} </>}> 
        
        </Route>
        
        <Route exact path ="/bookmarks" element={<Bookmarks  />}></Route>
        <Route exact path="/contacts" element={<Contacts/>}></Route>
        
        
      </Routes>
      

    </Router>

    </Container>
    </div>
   
  );
}

export default App;
