import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  './Home.css';
import PreloginHeader from '../prelogin/PreloginHeader';
import PreloginFooter from '../prelogin/PreloginFooter';


class Home extends Component {
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
            <div className="mains1">
            <h2 > Welcome To Terrazas De Guacuco</h2>
            <div className = "home-grid-container">                 
              <div>
                <p><b>Know More About Us</b></p>
                <Link to="/about">
                <img  border="0" alt="Sorry ! unavailable" src="images/know.png"/>
              </Link>
            </div>
              <div>
                <p><b>Services we Offer</b></p>
                <Link to="/services">
                <img  border="0" alt="Sorry ! unavailable" src="images/service.jpg"/>
            </Link>
            </div>
              <div>
                <p><b>Register</b></p>
                <Link to="/register">
                <img border="0" alt="Sorry ! unavailable" src="images/register.jpg"/>
                </Link>                  
            </div>
              <div>
                <p><b>Contact Us</b></p>
                <Link to="/contact">
                <img  border="0" alt="Sorry ! unavailable" src="images/contact.png"/>
              </Link>
            </div>
            </div>
            </div>
            </div>  
            
            </div>
            <PreloginFooter/>                            </div>

            </div>


        );
    }
}
 
export default Home;