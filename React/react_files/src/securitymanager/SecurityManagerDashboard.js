import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  './SecurityManagerDashboard.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecuritySidebar from './sidebar';

class SecurityManagerDashboard extends Component {
    render() { 
        return (
            <div>
                 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                     <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <SecuritySidebar/>
                                <div className ="content">
                                <div className = "building-grid-container">
                                        <div>
                                        <p><b> Manage Residents</b></p>
                                        <Link to="/helloResident">    
                                        <img border="0" alt="Sorry ! unavailable" src="images/residents.jpeg" style={{width:"50%"}}/>
                                    </Link>
                                        </div>
                                        <div>
                                            <p> <b> Manage Visitors</b></p>
                                            <Link to="/helloVisitor">
                                            <img border="0" alt="Sorry ! unavailable" src="images/visitor.jpeg" style={{width:"50%"}}/>
                                        
                                            </Link>
                                        </div>
                                        <div>
                                        <p><b> Manage Security Manager</b></p>
                                        <Link to="/SecurityManagerManaging">
                                            <img border="0" alt="Sorry ! unavailable" src="images/manager.jpeg" style={{width:"50%"}}/>
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
 
export default SecurityManagerDashboard;
