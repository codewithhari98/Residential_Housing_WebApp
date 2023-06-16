import React, { Component } from 'react';
import "./resident_poolsubscription.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
import { Link, redirect, useNavigate } from "react-router-dom";




class  Resident_poolsubscription extends Component {
    constructor(props) {
        super(props);
        this.state = {amount:'',name:'', card:'', expiry:'',cvv:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { amount, name, card,expiry,cvv } = this.state
        alert(`Payment is succesful!`);
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
      <ResidentSidebar/>
          <div className="content">
          <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                <div className='frm'>
                     <h1>Payment Details for Pool Access</h1>
                        
                    <div className='form-control'>
                    <input type="text" pattern = "\d*" placeholder="Enter Amount" title="Must enter the amount in dollars" name="amount" id="amount"   required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" placeholder="Enter Name" name="name" id="name" required/>
                    </div>
                    <div className ="form-control">
                
                    <input type="text" pattern = "\d*" placeholder="Enter Card Details" name="card" id="card"  maxlength="16"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" pattern = "\d{2}-\d{4}" placeholder="Expiry Date" title="Must enter month and year Ex:01-2023" name="expiry" id="expiry" required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" pattern = "\d*" placeholder="CVV" title="Must enter three digit available back on card" name="cvv" id="cvv"  maxlength="3"   required/>
                    </div>  
                    <div className = "form-control">
                    <select className="classic" required>
                    <option value="" disabled selected>Select Card Type</option>
                    <option>Visa</option>
                    <option>Mastercard</option>
                    <option>Discover</option>
                    <option>American Express</option>
                    </select>
                    <br/>
                    </div>
                    <button type="submit" className="registerbtn">Submit</button>           
            </div>
            </div>
             
            </form> 
            </div>  
            </div>
           </div>
      <Footer></Footer>
    </div>
        
          
           
        );
    }
}
 
export default Resident_poolsubscription ;