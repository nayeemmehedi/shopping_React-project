import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../components/fakeData';
import Product from '../../First-Components/Product/Product';

const ProductDetail = () => {
    let { key } = useParams();
   const product= fakeData.find(pd=>pd.key===key)

    return (
        <div>
            <Product name={product} show={false}></Product>
        </div>
    );
};

export default ProductDetail;