import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResidentSidebar from '../resident/sidebar';

import { Link, redirect, useNavigate } from "react-router-dom";


import "./resident_dashboard.css" ;




function Resident_dashboard() {
    return (
        <Fragment>
            <div className="parent">
            <Header />
            <div className="main">
            <ResidentSidebar/>
            <div className="content">
            
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            
            <div className="grid-container-resident">
                   
                <div>
                        
                        <p><b>Swimming Pool Details</b></p> 
                       
                        <img border="0" alt="Sorry ! unavailable" src="images/pool.svg" style={{width: '60%'}} />
                        
                        <h6 >Mon-Sun </h6> 
                        <h6 >Morning: 06:00 AM to 12:00 AM </h6>
                        <h6 >Evening: 04:00 PM to 10:00 PM </h6>
                
                        <Link to="/PoolSubscription"><button href="about">Pool Subscription</button> </Link>
                </div>
                <div>
                        
                        <p><b>Tennis Court Details</b></p>
                        <img border="0" alt="Sorry ! unavailable" src="images/tennis.svg" style={{width: '60%'}}/>
                        <h6 >Mon-Sun </h6> 
                        <h6 >Morning: 06:00 AM to 12:00 AM </h6>
                        <h6 >Evening: 04:00 PM to 10:00 PM </h6>
                        <Link to="/TennisSubscription"><button href="about">Tennis Subscription</button>  </Link>
                </div>
                <div>
                        <p><b>Garden Timings</b></p>
                        <img border="0" alt="Sorry ! unavailable" src="images/garden.svg" style={{width: '60%'}}/>
                        <h6 >Open All Times </h6> 
                        
                </div>
                <div>
                        <p><b>Walking Trail Timings</b></p>
                        <img border="0" alt="Sorry ! unavailable" src="images/walkingtrails.svg" style={{width: '60%'}}/>
                        <h6 >Open All Times </h6>     
                </div>
                
                </div>
                </div>
                </div>
           
           
           <Footer />
           </div>
        </Fragment>
    )
}

export default Resident_dashboard;