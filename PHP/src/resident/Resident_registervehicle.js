import React, { Component } from 'react';
import  './resident_register.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
import axios from "axios";

class RegisterVehicle extends Component {

      state = {
        email: '',vehiclemodel:'', vehicleyear:'',vehiclecolor:'', dlplatenumber:'' 
      }
    
      handleChange = event => {
        this.setState({ [event.target.name] : event.target.value  });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        alert('vehicle registration submitted successfully');


    
        axios.post("http://localhost/wdm/registervehicle_resident.php", { user1:this.state.email,user2:this.state.vehiclemodel,user3:this.state.vehicleyear,
        user4:this.state.vehiclecolor,user5:this.state.dlplatenumber
      
      })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render() { 
        return (
            <div>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <ResidentSidebar/>
                                <div className ="content">
            <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Vehicle Registration Form</h1>
                    
                    <div className= "form-control">
                    <input type="email" value = {this.state.email} onChange={this.handleChange} placeholder="Resident email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" value = {this.state.vehiclemodel} onChange={this.handleChange} placeholder="Vehicle Model" name="vehiclemodel" id="vehicleModel"     required/>
                    </div>

                    <div className = "form-control">
                    <input type="text" value = {this.state.vehicleyear} onChange={this.handleChange} pattern = "\d{4}" placeholder="Vehicle Year " name="vehicleyear" id="vehicleYear"  maxlength="4"   required/>
                   
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.vehiclecolor} onChange={this.handleChange} placeholder="Vehicle Color "  name="vehiclecolor" id="vehiclecolor" required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.dlplatenumber} onChange={this.handleChange} pattern = "[a-zA-Z0-9-]+" placeholder="License Plate Number" name="dlplatenumber" id="licensePlate" required/>
                    </div>
                    
                    <button onclick="alert('The vehicle has been registered')"  className="registerbtn"> Submit </button>  
                    
                     
            </div>
            </div>
            </form> 
            </div>  
            </div>
<Footer/>
                            </div>

            </div>
        );
    }
}
 
export default RegisterVehicle;