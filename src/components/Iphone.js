import React from "react";
import "./iphone.css";
import { useNavigate } from "react-router-dom";
// import Img from "./Iph.webp";

function Iphone() {
  const navigate=useNavigate()
  const iph = {
    id: 1,
    productName: "Iphone 14 pro Max",
    price: 800000,
    productImg: "./Iph.webp",
  };

  return (
    <>
      <div className="iphoneItems">
        <div>
          <img src={iph.productImg} className="iphImg"></img>
          <span className="spanX" onClick={()=>{navigate('/')}}>X</span>
        </div>
       
        <div className="iphtypes">
          <img src="./2iph.jpeg" />
          <img src="./5iph.png" />
          <img src="./3iph.jpeg" />
        </div>
        <h2>{iph.productName}</h2>
      </div>
      
    </>
  );
}
export default Iphone