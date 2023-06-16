import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  './BuildingManagerDashboard.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class BuildingManagerDashboard extends Component {
    render() { 
        return (
            <div>
                 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                     <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                <div className = "building-grid-container">
                                        <div>
                                        <p><b> Manage Residents</b></p>
                                        <Link to="/helloResident">    
                                        <img className="dash-img" alt="Sorry ! unavailable" src="images/residents.jpeg"/>
                                    </Link>
                                        </div>
                                        <div>
                                            <p> <b> Manage Visitors</b></p>
                                            <Link to="/helloVisitor">    
                                            <img className="dash-img" alt="Sorry ! unavailable" src="images/visitor.jpeg"/>
                                            </Link>
                                        </div>
                                        <div>
                                        <p><b> Manage other managers</b></p>
                                        <Link to="/HelloBuildingManager">
                                            <img className="dash-img" border="0" alt="Sorry ! unavailable" src="images/manager.jpeg"/>
                                            </Link>
                                        </div>
                                        </div>
                                </div>
                                </div>
                            <Footer></Footer>
                            </div>
                            </div>
                            );
    }
}
 
export default BuildingManagerDashboard;
