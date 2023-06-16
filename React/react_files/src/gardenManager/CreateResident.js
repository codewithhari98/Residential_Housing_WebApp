import React, { Component } from 'react';
import  './CreateResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class CreateResident extends Component {
    constructor(props) {
        super(props);
        this.state = {residentname:'',residentemail:'', contact:'', residentSSN:'',residentPassword:'',residentDOB:'', MoveInDate:'', MoveOutDate:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { id, emailmessage, password,dob,date, salary, starttime,endtime} = this.state
        alert(`New Resident has been created `);
      }
    state = {  } 
    render() { 
        return (
            <div>
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                <form onSubmit={this.handleSubmit}>
                                                            
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Create Resident details</h1>
                    <div className='form-control'>
                    <input type="text" id="residentname" class="input_box form_input" placeholder="Resident Name" />
                    
                    </div>
                    <div className= "form-control">
                    <input type="text" id="residentemail" class="input_box form_input" placeholder="Resident Email" />
                    </div>
                    <div className ="form-control">
                    <input type="text" pattern = "\d*" placeholder="Resident contact " name="contact" id="contact"  maxlength="10"   required/>
                    </div>
                    <div className = "form-control">
                    <select className="classic" required>
                    <option value="" disabled selected>Choose Resident Type</option>
                    <option>Owner</option>
                    <option>Short term lease holder</option>
                    <option>Long term lease holder</option>
                    <br/>
                    </select>
                    </div>
                    <div className = "form-control">
                    <input  type="text"id="residentSSN" class="input_box form_input" placeholder="Resident SSN" required maxlength="9" />
                    </div>
                    <div className = "form-control">
                    <input type="password"id="residentPassword"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="input_box form_input"placeholder="Resident Password"required minlength="8"/>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Date of Birth"onfocus="(this.type='date')"id="residentDOB"class="input_box form_input"required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Move In Date"onfocus="(this.type='date')"id="MoveInDate"class="input_box form_input"required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Move Out Date"onfocus="(this.type='date')"id="MoveOutDate"class="input_box form_input"required/>
                    </div>
                   
                    <button onclick="alert('The record has been Updated')">Create Resident Record</button>           
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
 
export default CreateResident;