import React, { useContext } from "react"
import { PRODUCTS } from "../../../product"
// import { Products } from "../products"
import { ShopContext } from "../shopContext"
import { useNavigate } from "react-router-dom"
import './cart.css'
import CartItem from "./cartItem"
function Cart() {
    const {cartItems,getTotalCartAmount}=useContext(ShopContext)
    const totalAmount=getTotalCartAmount()

    const navigate=useNavigate()
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((products)=>{
                    if(cartItems[products.id]!==0){
                        return <CartItem data={products}/>
                    }
                })}
            </div>
            {totalAmount>0 ?(
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={()=>navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>):(<h1 className="desc">Cart is Empty</h1>)}
        </div>
    )
   
}
export default Cart