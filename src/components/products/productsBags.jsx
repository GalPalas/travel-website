import React from 'react';
import {useDispatch } from 'react-redux';
import { increment } from '../../actions';
import "./productsBags.css";

function ProductsBags({heading,data}) {
    const dispatch = useDispatch();
    return (
      <div className="products-container">
      <h1 className="product-heading">{heading}</h1>
      <div className="product-wrapper">
        {data.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <img className="product-img" src={product.img} alt={product.alt} />
              <div className="product-info">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.desc}</p>
                <h2 className="product-price">{product.price}</h2>
                <button className="product-button" onClick={() => dispatch(increment())}>{product.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default ProductsBags
