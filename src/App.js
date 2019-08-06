import React from 'react';
import './App.css';
import Nav from "./Components/navbar";
import Home from "./Components/home";
import Cart from "./Components/cart";
import Wishlist from "./Components/wishlist";
import Admin from "./Components/admin";
import './carousel.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this.state.productName=[]
  }

  AddInfo(info){
    let s = this.state.productName;
    s.push(info.productName);
    this.setState({
      productName:s
    })
    console.log(s);
  }

  render(){
    return (
      <React.Fragment>
        <Nav><h1>Trial</h1></Nav>
        <Link to="/Admin">Admin Side</Link>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Cart" render={()=><Cart AddInfo={this.AddInfo.bind(this)} s={this.state.productName}></Cart>}></Route>
        <Route path="/Wishlist" render={()=><Wishlist AddInfo={this.AddInfo.bind(this)} s={this.state.productName}></Wishlist>}></Route>
        <Route path="/Admin" render={()=><Admin AddInfo={this.AddInfo.bind(this)} s={this.state.productName}></Admin>}></Route>
        <h1>{this.state.productName.map((x)=>(<div>{x}</div>))}</h1>
      </React.Fragment>
    )
  }
}
export default App;
