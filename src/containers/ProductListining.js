import React from "react";
import { useSelector } from "react-redux";

const ProductListining = () => {
    const products= useSelector((state) => state);
    console.log(products);
    return(
    <div className="ui grid container">
        <h1>ProductListining</h1>
        </div>
        );
}

export default ProductListining;