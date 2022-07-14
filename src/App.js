import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import {SignIn} from "./components/SignIn";
import {Sidebaar} from "./components/Sidebaar"
import {SidebaarData} from "./components/SidebaarData";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ForgotPassword} from "./components/ForgotPassword"
import {Profile} from "./components/Profile";
import { ResetPassword } from './components/ResetPassword';
import {Searchbaar} from "./components/Searchbaar";
import {User} from "./components/User";

function App() {
  

	// const [isUserLoggedin, setUserLoggedIn] = useState(localStorage.getItem('token'));

	// const userAuthentication = () => {
	// 	setUserLoggedIn(!isUserLoggedin);
	// }

  return (
    <>
   
      {/* <BrowserRouter> */}
        <Routes> 
          <Route path="/" element={<SignIn/>} />
          <Route path="/sidebar" element={<Sidebaar/>} />
          <Route path="/sidebar" element={<SidebaarData/>} />
          <Route path="/header" element={<Header />} />
          <Route path="footer" element={<Footer /> } />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/searchbar" element={<Searchbaar />} />
          <Route path="/user" element={<User />} />
         </Routes>
      {/* </BrowserRouter> */}
      
    </> 
  );
}

export default App;
