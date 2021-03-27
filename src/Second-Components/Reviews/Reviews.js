import React, { useEffect, useState } from 'react';
import fakeData from '../../First-Components/components/fakeData'
import { getDatabaseCart,processOrder,removeFromDatabaseCart } from '../../First-Components/components/utilities/databaseManager';
import Cart from '../../First-Components/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
import image from '../../First-Components/components/images/giphy.gif'

const Reviews = () => {
    const [cart,setCart]=useState([])
    const [oderplace,setoder]=useState(false)

    const handleplaceoder=()=>{
        setCart([])
        setoder(true)
        processOrder()
    }






    const removeit =(value)=>{
        const newremove= cart.filter(product =>product.key!==value)

        setCart(newremove)

        removeFromDatabaseCart(value)

    }


    useEffect(()=>{

        const savedCart=getDatabaseCart()
        let productKey =Object.keys(savedCart)

        const newValues = productKey.map(product =>{

            const newProduct = fakeData.find(fk => fk.key === product)

            newProduct.quantity=savedCart[product]

            return newProduct

        })
        setCart(newValues)

    },[])

    
    let imageShow ;

    if(oderplace){

        imageShow = <img src={image} alt=""/>

    }

     

    return (

  <div className="container">

 
        <div class="row">
            <div class="col-sm-8 ">
                <h1>this is review </h1>
            
        
            {
                
                cart.map(pr =><ReviewItem removeit={removeit} nam={pr}></ReviewItem>)
                
            }
            
            {
                imageShow
            }
            </div>



            <div class="col-sm-4">
                
               <Cart cart={cart}> <Link> <button order onClick={handleplaceoder}>order placed</button>
               </Link></Cart>
              
                
            </div>

        </div>

        </div>
        
    );
};

export default Reviews;