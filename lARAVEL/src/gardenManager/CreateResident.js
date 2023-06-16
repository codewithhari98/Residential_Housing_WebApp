import React, { Component } from 'react';
import  './CreateResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";



class CreateResident extends Component { 

  
      
      state = {
        name: '',email:'', contact:'',ssn:'', password:'',dob:'',movein:'', moveout:'' ,type:''
      }
    
      handleChange = event => {
        this.setState({ [event.target.name] : event.target.value  });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        
    
        axios.post("http://127.0.0.1:8000/addresidentroute", { user1:this.state.name,user2:this.state.email,user3:this.state.contact,user4:this.state.ssn,
        user5:this.state.password,user6:this.state.dob,user7:this.state.movein,user8:this.state.moveout,user9:this.state.residenttype
      
      })
          
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error)
          })
      }
    render() { 
        return (
            <div>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
            <form onSubmit={this.handleSubmit}>
                <div className="grid-container-resident">
                    <div className='frm'>
                        <h1>Create Resident details</h1>
                    
                    <div className= "form-control">
                    <input type="text" value = {this.state.name} onChange={this.handleChange} placeholder="Resident Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <input type="email" value = {this.state.email} onChange={this.handleChange} placeholder="Resident email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" value = {this.state.contact} onChange={this.handleChange} pattern = "\d*" placeholder="Enter contact number" name="contact" id="contact"   required/>
                    </div>
                    <div className ="form-control"> 
                    <input type="text" value = {this.state.residenttype} onChange={this.handleChange}  placeholder="Enter Resident Type (owner, stl, ltl)" name="type" id="type"   required/>
                    </div>
                    <div className = "form-control">
                    {/* <select className="classic" required>
                    <option  disabled selected>Choose Resident Type</option>
                    <option>Owner</option>
                    <option>Short term lease holder</option>
                    <option>Long term lease holder</option>
                    <br/>
                    </select> */}
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.ssn} onChange={this.handleChange}pattern = "\d*" placeholder="Resident SSN " name="ssn" id="ssn"  maxlength="9"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="password" value = {this.state.password}onChange={this.handleChange}placeholder="Resident Password " maxlength="8" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" name="password" id="password" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date"value = {this.state.dob} onChange={this.handleChange}placeholder="Resident DOB" name="dob" id="dob" required/>
                    </div>
                  
                    <div className = "form-control">
                    <input type="date"value = {this.state.movein} onChange={this.handleChange}placeholder="Resident movein" name="movein" id="movein" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date" value = {this.state.moveout}onChange={this.handleChange}placeholder="Resident moveout " name="moveout" id="moveout" required/>
                    </div>
                    <button onclick="alert('The record has been Updated')">Create Resident Record</button>           
                    

                    
                       
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
 
export default CreateResident;