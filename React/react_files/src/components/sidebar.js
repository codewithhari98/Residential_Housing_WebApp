import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";

import "./headerfooter.css" ;

class Sidebar extends Component {
    state = {  } 
    render() { 
        return (
            <div>

                      <div className="sidebar">
              <div>
              <Link to="/Dashboard"><span className="text">Dashboard</span>
                <span className="icon"><i className="material-icons">apps</i></span>
                </Link>
              </div>
              <div>
              
              <Link to="/Chatwithme">

                <span className="text">Chat</span>
                <span className="icon"><i className="material-icons">chat</i></span>
                </Link>
              </div>
              <div>
              <Link to="/Manager_Profilesettingspage">
                <span className="text">Profile Settings</span>
                <span className="icon"><i className="material-icons">manage_accounts</i></span>
              </Link>
              </div>
              <div>
              <Link to="/login" >
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
 
export default Sidebar;