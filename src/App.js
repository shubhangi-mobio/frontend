import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import {SignIn} from "./containers/SignIn";
import {Sidebaar} from "./components/Sidebaar"
import {SidebaarData} from "./components/Sidebaardata"
import {Header} from "./components/Layout/Header";
import {Footer} from "./components/Layout/Footer";
import {ForgotPassword} from "./containers/ForgotPassword"
import {Profile} from "./components/Profile";
import { ResetPassword } from './containers/ResetPassword';
import {Searchbaar} from "./components/Searchbaar";
// import {User} from "./components/User";
import Protected from "./protected"

function App() {


  return (
    <>
   
      {/* <BrowserRouter> */}
        <Routes> 
          <Route path="/" element={<SignIn />}  />
          <Route path="/sidebar" element={<Sidebaar/>} />
          <Route path="/sidebar" element={<SidebaarData/>} />
          <Route path="/header" element={<Header />} />
          <Route path="footer" element={<Footer /> } />
          <Route path="/password-reset" element={<ResetPassword/>} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/searchbar" element={<Searchbaar />} />
          <Route path="/profile" element={<Protected Components={Profile} />} />
          {/* <Route path="/user" element={<Protected Components={User} />} /> */}
         

         </Routes>
      {/* </BrowserRouter> */}
     
      
    </> 
  );
}

export default App;
