import React, { Component } from 'react';
import { Link } from "react-router-dom";

import  '../buildingManager/HelloBuildingManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';

class HelloResidentvehicle extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                     <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <ResidentSidebar/>
                                <div className ="contents">
                                <div className="buildingpart1" id = "Div1">
                <div className="building-centered">
                <h4>Hello Resident ! Welcome to the Vehicle list managing page. Please choose from the given dropdown to perform the operations </h4>
                <button className="button button5" id= "button" onClick={window['showDiv']}>Choose Operation</button>
                </div>
                </div>
                <div className="buildingpart2" id = 'Div2'>
                        <div className="building-centered">
                        <div>
                        <Link to="/CreateVehicle">
                <span className="text"> Create </span>
                <span className="icon"><i className="material-icons">apps</i></span>
                </Link>
              </div>
              <div>
              <Link to="/ReadVehicle">
                <span className="text">Read</span>
                <span className="icon"><i className="material-icons">local_library</i></span>
                </Link>
              </div>
              <div>
              <Link to="/UpdateVehicle">
                <span className="text">Update</span>
                <span className="icon"><i className="material-icons">edit_note</i></span>
                </Link>
              </div>
              <div>
              <Link to="/DeleteVehicle">
                <span className="text">Delete</span>
                <span className="icon"><i className="material-icons">delete</i></span>
                </Link>
              </div>
              <div>
              </div>
      </div>
      
                        </div>
                        </div>
                        </div>                              
            <Footer/>
            </div>
                            </div>

        );
    }
}
 
export default HelloResidentvehicle;