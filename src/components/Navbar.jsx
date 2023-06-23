import React from "react";

function Navbar(){

    return (
        <div className="navbar">
            <div className="logo">
                <h1 className="title">Pasta Sottile</h1>
                <img src='/src/assets/pizza.svg' width={50} height={50}/>
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