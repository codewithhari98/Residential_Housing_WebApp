import React, { Component } from 'react';
import  './poolTimings.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import { Link } from "react-router-dom";

class PoolTimings extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                     <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                    <div className='garden'>
  <h2 className="h2">Hello Pool Manager</h2>
  <p className="p">What would you like to do?</p>  
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>Pool Start Timings</th>
        <th>Pool End Timings</th>
        <th>Update</th>
      </tr>
      <tr>
        <td contenteditable="true">9:00:00 AM</td>
        <td contenteditable="true">9:00:00 PM</td>
        <td><button styles="font-size:1.2vw;" onClick={window['alertUpdate']}>Update</button></td>
      </tr>
    </thead>
</table>
                            <div className = "garden-grid-container">
                                <div>
                                    <p> Manage Residents</p>
                                    <Link to="/helloResident">    
                                        <img border="0" alt="Sorry ! unavailable" src="images/residents.jpeg"/>
                                    </Link>
                                </div>
                                <div>
                                    <p> <b> Manage Visitors</b></p>
                                            <Link to="/helloVisitor">    
                                            <img border="0" alt="Sorry ! unavailable" src="images/visitor.jpeg"/>
                                            </Link>
                                </div>
                                <div>
                                <p> Generate Reports</p>
                                <Link to="/ReportManager">
                                    <img border="0" alt="Sorry ! unavailable" src="images/piechart.jpg"/>
                                </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <Footer></Footer>
                            </div>

                              );
      
                            }
                          }
                          export default PoolTimings;                        