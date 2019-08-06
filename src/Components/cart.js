import React from 'react';

function Cart(props){
    return (
        <div>
            <h1>Hello from cart</h1>
            <h1>{()=>this.props.productName}</h1>
        </div>    
    )
}

export default Cart;