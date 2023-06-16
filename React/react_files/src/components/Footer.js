import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./headerfooter.css" ;

class Footer extends Component {
    render() { 
        return (
            <div>
                                <link rel="stylesheet" href="header_footer_sidebar.css"/>

                 <div className="footer">
      <div className="contain">       
        <div className="col">
          <h2>Site Info</h2>
            <ul>
              <li>Zello</li>
              <li> Apartments.com</li>
              <li>Deals</li>
              <Link to="/rentedunit"><li>Rented Units</li></Link>
              <Link to="/availableunit"><li>Available Units</li></Link>
            </ul>
        </div>
        <div className="col">
          <h2>More TO-DO</h2>
          <ul>
              <li>Partner with us</li>
              <li>Terms and Conditions</li>
              <li>Cookies and policies</li>
          </ul>
        </div>
        <div className="col">
          <h2>Contact</h2>
          <ul>
              <li>+91 9051 XXXXXX</li>
              <li>033 2464 XXXX</li>
              <li>abc@gmail.com</li>
          </ul>
        </div>
        <div className="col">
          <h2>Address </h2>
          <ul>
              <li>Sky Towers, Service Road, Kolkata</li>
          </ul>
        </div>
  
      </div>
    </div>
            </div>








        );
    }
}
 
export default Footer ;