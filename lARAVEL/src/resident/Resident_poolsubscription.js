import React, { Component } from 'react';
import  './resident_poolsubscription.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
import axios from "axios";

class Resident_poolsubscription extends Component {

      state = {
        amount: '', name:'',card:'', expiry:'',cvv:'' ,subscription:'', email:''
      }
    
      handleChange = event => {
        this.setState({ [event.target.name] : event.target.value  });
      }
      handleCancel = event => {    
        event.preventDefault();
        axios.get(`http://127.0.0.1:8000/deletesubscription/${this.state.email}`, {user1:this.state.email
        }).then(res => {
              console.log(res);
              console.log(res.data);
            })
      
            
          }
    
      handleSubmit = event => {
        event.preventDefault();
        alert('Operation performed successfully');

    
        axios.post("http://127.0.0.1:8000/addpaymentresident", { user1:this.state.amount,user2:this.state.name,user7: this.state.email, user3:this.state.card,user4:this.state.expiry,
        user5:this.state.cvv,user6:this.state.subscription
      })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render() { 
        return (
            <div>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <ResidentSidebar/>
                                <div className ="content">
            <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Make payment for subscription of Pool</h1>
                  

                    <div className='form-control'>
                    <input type="text" value = {this.state.amount} onChange={this.handleChange} placeholder="Enter Amount" title="Must enter the amount in dollars" name="amount" id="amount"   required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" value = {this.state.name} onChange={this.handleChange} placeholder="Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <input type="email" value = {this.state.email} onChange={this.handleChange} placeholder="email" name="email" id="email" required/>
                    </div>


                    <div className ="form-control">
                    <input type="text" value = {this.state.card} onChange={this.handleChange} pattern = "\d*" placeholder="Enter Card Details" name="card" id="card"  maxlength="16"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.expiry} onChange={this.handleChange} pattern = "\d{2}-\d{4}" placeholder="Expiry Date" title="Must enter month and year Ex:01-2023" name="expiry" id="expiry" required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.cvv} onChange={this.handleChange} pattern = "\d*" placeholder="CVV" title="Must enter three digit available back on card" name="cvv" id="cvv"  maxlength="3"   required/>
                    </div>  
                    <div className = "form-control">
                    <select className="classic" required>
                    <option  value ="" disabled selected>Select Card Type</option>
                    <option>Visa</option>
                    <option>Mastercard</option>
                    <option>Discover</option>
                    <option>American Express</option>
                    </select>
                    <br/>
                    </div>
                    <div className= "form-control">
                    <input type="text" value = {this.state.subscription} onChange={this.handleChange} placeholder="Type of Subscription(Ex:pool or tennis)" name="subscription" id="typeofsubscription" required/>
                    </div>
                    <button type="submit" className="registerbtn">Submit</button>    
                    <div>
              <h3 className="mb-0"><i class="far fa-clone pr-1"></i>OR</h3>
            <button onClick={this.handleCancel} >Cancel Pool Subscription</button> 
</div>        
            </div>
            </div>
            </form> 

            </div>  
            </div>
<Footer/>
                            </div>

            </div>
        );
    }
}
 
export default Resident_poolsubscription;