import React from 'react';
import items from "../data.json"
import {SidebaarData} from "../components/SidebaarData";
import logo from "../Theme/images/Logo1.png"
import {useNavigate} from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "./all.css";
import {  toast } from "react-toastify";
import axios from "axios";


export const Sidebaar = () => {

   const navigate = useNavigate();

   const logoutHandle = async (e) => {
      e.preventDefault();
      console.log('clicckeed')
      localStorage.removeItem('token');
      navigate("/");
     
          //  try{
          //      const res = await axios.delete("http://localhost:3000/api/user/logout/:id", {
          // //         //  method: "POST",
          //         headers: {
          //           "Content-Type": "application/json",
          //         },
          //         // body: JSON.stringify(
          //           // {
                     
          //       }
          //       );
                
          //       console.log(res);
          //       if (res && res.status === 200) {
          //        return (
          //          setTimeout(() => {
          //            navigate("/");
          //          }, 1000)
          //        );
          //      } else {
          //        alert.error("Invalid Credentials");
          //      }
          //      console.log(res)
             
  
          // }catch(err){
          //     let error_message = "Invalid Credentials";
          //     if (err.response && err.response.data && err.response.data.message) {
          //       error_message = err.response.data.message;
          //     }
          //     toast.error(error_message);
            
          //  }
   
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
          {/* <Link
          style={{ textDecoration: "none", color: "red" }}
           to="/"> Logout </Link> */}
           <button className="btn_logout" onClick={logoutHandle}>Logout </button>
           </div> 
        </div>

      

       </>


    )
}
