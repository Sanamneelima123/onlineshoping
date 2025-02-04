import React from "react";
import Products from "./Products";
import { bestsellers } from "../data";

const Bestseller = () => {

    return(
        <Products items={bestsellers} heading="Best Sellers" />
    )
}

export default Bestseller;