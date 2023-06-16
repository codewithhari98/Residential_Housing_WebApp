import React, { Component } from 'react';
import "./contact.css" ;
import PreloginHeader from '../prelogin/PreloginHeader';
import PreloginFooter from '../prelogin/PreloginFooter';
import emailjs from 'emailjs-com';





class  ContactUs extends Component {

  state = {name:'', email:'',contact:'', message:''};
  sendEmail= event => {
    event.preventDefault();
    console.log("Sendn")
    const val=document.getElementById('myform')
    emailjs.sendForm('service_osfqlzl', 'template_uu987yl', val, 'j3m4-oeUaewsBpw1p')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value  });
  }
    
      // handleSubmit(event) {
      //   alert(`Request submitted `);
      //   // navigate('/Contact');
      // }


    render() { 
        return (
        <div>
            <link rel="stylesheet" href="header_footer_sidebar.css"/>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div className="parent">
          <PreloginHeader></PreloginHeader>
      <div className="main">
          <div className="content">
            <form className="form" id= 'myform' onSubmit={this.sendEmail}>
                <div className="contact-grid-container">
                    <div className='frm'>
                        <h1>Contact Us</h1>
                        <p>Let us know your queries.</p>
                    <div className='form-control'>
                    <label for="name"><b>Name</b></label>
                    <input type="text" value= {this.state.name} onChange={this.handleChange} placeholder="Enter Name"  name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" value= {this.state.email} onChange={this.handleChange} name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <label for="Contact"><b>Contact</b></label>
                    <input type="text" placeholder="Enter Contact" value= {this.state.contact} onChange={this.handleChange} name="contact" maxlength="10" id="contact" required/>
                    </div>
                    <div className = "form-control">
                    <label for="Message"><b>Message Us</b></label>
                    <input type="text" placeholder="Your Message" value= {this.state.message} onChange={this.handleChange} name="message" id="message" required/>
                    </div>
                    <button type="submit" className="registerbtn">Send Message</button>               
            </div>
            </div>
                                    <ul className="get_say_social-icn">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>    
            </form> 
            </div>  
            </div>
            <PreloginFooter/>    </div>
        </div>
          
           
        );
    }
}
 
export default ContactUs ;