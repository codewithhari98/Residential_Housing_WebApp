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
              <Link to="/cht"><li>cht skt</li></Link>


            </ul>
        </div>
        <div className="col">
          <h2>More TO-DO</h2>
          <ul>
          {/* <li>
          <iframe class="responsive-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.0919401874153!2d-96.91067638425885!3d33.237894680835325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c37f36a470ab3%3A0x5ea51fda3f1323fc!2sUnion%20Park%20Blvd%2C%20Little%20Elm%2C%20TX%2076227!5e0!3m2!1sen!2sus!4v1676345332719!5m2!1sen!2sus"
      style="border:0; float: left;" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      map</li> */}
          <Link to={"https://www.google.com/maps/dir//Union+Park+Blvd,+Little+Elm,+TX+76227/@33.2378992,-96.9106817,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x864c37f36a470ab3:0x5ea51fda3f1323fc!2m2!1d-96.9084877!2d33.2378947!3e0"}target="_blank"><li>Map</li></Link>
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