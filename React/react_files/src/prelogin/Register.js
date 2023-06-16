import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  './Register.css';
import PreloginHeader from '../prelogin/PreloginHeader';
import PreloginFooter from '../prelogin/PreloginFooter';

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <PreloginHeader></PreloginHeader>
                            <div className="main">

                                <div className ="content">
            <div class="mains">
            <form>
              <div class="containers">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            
                <button type="submit" class="registerbtn">Register</button>

                <p>Already have an account?<Link to="/login">Sign in</Link></p>
              </div>
            </form>
          </div>
          </div>  
            </div>
            <PreloginFooter/>                            </div>

            </div>

















        );
    }
}
 
export default Register ;