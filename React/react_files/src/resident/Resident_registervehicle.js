import React, { Component } from 'react';
import "./resident_register.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
import { Link, redirect, useNavigate } from "react-router-dom";




class  Resident_registervehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {residentName:'',vehicleModel:'', vehicleYear:'', vehicleColor:'',licensePlate:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { residentName, vehicleModel, vehicleYear,vehicleColor,licensePlate } = this.state
        alert(`Vehicle has been registered!`);
      }
    state = {  } 
    render() { 
        return (
        <div>
            <link rel="stylesheet" href="header_footer_sidebar.css"/>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div className="parent">
      <Header></Header>
      <div className="main">
      <ResidentSidebar/>
          <div className="content">
          <form onSubmit={this.handleSubmit}>
            
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Vehicle Registration Form</h1>
                    <div className= "form-control">
                    <input type="text" placeholder="Resident Name" name="residentName" id="residentName" required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" placeholder="Vehicle Model" name="vehicleModel" id="vehicleModel" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" pattern = "\d{4}" placeholder="Vehicle Year" name="vehicleYear" id="vehicleYear" required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" placeholder="Vehicle Color" name="vehicleColor" id="vehicleColor" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" pattern = "[a-zA-Z0-9-]+" placeholder="License Plate Number" name="licensePlate" id="licensePlate" required/>
                    </div>
                    
                    <button onclick="alert('The vehicle has been registered')" type="submit" className="registerbtn">Submit</button>         
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
 
export default Resident_registervehicle ;