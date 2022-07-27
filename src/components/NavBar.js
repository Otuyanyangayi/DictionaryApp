import React from "react";
import { Link } from "react-router-dom";

 function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/DictionaryApp/home">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DictionaryApp/search">SEARCH</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DictionaryApp/contacts">CONTACTS</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar