import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./Preloginheaderfooter.css" ;

class  PreloginHeader extends Component {
    render() { 
        return (
          <div>
            <nav>
            <a href="#" className="logo">Terrazas De Guacuco</a>
            <label for="toggle"><i className="material-icons">menu</i></label>
            <input type="checkbox" name="" id="toggle"/>
            <div className="menu">
              <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to={"http://sxg5271.uta.cloud/blog/"} target="_blank">BLOG</Link></li>
                <li><Link to="/login">LOGIN/ SIGNUP</Link></li>

              </ul>
            </div>
            
          </nav>
          
        </div>




        );
    }
}
 
export default PreloginHeader ;