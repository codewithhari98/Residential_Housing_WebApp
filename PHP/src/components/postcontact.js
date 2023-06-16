import React, { Component } from 'react';
import "./postcontact.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';




class  PostContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'', email:'',contact:'', message:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.redirect = this.redirect.bind(this)
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        alert(`Request submitted `);
        // navigate('/Contact');
      }
    state = {  } 
    render() { 
        return (
        <div>
            <link rel="stylesheet" href="header_footer_sidebar.css"/>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <div className="parent">
          <Header></Header>
      <div className="main">

          <div className="content">
            <form onSubmit={this.handleSubmit}>
                <div className="postcontact-grid-container">
                    <div className='frm'>
                        <h1 className="posth1"> Contact Us</h1>
                        <p>Let us know your queries.</p>
                    <div className='form-control'>
                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <label for="Contact"><b>Contact</b></label>
                    <input type="text" placeholder="Enter Contact" name="contact" maxlength="10" id="contact" required/>
                    </div>
                    <div className = "form-control">
                    <label for="Message"><b>Message Us</b></label>
                    <input type="text" placeholder="Your Message" name="message" id="message" required/>
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
            <Footer/>    </div>
        </div>
          
           
        );
    }
}
 
export default PostContactUs ;