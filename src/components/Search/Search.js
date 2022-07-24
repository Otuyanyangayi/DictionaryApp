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
  
  

  return (
    // valid jsx
    <div className="header">
      <span className="title">{word ? word : "Search Me!"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField 
          className="search"
          id="standard-basic" 
          label="Search a Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          helperText="Please enter your search word" />
          <TextField
           className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            helperText="Please choose your category" >
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
