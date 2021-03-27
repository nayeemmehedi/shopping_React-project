import React from 'react';

const ReviewItem = (props) => {
     const stylesname={border:'1px solid black',margin:"10px", padding:'10px'}
    
    const {name,quantity,img,price,key}=props.nam
    return (
        <div style={stylesname}>
            <h1>This is review item </h1>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h3>{key}</h3>
            <h4>price : {price}</h4>
            <h3>Quantity:  {quantity}</h3>
            <button onClick={()=>props.removeit(key)}>Remove Item</button>

        </div>
    );
};

export default ReviewItem;