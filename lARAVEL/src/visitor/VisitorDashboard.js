// Goyani Shivani Bipinbhai -- 1001995271
// Ashwanthika Umasankar  -- 1001854976
// Hariharan Prakash --  1001852001
// Pranava Avuthu -- 1002037533
// Usha Chandana Reddy Parne --1001964976

import React, { Component } from 'react';
import "./VisitorDashboard.css";

import Header from '../components/Header';
import Footer from '../components/Footer';
import VisitorSidebar from '../visitor/VisitorSidebar';
import { Link } from "react-router-dom";


class VisitorDashboard extends Component {
  state = {}
  render() {
    return (
      <div>
        <link rel="stylesheet" href="headerfooter.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="parent">
          <Header></Header>
          <div className="main">
            <VisitorSidebar></VisitorSidebar>
            <div className="content">
              <form>
                <table className='Dashboardgrid-container'>
                  <tr>
                    <p styles="font-size:25px;">Hello Visitor!! </p>
                    <p styles="font-size:20px;">Welcome to Terrazas de Guacuco</p>
                    <p>A Commitment to style and charm! The special touches at <em>Terrazas de guacuco</em> brings the
                      southwest alive with the warmth of massive adobe walls, ornate pillars and beautiful brown tiled roofs. Inside
                      each home, you are provided with amenities found only in best homes. Nestled in gentle rolling hills of trees and
                      beautiful gardens, your home provides for peaceful and relaxing evening walks to unwing the long day behind. Come
                      home to <em>Terrazas De Guacuco</em> where southwestern charm lives on.... </p>
                  </tr>
                </table>
                <div className="Dashboardgrid-container" >
                  <div className='div1'>
                    {/* <img styles="float: left; width: 100%; height: 65%;" src="img1.png" /> */}
                    <img className="imges" src="images/img1.png" alt="Sorry ! unavailable" style={{width:'80%'}} />
                  </div>
                  <div className='div2'>
                    {/* <img styles="float: left; width: 61.575%; height: 65%;" src="img2.png" /> */}
                    <img className="imges" src="images/img2.png" alt="Sorry ! unavailable" style={{width:'80%'}} />
                  </div>
                </div>
                
              </form>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default VisitorDashboard;
