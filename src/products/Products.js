import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Products.css";
import { useNavigate } from "react-router-dom";

function Products({ items = [], heading }) {

  const navigation = useNavigate();

 const handleDetails = (id) =>{
  navigation(`/products/${id}`);
 }

  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="product-container">
              <img src={item.img} alt={item.title} className="product-image" />
              <div className="product-desc">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <div className="product-info">
                <button className="icon">
                  <CiShoppingCart /> Add To Cart
                </button>
                <button className="icon" onClick={()=> handleDetails(item.id)}>
                  <CiSearch /> View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Products;
