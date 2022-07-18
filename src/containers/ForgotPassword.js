import React,{useState} from 'react';
import '../Assets/Styles/forgotpassword.css'
import logo from "../Theme/images/logo.png";
import { Form, FormGroup, Input } from "reactstrap";
import {Link} from "react-router-dom";
import {Footer} from "../components/Layout/Footer";
import { authForgot } from "../Shared/validation";
import axios from "axios";

import { toast } from "react-toastify";

export const ForgotPassword = () => {

    const [values, setValues] = useState({
		email: '',
	});

	const [errors, setErrors] = useState({});

   
    const [visible,setVisible] = useState(false);



	var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

	const handleChange = (e) => {
		const newData = { ...values };
		newData[e.target.id] = e.target.value.trim().replace(regex, '');
		errors[e.target.id] = null;
		setValues(newData);
	}

	const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicckeed')
        const errors = await authForgot(values);
        setErrors(errors);
        
        if (errors === null) {
          setErrors({});
             try{
                 const res = await axios.post("http://localhost:3003/api/user/password-forgot",
                  {

                      email: values.email,
                  }
                  );
                  const { token } = res.data;
                  localStorage.setItem('JWT_SECRET',token,res.headers.authorization);
                  
                  setValues(res.data);
                  console.log(res.data);
                  if (res && res.status === 200) {
                    console.log(res.data);
                //    return (
                //      setTimeout(() => {
                //         navigate("/resetpassword");
                //      }, 500)
                //    );
                  } 
                else {
                   toast.error("Invalid Credentials for Email");
                 }
                 console.log(res)
                 setValues(res);

            }catch (error) {
              let error_message = "Invalid Credentials";
            if (error.response && error.response.data && error.response.data.message) {
              error_message = error.response.data.message;
              console.error(error_message, {
                // position: toast.POSITION.TOP_RIGHT
              });
              }
            }
		 }
	}


    return(
        <> 
    
        <div className="profile_logo">
            <img src={logo} alt=""  />
       </div> 
       <div className="login"> 
             Reset password 
       </div> 
       <div className='ink'>
        </div> 
        <br/> <br />

        <Form className="form-reset-data" 
        onSubmit={handleSubmit}
        >
             <div>
             {visible ? 
             <span className="error_message"> 
                {errors?.email && errors?.email} </span> : null}
                
                <FormGroup>
                <img className='vectorm' src='https://www.pngfind.com/pngs/m/56-568764_message-png-message-icon-png-white-transparent-png.png'  alt=""/>
            <Input
              id="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Id"
              type="text"
            />
          </FormGroup>
             </div>
             <button className='btn btn-reset' type='submit' onClick={()=>setVisible(true)}>Send password reset link</button>
         </Form>
        <div className='back'> 
            <Link 
            style={{ textDecoration: "none", color: "#0F2A6F" }}
            to="/"  > Back to login </Link>
           
        </div>
         <Footer />

         </>
    )
}

