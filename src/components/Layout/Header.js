import React from "react";
import "./header.css";
import {Sidebaar} from "../Sidebaar"
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';


export const Header = ( ) => {


    return(
        <>
        <Sidebaar />
       <div className="header-part"> 
                <div className="header_content">
                Home </div>

                
        
        <div className="bdg_notification">
                <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon />
                </Badge>
                <div className="avtar">  <Avatar /> </div>
                
             </div>
             </div>
        </>
    )
}