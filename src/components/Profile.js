import React,{useState} from 'react';
import {Header} from "./Header";
import {Link,useNavigate} from "react-router-dom";
import "./all.css";
import axios from "axios";
import { toast } from "react-toastify";
import { authReset } from "../Shared/validation";

export const Profile = () =>{
    const [visible,setVisible] = useState(false);
    // const [passwordType, setPasswordType] = useState("");
    // const [newPasswordType, setNewPasswordType] = useState("");
	// const [cnfPasswordType, setCnfPasswordType] = useState("password");
	const [values, setValues] = useState({
		password: '',
        newPassword: '',
		confirmPassword: '',
	});
  
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
                 const res = await axios.put("http://localhost:3000/api/user/password-change/:id", {
                     //  method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    // body: JSON.stringify(
                      // {
                        password: values.password,
                        newPassword: values.newPassword,
                        confirmPassword: values.confirmPassword
                  }
                  );
                  const { token } = res.data;
                  localStorage.setItem('JWT_SECRET',token,res.headers.authorization);
    
                //   localStorage.getItem('token', token,res.data.JWT_TOKEN);
    
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

    return(
        <> 
        
        <Header />
        
        
{visible ? <form className="form-edit-detail"> 
            <div className="basic_detail" > 
                Edit details 
            </div>  <hr/>
            <div className="edit_detail"> 
                <label >First name </label>
                <input type="text"  required />
                <label > Last name </label>
                <input type="text"  required />
                <label >Email </label> 
                <input type="text"  required />
                <div className="btn-edit"> 
                <button className='btn' type='submit'>Save </button></div>
            </div>
        </form> : 
        <form className="form-detail"> 
            <div className="basic_detail" > 
            Basic details 
            </div>
            <div className="edit"> 
            <Link to="#" onClick={()=>setVisible(true)}> Edit </Link>
          </div> 
          <hr />
        </form>
        }
        

        <form className="form-change_pwd" > 
            <div className="change_detail" > 
            Change password
            </div> <hr />
            <div className="chane_pwd"> 
                <img className='chng_pwd' src='https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png' alt="" />
               
                <input
                	id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Old Password"
                    
								/>

                <img className='chng_pwd' src='https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png' alt="" />
                <input 
                id="new_password"
                name="password"
                // value={values.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                
                />

                <img className='chng_pwd' src='https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png' alt="" />
                <input 
                id="confirm_password"
                name="password"
                // value={values.confirmPassword}
                onChange={handleChange}
                placeholder="New Password"
                 
                />

             

                <button className=' btn-reset' onClick={handleSubmit} type='submit' >Set as new password </button>
                
            </div>
            
        </form>
         </>
    )
}