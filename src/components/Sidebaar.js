import React from 'react';
import items from "../data.json"
import {SidebaarData} from "./Sidebaardata"
import logo from "../Theme/images/Logo1.png"
import {useNavigate} from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "./all.css";

export const Sidebaar = () => {

   const navigate = useNavigate();

   const logoutHandle = async (e) => {
      e.preventDefault();
      // console.log('clicckeed')
      localStorage.removeItem('JWT_SECRET');
      navigate("/");
  }
  

    return (
      <> 
      <div className="sidebar">
        <div className="logo"> 
           <img src={logo} alt="" />
        </div> 
        
          { items.map((item, index) => <SidebaarData key={index} item={item} />) }
          <div className="logout_border"> </div>
          <div className="logout"> 
         < AiOutlineLogout />
           <button className="btn_logout" onClick={logoutHandle}>Logout </button>
           </div> 
        </div>

      

       </>


    )
}