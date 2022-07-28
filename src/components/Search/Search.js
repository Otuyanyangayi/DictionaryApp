import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import React from "react";
import "./Search.css";
import categories from "../../data/category";


function Search({setCategory, category, word, setWord, LightMode}) {
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: LightMode ?"#000" : "#fff",
          },
          type: LightMode ? "#light" :  "dark",
        },
      });
  
  function handleChange1(e){
    setWord(e.target.value)
  }
  function handleChange2(e){
    setCategory(e.target.value)
    
  }
  function handleClick(event){        
    let name=event.target.getAttribute("data-name");
    let b={name:name};
    if(localStorage.getItem("bookmaks")){
      let items=localStorage.getItem("bookmaks");
      items=JSON.parse(items);
      items.bookmarks.push(b);
      localStorage.setItem("bookmaks",JSON.stringify(items)); 
      console.log(items.bookmarks);
    }
    else{
      let items='{"bookmarks":[]}';
      //items=JSON.stringify(items);
      localStorage.setItem("bookmaks",items);                  
     
      items=JSON.parse(JSON.stringify(items));
      console.log(items);
    }  
    
    // 

  }


  return (
    // valid jsx
    <div className="header">
      <span className="title">{word ? word : "Search Me!"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField  
          className="search" id="standard-basic" label="Search a Word" value={word} onChange={handleChange1}/>
          <TextField
          
           className="select" select label="Language" value={category} onChange={handleChange2} >
                
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            ))}
          </TextField>
          <button data-name={word} onClick={handleClick}>bookmark</button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Search;
