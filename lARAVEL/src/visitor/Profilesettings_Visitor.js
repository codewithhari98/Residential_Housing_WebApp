import React, { Fragment,useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VisitorSidebar from '../visitor/VisitorSidebar';

import "./profilesettings.css" ;




function Profilesettings_visitor() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  
  const [password, setPassword] = useState("*********");
  
  const [contact, setContact] = useState("5120000000");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  
  function handleContactChange(e) {
    setContact(e.target.value);
  }
  
    return (
        <Fragment>
             <div className="parent">
            <Header />
            <div className="main">
            <VisitorSidebar/>
            <div className="content"> 
            
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            
            <div>
            <div className="profile-card shadow-sm">
            <div className="profile-card-header bg-transparent text-center">
              <img className="profile_img" src="images/pic2.jpg" alt="student dp"/>
              <h3>Profile Settings</h3>
            </div>
           
            <div className="field-container">
             
              <br></br>
             
              <p className="mb-0"><strong className="pr-1">Name</strong>
              <input type="text" id="name" value={name} onChange={handleNameChange} className="input-field" />  
              </p>
              <p className="mb-0"><strong className="pr-1">Email</strong>
              <input type="text" id="email" value={email} onChange={handleEmailChange} className="input-field" />
              </p>
              <p className="mb-0"><strong className="pr-1">Password</strong>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} className="input-field"/>
              </p>
              <p className="mb-0"><strong className="pr-1">Contact</strong>
              <input type="text" id="name" value={contact} onChange={handleContactChange} className="input-field" />  
              </p>
             
              <button onClick={window['alertUpdate']}>Update</button>
              </div>
              <div>
              <h3 className="mb-0"><i class="far fa-clone pr-1"></i>Cancel Subscriptions:</h3>
            <button href="about">Cancel Pool Subscription</button> 
            
             <button href="about">Cancel Tennis Subscription</button> 
            
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

export default Profilesettings_visitor;