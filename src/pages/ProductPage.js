import React from "react";
import { useHistory } from "react-router-dom";
import './style.css'

const ProductPage = () => {
  const history = useHistory();

  const handleAddToCart = () => {
    history.push("/checkout");
  };

  return (
    <div className="product-page-container">
      <h1>Product Page</h1>
      <div className="product-list-container">
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h2>Product 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h2>Product 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h2>Product 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;