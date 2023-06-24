import React from "react";

function Navbar(){

    return (
        <div className="navbar">
            
            <div className="logo">
                <h1>Pasta Sottile</h1>
            </div>
            <div className="items">
                <a className="navbar-item" href="#">Products</a>
                <a className="navbar-item" href="#">Ratings</a>
                <a className="navbar-item" href="#">About us</a>
            </div>
        </div>
    )
    
}

export default Navbar