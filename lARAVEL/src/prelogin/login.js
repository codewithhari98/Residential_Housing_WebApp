import React, { Component } from 'react';
import { Link, redirect, useNavigate } from "react-router-dom";
import  './login.css';
import PreloginHeader from '../prelogin/PreloginHeader';
import PreloginFooter from '../prelogin/PreloginFooter';
import axios from "axios";

function myParams(Component){
  return props=><Component navHook={useNavigate()}/>;
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'',psw:''};
        this.handleChange = this.handleChange.bind(this);
        this.redirect = this.redirect.bind(this)
      }
       redirect(event){
        event.preventDefault();
         axios.post(`http://127.0.0.1:8000/loginRoute/${this.state.email}/${this.state.psw}`,{ user1: this.state.email,user2 : this.state.psw}).then(response => {
         console.log("Hello") 
         // console.log(response);
          // console.log(response.data);
          localStorage.setItem('user', this.state.email)
          console.log("local storage var", localStorage.getItem("user"))

        });
        const email = this.state.email
        if (email == "ash@building.manager.com") 
         { this.props.navHook('/BuildingManagerDashboard')}
        
        else if (email ==  "ash@resident.com") 
        { this.props.navHook('/ResidentDashboard')}
        else if (email ==  "ash@security.manager.com") 
        { this.props.navHook('/SecurityDashboard')}
        else if (email ==  "ash@garden.manager.com") 
        { this.props.navHook('/GardenTimings')}
        else if (email ==  "ash@visitor.com") 
        { this.props.navHook('/VisitorDashboard')}
        else if (email ==  "ash@poolmanager.com") 
        { this.props.navHook('/PoolTimings')}
        else { alert("Sorry, emailId Not found! Please make sure your emailID is suffixed by 'resident.com' or 'security.manager.com' or 'garden.manager.com' or 'visitor.com' or 'poolmanager.com' after @ symbol based on your role")}
  // store the user in localStorage

      
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
 
    state = { email: '', psw:'', } 
    render() { 
        return (
            <div>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <PreloginHeader></PreloginHeader>
                            <div className="main">

                                <div className ="content">
            <form className="login-form" onSubmit={this.redirect} >
            <div class="login-containers">
              <h1>LOGIN</h1>
            <label for="email"><b>Email</b>
          <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" name="email" id="email" required />
        </label>
        <label for="psw"><b>Password</b>
                <input type="password" value={this.state.psw} onChange={this.handleChange} maxlength="8" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}"  placeholder="Enter Password" name="psw" id="psw" required/>
                </label>

        <input type="submit"class="registerbtn"  value="LOGIN"  />      
        <p>Forgot password? <Link to="/forgotpassword">Forgot Password</Link>.</p>
                    <br/>
              <p>Dont have an account? <Link to="/register">Register new user</Link>.</p>
              </div>
            </form>
 
            </div>  
            </div>
            <PreloginFooter/>                            
            </div>

            </div>
         );
    }
}
 
export default myParams(Login);