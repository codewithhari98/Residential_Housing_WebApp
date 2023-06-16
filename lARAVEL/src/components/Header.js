import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Switch, Route,useNavigate } from "react-router-dom";
import ContactUs from "../prelogin/contact"


import "./headerfooter.css" ;
export const Header =() =>{
  let navigate = useNavigate();

        return (
          <div>
                <link rel="stylesheet" href="header_footer_sidebar.css"/>

            <nav>
            <a href="#" className="logo">Terrazas De Guacuco</a>
            <label for="toggle"><i className="material-icons">menu</i></label>
            <input type="checkbox" name="" id="toggle"/>
            <div className="menu">
              <ul>
                <li><Link to="/Posthome">HOME</Link></li>
                <li><Link to="/PostAboutus">ABOUT</Link></li>
                <li><Link to="/Postcontact">CONTACT</Link></li>
                <li><Link to="/Postservices">SERVICES</Link></li>
                <li><Link to={"http://sxg5271.uta.cloud/blog/"} target="_blank">BLOG</Link></li>
                <li onClick={() => navigate(-1)}>BACK</li>
                <li><Link to="/login">LOGOUT</Link></li>
              </ul>
            </div>
            
          </nav>
          
        </div>




        );
    }
 
export default Header ;