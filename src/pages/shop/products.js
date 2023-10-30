import React, { useContext } from "react";
import { ShopContext } from "./shopContext";
import { useNavigate } from "react-router-dom";

export const Products = (props) => {
  const { id, productName, price, productImg } = props.data;
  const {addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  const navigate=useNavigate()

  return (

    <div className="product">
      <img src={productImg }onClick={()=>{navigate('/iphone')}} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};