import React, { useEffect, useState } from 'react';
import fakeData from '../components/fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
import { Link } from 'react-router-dom';
import {addToDatabaseCart, getDatabaseCart} from  '../components/utilities/databaseManager'

const Shop = () => {
    const fakedata20 = fakeData.slice(0, 20)

    const [products, setProducts] = useState(fakedata20)

    const [cart,SetCart] = useState([])



    useEffect(()=>{

        const savedCart=getDatabaseCart()
        let productKey =Object.keys(savedCart)

        const newValues = productKey.map(product =>{

            const newProduct = fakeData.find(fk => fk.key === product)

            newProduct.quantity=savedCart[product]

            return newProduct

        })
        SetCart(newValues)




    },[])












    const handleAddproduct = (name) => {
          
        const productadded=name.key

         const sameproduct = cart.find(pd=>pd.key === productadded)

         let count =1
         let newcart

         if(sameproduct){
             count =sameproduct.quantity+1 

             sameproduct.quantity=count

             const others =cart.filter(pd=>pd.key !==productadded)
             newcart=[...others,sameproduct]
         }else{
             name.quantity=1
             newcart = [...cart,name]
         }

         

         SetCart(newcart)

        

         
         addToDatabaseCart(name.key,count)
        
    }
    



    return (
        <div>


            <div className="container">
                <div className="row row-cols-2">

                    <div className="col-8">
                        <p>products : {products.length}</p>

                        {
                            products.map(value => <Product show={true} handle={handleAddproduct} name={value}></Product>

                            )

                        }


                    </div>



                    <div className="col-4 ">
                        <div className="container">
                            <p>{cart.length}</p>
                            <Cart cart={cart}>

                            <Link to='/Reviews'><button className='btn btn-success'>review</button></Link>
                            </Cart>

                        </div>

                    </div>

                </div> 
            </div>


        </div>
    );
};

export default Shop;