import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const cart =props.cart;
    
    
    
    const totalPrice = cart.reduce((a,b)=>
    {  
        let c =a+(b.price* b.quantity)
        return c

    }
       
     ,0) 
    
const shipping= cart.reduce((a,b)=>
{  
    let c =a+b.shipping
    return c

}
   
 ,0) 


    return (


        <div>
            <h4>Order Summary</h4>
            <ui>

               { cart.map(item =><ul>{item.name}</ul>)}



            </ui>
            <h3>Items order : {cart.length}</h3>
            <p>Shipping : {shipping}</p>
            <h1> Price : $ {(totalPrice + shipping).toFixed(2)}</h1>
             <br/>
             {
                 props.children
             }
            
           
            
        </div>
    );
};

export default Cart;