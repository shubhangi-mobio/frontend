import React,{useState} from 'react';
import "./all.css";
import logo from "../Theme/images/logo.png";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import { BiShow, BiHide } from "react-icons/bi";
import {Footer} from "./Footer";
import {useNavigate} from "react-router-dom";
import { authReset } from "../Shared/validation";
import { toast } from "react-toastify";
import { Form, FormGroup, Input} from "reactstrap";
import axios from "axios";

export const ResetPassword = () => {

  const [passwordType, setPasswordType] = useState("password");
  
	const [cnfPasswordType, setCnfPasswordType] = useState("password");
	const [values, setValues] = useState({
		password: '',
		confirmPassword: '',
	});
  const param = useParams();
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		window.scrollTo({ top: 0, behavior: 'smooth' })
	// 	}, 0)
	// }, []);

	const handleChange = (e) => {
		const newData = { ...values };
		newData[e.target.id] = e.target.value.trim().replace(regex, '');
		errors[e.target.id] = null;
		setValues(newData);
	}


	const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicckeed')
    const errors = await authReset(values);
    setErrors(errors);
    if (errors === null) {
      setErrors({});
         try{
             const res = await axios.put("http://localhost:3000/api/user/password-reset", {
        //         //  method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                // body: JSON.stringify(
                  // {
                    password: values.password,
                    confirmPassword: values.confirmPassword
              }
              );
          const queryParams = new URLSearchParams(window.location.search);
       const token = queryParams.get('token');
      console.log("token",window.location.search.split('?token=')[1]);

              setValues(res.data);
              console.log(res);
              if (res && res.status === 200) {
               return (
                 setTimeout(() => {
                   navigate("/");
                 }, 1000)
               );
             } else {
               toast.error("Invalid Credentials");
             }
             console.log(res)
             setValues(res);
        }catch(err){
            let error_message = "Invalid Credentials";
            if (err.response && err.response.data && err.response.data.message) {
              error_message = err.response.data.message;
            }
            toast.error(error_message);
          
         }
 }
}

    const togglePassword = () => {
        if (passwordType === "password") {
          setPasswordType("text");
          return;
        }
        setPasswordType("password");
      };

      const toggleCnfPassword = () => {
        if (cnfPasswordType === "password") {
          setCnfPasswordType("text")
          return;
        }
        setCnfPasswordType("password")
      }

    return(
        <> 
         <div className="profile_logo">
            <img src={logo} alt=""  />
       </div> 
       <div className="login"> 
             Set a new password
       </div> 
       <div className='ink_forgot'>
        </div>

        {/* <div className="error_message">  */}
        {errors?.newPassword && errors?.newPassword} <br/>
        {errors?.confirmPassword && errors?.confirmPassword} 	
        {/* </div> */}

        <Form className="form-reset-data" onSubmit={handleSubmit}>

        <img
              className="vectorp"
              src="https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png"
              alt=""
            />
             
              <div className="forgot_password">
             <Input
									id="password"
									name="password"
									autoComplete="off"
									value={values.password}
									onChange={handleChange}
									placeholder="New Password"
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

						<FormGroup>
							<div className="password">
          
              <Input
									id="confirmPassword"
									name="confirmPassword"
									autoComplete="off"
									value={values.confirmPassword}
									onChange={handleChange}
									placeholder="Repeat Password"
									type={cnfPasswordType}
								/>
                <Link to="#" onClick={toggleCnfPassword}>
									{cnfPasswordType === "password" ? <BiHide className="hideicon" size={25} style={{ color: "#304659" }} /> : <BiShow className="showicon" size={25} style={{ color: "#304659" }} />}
								</Link>
               
          </div>
          </FormGroup>
          <button className='btn btn-forgotpassword' type='submit'>Set as new password</button>
        </Form>

       <Footer />

        </>
    )
}