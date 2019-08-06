import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

function Nav(){
    return (
        <div>
            <div id="navbar">
                <span className="branding">Logo</span>

                <span className="nav-mid">
                   <button>Men</button>
                   <button>Women</button>
                   <button>Kids</button>     
                </span>
                
                <span className="nav-right">
                   <Link to="/Wishlist"><button>Wishlist</button></Link>
                   <Link to="/Cart"><button>Cart</button></Link>
                   <button>Login</button>
                </span>
            </div>
        </div>
    )
}

export default Nav;