import { Difference } from "@mui/icons-material";
import React from "react";
import "./Definitions.css"

function Definitions({word, category, meanings }){
    return(
        <div className="meanings">
            
            {word === "" ? (
            <span className="subTitle"> Start by typing of word in Search</span>
            ) : (
               meanings.map((mean) => 
               mean.meanings.map((item) => 
                // map through definitions 
                item.definitions.map((def) => (
                    <div className="singleMean" style={{backgroundColor: "white", color: "black"}}>
                        <b>{def.definition}</b>
                        <hr style={{backgroundColor: "black" ,width: "100%"}}/>
                        {def.example &&(
                            <san>
                                <b>Example : </b>
                                {def.example}
                            </san>
                        )}
                        {def.synonyms && (
                            <san>
                            <b>Synonyms : </b>
                            {def.synonyms}
                        </san>
                        )}
                        {def.antonyms && (
                            <san>
                            <b>Antonyms : </b>
                            {def.antonyms}
                        </san>
                        )}

                    </div>
                ))

               ))
                // console.log(meaning)
               
            )}   
        </div>
    )
}

export default Definitions