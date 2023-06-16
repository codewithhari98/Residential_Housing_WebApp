import React, { Component } from 'react';
import  './CreateManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class CreateManager extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'',email:'', message:'', password:'',dob:'',date:'', salary:'', starttime:'',endtime:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { id, emailmessage, password,dob,date, salary, starttime,endtime} = this.state
        alert(`New manager has been created `);
      }

    state = {  } 
    render() { 
        return (
            <div>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
            <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Create manager details</h1>
                    <div className='form-control'>
                    <input type="text" placeholder="Manager-ID" pattern = "^[sgbpSGPB][0-9]+$" title="Must conatain an ID that starts with 1 character S|G|B|P followed by 4 digits"name="id" id="id" maxlength="5"  required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" placeholder="Manager Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <input type="email" placeholder="Manager email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" pattern = "\d*" placeholder="Enter contact number" name="contact" id="contact"  maxlength="10"    required/>
                    </div>

                    <div className = "form-control">
                    <input type="text" pattern = "\d*" placeholder="Manager SSN " name="message" id="message"  maxlength="9"   required/>
                    </div>
                    <div className = "form-control">
                    <input type="password" placeholder="Manager Password " maxlength="8" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" name="password" id="message" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date" placeholder="Manager DOB " name="dob" id="dob" required/>
                    </div>
                    <div className = "form-control">
                    <input type="date" placeholder="Manager DOJ" name="date" id="message" required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Manager Salary " name="salary" id="message" maxlength="6"  required/>
                    </div>
                    <div className = "form-control">
                    <input type="time" placeholder="Start Time" name="starttime" id="message" required/>
                    </div>
                    <div className = "form-control">
                    <input type="time" placeholder="Manager End Time" name="endtime" id="message" required/>
                    </div>
                    <input type="submit"class="registerbtn"  value="Create"  />      
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
 
export default CreateManager;