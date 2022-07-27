import React from "react";
import "./Home.css";
import Background from "../assets/Best-Reviewed-Books.jpeg"

function Home() {
  return (
    <div>
      
      <p className="span"> This is a simple reactjs Dictionary application that allows the user to search for 
            words and the get the meanings. It also includes the words pronunciation , 
            synonyms and antonyms. </p>
    
    <div className="home"
    
      style={{
        backgroundImage: `url(${Background})`, 
      }}
    >
      
    </div>
    </div>
  );
}

export default Home;
