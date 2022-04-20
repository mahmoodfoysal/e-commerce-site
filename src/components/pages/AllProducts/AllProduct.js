import React from 'react';
import './AllProduct.css';

const AllProduct = ({product}) => {
    const {seller, name, img, price, star, stock} = product;
    return (
        <div>
    <div className="col">
    <div className="card card-style">
      <img src={img} className="card-img-top image-height card-style" alt="Product_Image"/>
      <div className="card-body">
        <h5 title={name} className="card-title name-word-limit">{name}</h5>
        <hr />
        <p >Only {stock} available</p>
        <div className='d-flex justify-content-between'>
        <p >Seller: {seller}</p>
        <p >{star}</p>
        </div>
        
        <hr />
        <div className='d-flex justify-content-between'>
        <h6>${price}</h6>
        <button>Add to cart</button>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default AllProduct;