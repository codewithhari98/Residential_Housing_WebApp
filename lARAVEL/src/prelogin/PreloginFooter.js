import React, { Component } from 'react';
import "./Preloginheaderfooter.css" ;

class PreloginFooter extends Component {
    render() { 
        return (
            <div>

                 <div className="footer">
      <div className="contain">       
        <div className="col">
          <h2>Site Info</h2>
            <ul>
              <li>Zello</li>
              <li> Apartments.com</li>
              <li>Deals</li>
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
 
export default PreloginFooter ;