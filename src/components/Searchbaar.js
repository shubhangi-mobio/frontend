import React from "react";
import {Header} from "./Header";
import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineUserAdd } from "react-icons/ai";


export const Searchbaar = () => {
    return(
        <>
        <Header />
        
        <div className="search_container"> 
       
              <div className = "searchbaar">
                   <input type="text" name="search" id="search"
                   placeholder = 'Search user' />
                  
                    </div>

                <div className = "search_icon" >
                    <SearchIcon id="search"/>
                   
                    </div>
                        <button className = "btn-add-btn" 
                        > <AiOutlineUserAdd />  Add user </button>   
        </div> 
       
        
       </>  
    )
}

