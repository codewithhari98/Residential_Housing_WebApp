import React, { Component } from 'react';
import  './CreateManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";

class CreateManager extends Component {

      state = {
        name: '', id:'',email:'', contact:'',ssn:'', password:'',dob:'',date:'', salary:'', starttime:'',endtime:'' 
      }
    
      handleChange = event => {
        this.setState({ [event.target.name] : event.target.value  });
      }
    
      handleSubmit = event => {
        event.preventDefault();

    
        axios.post("http://localhost/wdm/add_manager.php", { user1:this.state.name,user2:this.state.id,user3:this.state.email,user4:this.state.ssn,
        user5:this.state.password,user6:this.state.dob,user7:this.state.date,user8:this.state.salary,user9:this.state.starttime,user10:this.state.endtime,user11:this.state.contact
      
      
      
      
      })
          .then(res => {
            console.log("res:::::::::::", res);
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
                                <Sidebar/>
                                <div className ="content">
            <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Create manager details</h1>
                    <div className='form-control'>
                    <input type="text" value = {this.state.id} onChange={this.handleChange} placeholder="Manager-ID" pattern = "^[sgbpSGPB][0-9]+$" title="Must conatain an ID that starts with 1 character S|G|B|P followed by 4 digits"name="id" id="id" maxlength="5"  required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" value = {this.state.name} onChange={this.handleChange} placeholder="Manager Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <input type="email" value = {this.state.email} onChange={this.handleChange} placeholder="Manager email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" value = {this.state.contact} onChange={this.handleChange} pattern = "\d*" placeholder="Enter contact number" name="contact" id="contact"  maxlength="9"    required/>
                    </div>

                    <div className = "form-control">
                    <input type="text" value = {this.state.ssn} onChange={this.handleChange}pattern = "\d*" placeholder="Manager SSN " name="ssn" id="message"  maxlength="9"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="password" value = {this.state.password}onChange={this.handleChange}placeholder="Manager Password " maxlength="8" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" name="password" id="message" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date" value = {this.state.dob}onChange={this.handleChange}placeholder="Manager DOB " name="dob" id="dob" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date"value = {this.state.date} onChange={this.handleChange}placeholder="Manager DOJ" name="date" id="message" required/>
                    </div>
                    <div className = "form-control">
                    <input type="text"value = {this.state.salary}onChange={this.handleChange} placeholder="Manager Salary " name="salary" id="message" maxlength="6"  required/>
                    </div>
                    <div className = "form-control">
                    <input type="time" onChange={this.handleChange}value = {this.state.starttime}placeholder="Start Time" name="starttime" id="message" required/>
                    </div>
                    <div className = "form-control">
                    <input type="time" onChange={this.handleChange}value = {this.state.endtime10}placeholder="Manager End Time" name="endtime" id="message" required/>
                    </div>
                    <input type="submit" class="registerbtn"  value="Create"  />      
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
 
export default CreateManager;