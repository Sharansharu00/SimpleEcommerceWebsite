import React, { useContext } from "react"
import { ShopContext } from "../shopContext"
// import { Link, useNavigate } from "react-router-dom";
import Iphone from "../../../components/Iphone";
function CartItem(props){
    const {id,productName,price,productImg}=props.data
    const{cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext);
    // const navigate=useNavigate()
    return(<div className="cartItem">
      
         <img src={productImg} />
        <div className="description">
            <p>
              
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value ,id))}/>
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>)
}
export default CartItem