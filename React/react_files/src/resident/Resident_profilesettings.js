import React, { Fragment,useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResidentSidebar from '../resident/sidebar';

import "./resident_profile.css" ;




function Resident_prof() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [id, setId] = useState("1234567890");
  const [password, setPassword] = useState("*********");
  const [block, setBlock] = useState("A");
  const [apt, setApt] = useState("197");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleIdChange(e) {
    setId(e.target.value);
  }
  function handleBlockChange(e) {
    setBlock(e.target.value);
  }
  function handleAptChange(e) {
    setApt(e.target.value);
  }
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
              <p className="mb-0"><strong className="pr-1">Resident ID</strong>
              <input type="text" id="name" value={id} onChange={handleIdChange} className="input-field" />  
              </p>
              
              <p className="mb-0"><strong className="pr-1">Name</strong>
              <input type="text" id="name" value={name} onChange={handleNameChange} className="input-field" />  
              </p>
              <p className="mb-0"><strong className="pr-1">Email</strong>
              <input type="text" id="email" value={email} onChange={handleEmailChange} className="input-field" />
              </p>
              <p className="mb-0"><strong className="pr-1">Password</strong>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} className="input-field"/>
              </p>
              <p className="mb-0"><strong className="pr-1">Block</strong>
              <input type="text" id="name" value={block} onChange={handleBlockChange} className="input-field" />  
              </p>
              <p className="mb-0"><strong className="pr-1">AptNo</strong>
              <input type="text" id="name" value={apt} onChange={handleAptChange} className="input-field" />  
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

export default Resident_prof;