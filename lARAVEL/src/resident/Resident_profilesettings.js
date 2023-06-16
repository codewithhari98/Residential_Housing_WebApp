import React, { Fragment,useState, Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from "axios";

import ResidentSidebar from '../resident/sidebar';

import "../components/profilesettings.css" ;

class Resident_prof extends Component{
  state = {
 email:localStorage.getItem("user"),
 name: '',
 contact:''
  }


  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value  });
  }
  


     
        
  handleSubmit = event => {    
  axios.put(`http://127.0.0.1:8000/editProfileresident/${this.state.email}`, { user1:this.state.name, user3:this.state.contact
  }).then(res => {
        console.log(res);
        console.log(res.data);
      })

      
    }

    componentDidMount() {   
      axios.get(`http://127.0.0.1:8000/getProfileresident/${this.state.email}`)
          .then(res => {
            console.log("res", res.data)

            this.setState({name: res.data[0]["name"]})
            this.setState({contact: res.data[0]["contact"]})
            // console.log(res.data)
            // this.setState({ data });
            // console.log(data)
            // console.log('hello')
          })
        }
  
    


  render() { 
    return (
        <Fragment>
             <div className="parent">
            <Header />
            <div className="main">
            <ResidentSidebar/>
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
              {/* <div>
              <h3 className="mb-0"><i class="far fa-clone pr-1"></i>Cancel Subscriptions:</h3>
            <button onClick={this.handleCancel} >Cancel Pool Subscription</button> 
            
             <button onClick={this.handleCanceltennis} >Cancel Tennis Subscription</button> 
            
           </div> */}
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

export default Resident_prof;