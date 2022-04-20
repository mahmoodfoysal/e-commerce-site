import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllProducts(data)})
    }, [])
    return (
        <div className='mx-5 mt-5'>
            <h1 className='text-center mb-5'>Products</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    allProducts.map(product => <AllProduct
                    key={product.key}
                    product={product}
                    ></AllProduct>)
                }





</div>
        </div>
    );
};

export default AllProducts;