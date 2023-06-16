import React, { Component } from 'react';
import { Link } from "react-router-dom";

class VisitorSidebar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                              <link rel="stylesheet" href="header_footer_sidebar.css"/>

                      <div className="sidebar">
              <div>
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
              <div>
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
 
export default VisitorSidebar;