import { TextField, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./Search.css"

function Search(){

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });


    return(
        // valid jsx 
        <div className="header">
            <span className="title">Search Me!</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Standard" />
                </ThemeProvider>
                
            </div>
        </div>

    )
}

export default Search