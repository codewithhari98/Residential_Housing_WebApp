import React, { Fragment,useState, Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from "axios";

import Sidebar from '../components/sidebar';

import "./profilesettings.css" ;

class Profilesettings_manager extends Component{
  state = {
 email:localStorage.getItem("user")

    // localStorage.getItem("user")
  }
//   componentDidMount() {   
//     axios.get("http://localhost/wdm/profilesettings_get.php")
//         .then(res => {
//           console.log("res", res.data)
//           // const data=res.data;
//           // console.log(res.data)
//           // this.setState({ data });
//           // console.log(data)
//           console.log('hello')

//         }).catch(error => {})
// }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value  });
  }
    
  handleSubmit = event => {    
  axios.post("http://localhost/wdm/profilesettings_post.php", { user1:this.state.name,user2:this.state.id,user3:this.state.email, user11:this.state.contact
  }).then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() { 
    return (
        <Fragment>
             <div className="parent">
            <Header />
            <div className="main">
            <Sidebar/>
            <div className="content"> 
            
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            
            <div>

            <div className="profile-card shadow-sm">
            <div className="profile-card-header bg-transparent text-center">
              <img className="imgs" src="images/pic2.jpg" alt="student dp"/>
              <h3>Profile Settings</h3>
            </div>
            
            <div className="field-container">
             
              <br></br>

              <p className="mb-0"><strong className="pr-1"> ID</strong>
              <input type="text" value={this.state.id} id="id" name="id" onChange={this.handleChange} pattern = "^[sgbpSGPB][0-9]+$" title="Must conatain an ID that starts with 1 character S|G|B|P followed by 4 digits"  maxlength="5" />  
              </p>
              

              <p className="mb-0"><strong className="pr-1">Name</strong>
              <input type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange} />  
             </p>
              <p className="mb-0"><strong className="pr-1">Email</strong>
              <input type="text" id="email" value={this.state.email} name="email" className="input-field" />
              </p>

              <p className="mb-0"><strong className="pr-1">Contact</strong>
              <input type="text" id="contact" value={this.state.contact} name="contact"  pattern = "\d*"  maxlength="9" onChange={this.handleChange} />
              </p>

              <button onClick={this.handleSubmit}>Update</button>
              </div>
              </div> 
            </div>
          
            
                
                
                
               
                 </div>
                </div>
           
           
           <Footer />
           </div> 
        </Fragment>
    )
}
}

export default Profilesettings_manager;