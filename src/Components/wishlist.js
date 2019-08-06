import React from 'react';

function Wishlist(props){
    return (
        <div>
            <h1>Hello from wishlist</h1>
            <h1>{()=>this.props.productName}</h1>
        </div>    
    )
}

export default Wishlist;