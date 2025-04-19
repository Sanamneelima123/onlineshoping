import React from "react";
import Navbar from "../../navbar/Navbar";
import Products from "../../products/Products";
import { allProducts } from "../../data";
import Footer from "../../footer/Footer";

const AllProducts = () => {
    // console.log(allProducts)
    return(
        <div>
            
            <Navbar/>

            <Products heading={"Products"} items={allProducts} />
            
            <Footer />

        </div>
    )
}

export default AllProducts;