import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./SingleProduct.css"

const SingleProduct = () => {

  const {id} = useParams();

  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ['red', 'orange', 'teal', 'green', 'black']
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorClick = (color) =>{
    setSelectedColor(color);
  }

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) =>{
    setSelectedSize(size);
  }

    return(
        <div key={product.id} className="singleProduct-container">
            <Navbar />
            <div className="singleProduct-wrapper">
                <div className="singleProduct-imageSection">
                    <img src={product.img} alt="" className="singleProduct-image" />
                </div>
                <div className="singleProduct-infoSection">
                    <h2 className="singleProduct-title">{product.title}</h2>
                    <p className="singleProduct-number">{product.price}</p>
                    <h4 className="singleProduct-description">Description</h4>
                    <p className="singleProduct-description">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quae dignissimos 
                        quod voluptatibus, voluptas, eaque quos quas quidem dolores commodi.
                    </p>
                    <div className="singleProduct-options">
                        <div className="colors-section">
                            <h4>Colors</h4>
                            <div className="colors">
                                {colors.map((color)=>{
                                    return(
                                        <div key={color} className="color-circle" style={{backgroundColor: color, outline: selectedColor === color ? `3px solid ${color}` : " " }} onClick={() => handleColorClick(color)}></div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="sizes-section">
                            <h4>Sizes</h4>
                            <div className="sizes">
                                {sizes.map((size)=>{
                                    return(
                                        <span key={size} style={{border: selectedSize === size ? "2px solid #ccc" : ""}} onClick={()=> handleSizeClick(size)}>{size}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="addToCart">
                        <button className="addToCart-button">Add To Cart </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleProduct;