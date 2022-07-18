import React, { useState,useEffect } from "react";
import '../Assets/Styles/login.css'
import logo from "../Theme/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authSingIn } from "../Shared/validation";
import { BiShow, BiHide } from "react-icons/bi";
import {AiOutlineMail,AiOutlineLock} from "react-icons/ai";
import axios from "axios";
import { Footer } from "../components/Layout/Footer";

export const SignIn = () => {
  
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  
 
  useEffect(() => {
    let hasAuthAccessToken = localStorage.getItem("JWT_SECRET");
    if (hasAuthAccessToken) {
      navigate("/profile");
    }
  }, []);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  var regex =
    /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  const handleChange = (e) => {
    const newData = { ...values };
    newData[e.target.id] = e.target.value.trim().replace(regex, "");
    errors[e.target.id] = null;
    setValues(newData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicckeed");
    const errors = await authSingIn(values);
    setErrors(errors);
    if (errors === null) {
      setErrors({});
      try {
        const res = await axios.post("http://localhost:3003/api/user/login", {
          
          email: values.email,
          password: values.password,
        });
        setValues(res.data);
        
        const { token } = res.data;
        localStorage.setItem('JWT_SECRET', token, res.headers.authorization);

        
        if (res && res.status === 200) {
          return setTimeout(() => {
            navigate("/profile");
          }, 1000);
        } else {
          console.log("Invalid Credentials");
        }
        console.log(res);
        setValues(res);
      } catch (error) {
        let error_message = "Invalid Credentials";
      if (error.response && error.response.data && error.response.data.message) {
        error_message = error.response.data.message;
        console.error(error_message, {
          // position: toast.POSITION.TOP_RIGHT
        });
      }
    }
    }
  };

  return (
    <>
      <div className="profile_logo">
        <img src={logo} alt="" />
      </div>
      <div className="login">Login 
          </div> 
      <div className="ink-login">
      
      </div>
      
      <br /> <br/> <br /><br /><br/>
      
      <form className="form-data" onSubmit={handleSubmit}>
     

  <span className="error_message"> 
          {errors?.email && errors?.email } <br/>
          {  errors?.password && errors?.password } 
          
        </span>

      

        <div className="email">
          <AiOutlineMail size={26} className="icon_mail"/>
            <input 
              id="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Id"
              type="text"
             /> 
        </div>

          <div className="password">
               
          <AiOutlineLock size={28} className="icon_password"/>
         
            <input
              id="password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              type={passwordType}
            />
            <Link to="#" onClick={togglePassword}>
              {passwordType === "password" ? (
                <BiHide
                  className="hideicon"
                  size={25}
                  style={{ color: "#304659" }}
                />
              ) : (
                <BiShow
                  className="showicon"
                  size={25}
                  style={{ color: "#304659" }}
                />
              )}
            </Link>
          </div>
        
        <div>
          <input
            type="checkbox"
            className="checkbox"
            placeholder="Remember Me"
          />
          <label id="rememberMe">Remember me</label>

          <div className="fpwd">
            <Link
              style={{ textDecoration: "none", color: "#0F2A6F" }}
              to="/forgotpassword"
            >
              Forgot Your Password?
            </Link>
          </div>
        </div>

        <button
          className="btn"
          type="submit"
          //  onClick={handleSubmit}
          
        >
          Sign In
        </button>
      </form>
      <Footer />
    </>
  );
};
export default SignIn;
