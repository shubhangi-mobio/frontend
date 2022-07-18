import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Protected = (props) => {
    const { Components } = props;
    const navigate = useNavigate();
  
    useEffect(() => {
      let hasAuthAccessToken = localStorage.getItem("JWT_SECRET");
      if (!hasAuthAccessToken) {
        navigate("/");
      }
    }, []);
  
  return (
    <div>
        <Components/>
    </div>
  )
}

export default Protected