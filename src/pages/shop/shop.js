import React from "react"
import { PRODUCTS } from "../../product";
import { Products } from "./products";
import './shop.css';
function Shop() {
    return(
    <div className="shop">
            
            <div className="products">
            {PRODUCTS.map((product)=>
                <Products data={product}/>
            )}
            </div>
        </div>
    )
}
export default Shop