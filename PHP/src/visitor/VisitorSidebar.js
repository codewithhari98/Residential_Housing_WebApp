import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




function myParams(Component){
  return props=><Component navHook={useNavigate()}/>;
}
class VisitorSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {email:"",direct:""};
  }

  
  handleLogout = () => {
    // localStorage.clear();
    console.log("ls:", localStorage.getItem("user"));
    this.state.email = localStorage.getItem("user");
    console.log(this.state.email)
    axios.post("http://localhost/wdm/delete_logindetails.php", { user1:this.state.email})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
};


redirect= event =>{
  event.preventDefault();
  const email = localStorage.getItem("user");

  if (email == "ash@building.manager.com") 
   { this.props.navHook('/BuildingManagerDashboard')
  }
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
  console.log("red:::::::", this.state.direct);
}
    render() { 
        return (
            <div>
                              <link rel="stylesheet" href="header_footer_sidebar.css"/>

                      <div className="sidebar">
                      <div onClick={this.redirect} >
              <Link to="/Dashboard">

                <span className="text">Dashboard</span>
                <span className="icon"><i className="material-icons">apps</i></span>
                </Link>
              </div>
              <div>
              <Link to="/Chatwithmevisitor">
                <span className="text">Chat</span>
                <span className="icon"><i className="material-icons">chat</i></span>
              </Link>
              </div>
              <div>
              <Link to="/Timings">
                <span className="text">Timings</span>
                <span className="icon"><i className="material-icons">manage_accounts</i></span>
                </Link>
              </div>
              <div>
              <Link to="/VisitorProfile">
                <span className="text">Profile Settings</span>
                <span className="icon"><i className="material-icons">manage_accounts</i></span>
                </Link>
              </div>
              <div onClick={this.handleLogout}>
              <Link to="/login">
                <span className="text">Logout</span>
                <span className="icon"><i className="material-icons">logout</i></span>
                </Link>
              </div>
             
             
              <div className="sidebar content">        
              </div>
      </div>
            </div>
        );
    }
}
 
export default myParams(VisitorSidebar);