import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  './Register.css';
import PreloginHeader from '../prelogin/PreloginHeader';
import emailjs from 'emailjs-com';
import PreloginFooter from '../prelogin/PreloginFooter';
import axios from "axios";



// var templateParams = {
//   to_name: 'uashwanthika@gmail.com',
//   to_email: React.Register(findemail)
// };

class Register extends Component {



  sendEmail= event => {
    event.preventDefault();
    console.log("Sendn")
    emailjs.send('service_osfqlzl', 'template_maiff89', this.state, 'j3m4-oeUaewsBpw1p')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    axios.post("http://localhost/wdm/register.php", { user1:this.state.email,user2:this.state.psw})
  .then(res => {
    console.log("res:::::::::::", res);
    console.log(res.data);
  })
    
  }
  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value  });
  }
  findemail= event =>{
    return this.state.email
  }
  state = { email:'' } 
    render() { 
        return (
          
            <div>
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <PreloginHeader></PreloginHeader>
                            <div className="main">

                                <div className ="content">
            <div class="mains">
            <form onSubmit={this.sendEmail} >
              <div class="containers">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <label for="email"><b>Email</b></label>
                <input type="text" value = {this.state.email} onChange={this.handleChange} placeholder="Enter Email" name="email" id="email" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" value = {this.state.psw} onChange={this.handleChange}  placeholder="Enter Password" name="psw" id="psw" required/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            
                <button type="submit"   class="registerbtn">Register</button>

                <p>Already have an account?<Link to="/login">Sign in</Link></p>
              </div>
            </form>
          </div>
          </div>  
            </div>
            <PreloginFooter/>                            </div>

            
            </div>

















        );
    }
}
 
export default Register ;