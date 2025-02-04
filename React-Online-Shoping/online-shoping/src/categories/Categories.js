import React from "react";
import "./Categories.css";
import { categories } from "../data";

const Categories = () =>{

    return(
        <div className="categories-container">
            {categories.map((item) => {
                const {id, img, title} = item;
                return (
                    <div key={id} className="category-container">
                        <img src={img} alt="" />
                        <div className="category-info">
                            <h1>{title}</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Categories;