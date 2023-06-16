import React, { Component } from 'react';
import "./VisitorProfile.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import VisitorSidebar from '../visitor/VisitorSidebar';
import { Link } from "react-router-dom";

class VisitorProfile extends Component {
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
                <h2>Edit Your Profile!!</h2>
                <div className="grid-container">
                  <table width="30%">
                    <tr>
                      <td>Name</td>
                      <td><input type="text" required /></td>
                    </tr>
                    <tr>
                      <td>E-mail</td>
                      <td><input type="email" required /></td>
                    </tr>
                    <tr>
                      <td>Phone no</td>
                      <td><input type="text" pattern = "\d*" maxlength="10" required /></td>
                    </tr>
                    <tr>
                      <td>DL Number</td>
                      <td><input type="text" required maxlength="9" /></td>
                    </tr>
                    <tr>
                      <td>Car Plate Number</td>
                      <td><input type="text" readonly /></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td> <button class="btn" >Edit</button></td>
                    </tr>

                  </table>
                  
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

export default VisitorProfile;