import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    
    const {img,name,category,price,stock,key,shipping}=props.name
    
    
    return (
        <div>
            <div class="card" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">

                    <p class="card-text">Name: <Link to={'/product/'+key}>{name}</Link>  </p>
                    <p class="card-text">Category:  {category}</p>
                    <p class="card-text">Price:  {price}</p>
                    <p class="card-text">Shipping:  {shipping}</p>
                    <p class="card-text">Stock  {stock}</p>
                    {props.show && <button type="button" onClick={()=>props.handle(props.name)} class="btn btn-success">Click Here</button>}
                </div>
            </div>

        </div>
    );
};

export default Product;