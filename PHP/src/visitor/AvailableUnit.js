import React, { Component } from 'react';
import "./AvailableUnit.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
class AvailableUnit extends Component {
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
            <Sidebar></Sidebar>
            <div className="content">
              <form>
                <h2>Check Availability of Beautiful Floor Plans of Terrazas De Guacuco !! </h2>
                <div className="visitor-grid-container">
                    <div>
                        <p><b>Cabins</b></p>
                        
                            <img src="images/cabin.png" alt="Sorry ! unavailable"  style={{width:'70%'}} />
                        <div>Beds:1, Baths:1, SQFT: 650</div>
                        <span>Available Units : </span><br/>
                        <span>1020</span><br/>
                        <span>1052</span><br/>
                        <span>1125</span><br/>
                        <span>1160</span><br/>
                    </div> 
                    <div>
                        <p><b>Studios</b></p>
                       
                            <img src="images/studio.png" alt="Sorry ! unavailable"  style={{width:'65%'}} />
                            
                        <div>Beds:1, Baths:1, SQFT: 780</div>
                        <span>Available Units :</span><br/>
                        <span>2021</span><br/>
                        <span>2041</span><br/>
                        <span>2060</span><br/>
                    </div>
                    <div>
                        <p><b>Townhomes</b></p>
                        
                            <img src="images/townhome.png" alt="Sorry ! unavailable"  style={{width:'55%'}} />
                        <div>Beds:2, Baths:2, SQFT: 1150</div>
                        <span>Available Units :</span><br/>
                        <span>3015</span><br/>
                        <span>3055</span><br/>
                      
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

export default AvailableUnit;

