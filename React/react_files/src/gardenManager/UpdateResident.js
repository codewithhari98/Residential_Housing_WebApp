import React, { Component } from 'react';
import "./UpdateResident.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';


class UpdateResident extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'',email:'', contact:'', ssn:'',password:'',dob:'', movein:'', moveout:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { name, email, contact,ssn,message, dob, movein,moveout} = this.state
        alert(`Details updated `);
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
                                <Sidebar/>
                                <div className ="content">
                                <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Update resident details</h1>
                    <div className='form-control'>
                    <input type="text" placeholder="Resident Name" name="name" id="name" required/>
                    </div>
                    <div className= "form-control">
                    <input type="text" placeholder="Resident Email" name="email" id="email" required/>
                    </div>
                    <div className ="form-control">
                    <input type="text" pattern = "\d*" maxlength="10"  placeholder="Enter contact number" name="contact" id="contact" required/>
                    </div>
                    
                    <div className = "form-control">
                    <input type="text" pattern = "\d*" maxlength="9"  placeholder="Manager SSN " name="ssn" id="ssn" required/>
                    </div>
                    <div className = "form-control">
                    <input type="password"placeholder="Manager Password " maxlength="8" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" name="message" id="message" required/>
                   
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Resident DOB " name="dob" id="dob" required/>
                    </div>
                    <div className = "form-control">
                    <select className="classic">
                    <option value="" disabled selected>Choose Resident Type</option>
                    <option>Owner</option>
                    <option>Short term lease holder</option>
                    <option>Long term lease holder</option>
                    <br/>
                    </select>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Resident MoveIn Date" name="movein" id="movein" required/>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Resident MoveOut Date" name="moveout" id="moveout" required/>
                    </div>
                    <button type="submit" className="registerbtn">Update!</button>               
            </div>
           </div>
            </form> 
             </div>
            </div>
          </div>
            

  <Footer/>

  </div>
 


        );
    }
}
 
export default UpdateResident;