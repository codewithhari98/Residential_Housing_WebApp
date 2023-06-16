import React, { Component } from 'react';
import "./UpdateResident.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";



class UpdateResident extends Component {

  state = {
    name:'',email:'', contact:'', ssn:'', dob:'' ,movein:'', moveout:'' 
  }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value  });
  }

  handleSubmit = event => {
    event.preventDefault();


    axios.put(`http://127.0.0.1:8000/updateresidentroute/${this.state.email}`, { user1:this.state.name,user2:this.state.email,user3:this.state.contact,user4:this.state.ssn,
    user6:this.state.dob,user7:this.state.movein,user8:this.state.moveout
  })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() { 
        return (
            <div>
                          <link rel="stylesheet" href="header_footer_sidebar.css"/>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                <form onSubmit={this.handleSubmit}> 
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Update Resident details</h1>
                   
                    <div className= "form-control">
                    <input type="text" value = {this.state.name} onChange={this.handleChange} placeholder="Resident Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <input type="email" value = {this.state.email} onChange={this.handleChange} placeholder="Resident email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" value = {this.state.contact} onChange={this.handleChange} pattern = "\d*" placeholder="Enter contact number" name="contact" id="contact"  maxlength="10"    required/>
                    </div>

                    <div className = "form-control">
                    <input type="text" value = {this.state.ssn} onChange={this.handleChange}pattern = "\d*" placeholder="Resident SSN " name="ssn" id="ssn"  maxlength="9"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="date" value = {this.state.dob}onChange={this.handleChange}placeholder="Resident DOB " name="dob" id="dob" required/>
                    </div>
                    
                    <div className = "form-control">
                    <input type="date" onChange={this.handleChange}value = {this.state.movein}placeholder="MoveIn Date" name="movein" id="movein" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date" onChange={this.handleChange}value = {this.state.moveout}placeholder="Moveout Date" name="moveout" id="moveout" required/>
                    </div>
                    
                    <button type="submit" className="registerbtn">Update!</button>               
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
 
export default UpdateResident;