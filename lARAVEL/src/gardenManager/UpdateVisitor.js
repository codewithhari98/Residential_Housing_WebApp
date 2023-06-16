import React, { Component } from 'react';
import "./UpdateVisitor.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";  



class UpdateVisitor extends Component {

  state = {
    email:'',name:'', contact:'', dlnumber:'',carplatenumber:''
  }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value  });
  }

  handleSubmit = event => {  
    event.preventDefault();


    axios.put(`http://127.0.0.1:8000/updatevisitorroute/${this.state.email}`, { user1:this.state.email,user2:this.state.name,user3:this.state.contact,user4:this.state.dlnumber,
    user5:this.state.carplatenumber
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
                        <h1>Update Visitor details</h1>
                    <div className= "form-control">
                    <input type="email" value = {this.state.email} onChange={this.handleChange} placeholder="Visitor email" name="email" id="email" required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" value = {this.state.name} onChange={this.handleChange} placeholder="Visitor Name" name="name" id="name" required/>
                    </div>
                    
                    <div className ="form-control">
                    <input type="text" value = {this.state.contact} onChange={this.handleChange} pattern = "\d*" placeholder="Enter contact number" name="contact" id="contact"  maxlength="10"    required/>
                    </div>

                    <div className = "form-control">
                    <input type="text" value = {this.state.dlnumber} onChange={this.handleChange} placeholder="Visitor DL Number " name="dlnumber" id="dlnumber"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.carplatenumber} onChange={this.handleChange} placeholder="Visitor Car plate Number " name="carplatenumber" id="carplatenumber"   required/>
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
 
export default UpdateVisitor;