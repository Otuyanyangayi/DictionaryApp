
import React, {  useEffect, useState } from "react";
import "./Bookmarks.css"


// deletes the bookmarks from the array.
function deleteBookmark(e) {
    let k=e.target.getAttribute('data-key');
    let items=localStorage.getItem("bookmaks");
    items=JSON.parse(items);
    items.bookmarks.splice(k, 1);
    localStorage.setItem("bookmaks",JSON.stringify(items)); 
    console.log(items.bookmarks);
    window.location.reload();
}

function Bookmarks(){
    const [bookmarks, setBookmarks] = useState([])
    
function getBookmarks() {
    let items=localStorage.getItem("bookmaks");
    items=JSON.parse(items);
    console.log(items)
        setBookmarks(items.bookmarks);

    }

    useEffect(
        getBookmarks, []
    )
    return(
        <div className="bookmarks">
            <h3>Bookmarks</h3>
            <a href="/#/search">Add Bookmark</a>
           <table className="table table-striped" border="1" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
           {bookmarks.map((b,index) => (
              <tr      key={b.name}>
                <td>{b.name}</td>
                <td><button onClick={deleteBookmark} data-key={index}>Delete</button></td>
              </tr>
            ))}
            </tbody>
            </table>               
        </div>
    )
}

export default Bookmarks