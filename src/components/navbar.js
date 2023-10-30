import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
// import { PRODUCTS } from "../../../product"
import "./navbar.css";
import { ShopContext } from "../pages/shop/shopContext";
function Navbar() {
  const {totalItems} = useContext(ShopContext)
    // const [item, setItems] = useState(PRODUCTS);
    // const [input,setinput]=useState()
    // const update = (e) => {
    //     const data = e.target.value;
    
    //     const array = item.filter((val) => {
    //       if (val.includes()) {
    //         return val;
    //       }
    //     });
    //     setItems(array);
    //   };
  return (
    <div className="navbar">
      <div className="shopTitle">
        <Logo />
        <h1>Mart</h1>
      </div>
      <div className="links">
        <input text='type' className="input" />
        <Link to="/">Shop</Link>
        <Link to="/cart" className="cart"> <i class="fa-solid fa-cart-shopping"></i> <span className="span">{totalItems}</span></Link>
      </div>
    </div>
  );
}
export default Navbar;
