import React, { Component } from 'react';
import  './Services.css';
import PreloginHeader from '../prelogin/PreloginHeader';
import PreloginFooter from '../prelogin/PreloginFooter';


class Services extends Component {
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
            <div className = "main_ser">
          <h2>Terrazas de Guacuco: more than just a roof, it's a lifestyle</h2><br />
            <p>At Terrazas de Guacuco, we are dedicated to providing our residents with a superior living experience. That's why we offer a wide range of services and amenities to meet the needs and wants of our residents. From the moment you step into an Terrazas de Guacuco home, you will feel the difference.</p><br/>
            <div class = "services-grid-container">
              <div>   
                <br/>
            <img className="service-imgs" src="images/pic1.jpg" alt="" />
              <p><span><a className="nulla">Fitness Centers, Swimming Pools, Community Spaces</a></span><br /></p>
                <br />
                <span styles="line-height:5px;">Fitness Centers: Our state-of-the-art fitness centers are equipped with the latest exercise equipment, including treadmills, ellipticals, free weights, and more. Whether you are a seasoned fitness enthusiast or just starting out, our fitness centers have everything you need to get in shape and stay healthy. And with flexible hours, you can exercise whenever it's convenient for you. </span><br />
                <br />
                <span styles="line-height:5px;">Swimming Pools: Our sparkling swimming pools are the perfect place to relax and soak up the sun. Take a dip, cool off, or just lounge poolside with friends and family. Our pools are surrounded by spacious sundecks and shaded areas, making them the perfect place to spend a summer day. </span><br />
                <br />
                <span styles="line-height:5px;">Community Spaces: At Terrazas de Guacuco, we believe that community is key. That's why we have designed our communities to include a range of community spaces, where residents can gather and socialize. Whether you're looking for a place to host a party, meet new friends, or just relax, our community spaces have you covered. </span><br />
                <br />
              </div>
              <div>
                <br/>
                <img className="service-imgs" src="images/pic2.jpg" alt="" />
              <p><span><a className="nulla">On-Site Management</a></span><br /></p>
                <br />
               <span styles="line-height:5px;">On-Site Management: Our experienced on-site management team is always on hand to assist you with any questions or concerns you may have. Whether you need help with a maintenance issue, have a question about your home, or just want to chat, our team is always there to help. <br/> <br/> At Terrazas de Guacuco, we believe that everyone deserves a home that they can be proud of, and we are committed to making that a reality for our residents. From our top-of-the-line amenities, to our dedicated on-site management and maintenance teams, we have everything you need to feel at home, every day. Experience the Terrazas de Guacuco lifestyle for yourself, and discover why our residents love calling Terrazas de Guacuco home.</span> 
                <br />
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
 
export default Services ;