
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
                  item.definitions.map((def) => (
                    <div
                      className="singleMean" style={{backgroundColor : "white", color: "black"}}>
                      <b>{def.definition}</b>
                      <hr style={{ backgroundColor: "black", width: "100%" }} />
                      {def.example && (
                        <span>
                          <b>Example :</b> {def.example}
                        </span>
                      )}
                      { def.synonyms && (
                        <span>
                          <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                        </span>
                      )}
                      {def.antonyms && (
                        <span>
                          <b>Antonyms :</b> {def.antonyms.map((a) => `${a}, `)} 
                        </span>
                      )}
                    </div>
                  ))
                )
              )                
               
            )}   
        </div>
    )
}

export default Definitions