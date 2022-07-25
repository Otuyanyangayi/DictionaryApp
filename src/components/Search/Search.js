import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import React from "react";
import "./Search.css";
import categories from "../../data/category";

function Search({setCategory, category, word, setWord}) {
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#000",
          },
          type: "dark",
        },
      });
  
  function handleChange1(e){
    setWord(e.target.value)
  }
  function handleChange2(e){
    setCategory(e.target.value)
    
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
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Search;
