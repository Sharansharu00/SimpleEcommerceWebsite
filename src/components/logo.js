import React from "react";
import ImgLogo from "./logoshop.jpg"
import './logo.css'
// import "./navbar.css";
import { useNavigate } from "react-router-dom";
 const Logo = () => {
  const navigate=useNavigate()
  return <img src={ImgLogo} id="logo" alt="img" onClick={()=>navigate('/')} className="logo" />;
};

export default Logo