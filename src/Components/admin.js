import React from "react";
import App from "../App.js";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


function Admin(props){

    let productName;

    return (
        <div>
            <Link to="/">Go back</Link>
            <input type="text" placeholder="Product Name" onChange={(e)=>{productName=e.target.value}}></input>
            <button type="Submit" onClick={()=>props.AddInfo({productName})}>Use</button>
        </div>
    )
}

export default Admin;