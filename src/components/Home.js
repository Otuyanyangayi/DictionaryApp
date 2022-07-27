import React from "react";
import "./Home.css";
import Background from "../assets/Best-Reviewed-Books.jpeg"

function Home() {
  return (
    <div className="home"
      style={{
        backgroundImage: `url(${Background})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", 
        height:"auto",width:"100%"
      }}
    >
      <span className="span"> This is a simple reactjs Dictionary application that allows the user to search for 
            words and the get the meanings. It also includes the words pronnunsiation , 
            synonyms and antonyms. </span>
    </div>
  );
}

export default Home;
