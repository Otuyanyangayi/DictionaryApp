import { TextField, createMuiTheme, ThemeProvider, MenuItem } from "@mui/material";
import React from "react";
import "./Search.css";
import category from "../../data/category";

function Search() {
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
  
  

  return (
    // valid jsx
    <div className="header">
      <span className="title">Search Me!</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Please select your currency" >
            {category.map((option) => (
              <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Search;
