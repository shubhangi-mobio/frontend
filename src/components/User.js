import React from "react";
import {Searchbaar} from "./Searchbaar";
import {AiOutlineFilter,AiOutlineReload,AiOutlineColumnHeight,AiOutlineFullscreen} from "react-icons/ai";
import "./user.css";


export const User = () => {
    return(
        <> 
           <Searchbaar />
            <div className="user_container">
                <button className = "btn-btn-user"> All users</button>
                <button className = "btn-btn-user"> Merchants</button>
                <button className = "btn-btn-user"> Admin</button>

                <div className="user-filter"> 
                <button className = "btn-btn-user" > <AiOutlineFilter/> Filter</button> </div> 

                <div className="user-sort"> 
                <button className = "btn-btn-user"> Short by</button></div> 
               
                <div className="user-icon">
                    <AiOutlineReload size="20px" /> 
                    <AiOutlineColumnHeight size="20px" />
                    <AiOutlineFullscreen size="20px" /> 
                </div>

            </div>
            
        </>
    )
}