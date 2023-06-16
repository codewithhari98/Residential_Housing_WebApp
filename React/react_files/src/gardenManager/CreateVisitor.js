import React, { Component } from 'react';
import  './CreateVisitor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class CreateVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {VisitorEmailID:'',VisitorName:'', Visitorcontact:'', DLnumber:'',VisitorPassword:'',Carplatenumber:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { id, emailmessage, password,dob,date, salary, starttime,endtime} = this.state
        alert(`New Visitor has been created `);
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
                        <h1>Create Visitor details</h1>
                    <div className='form-control'>
                    <input type="email" id="VisitorEmailID" class="input_box form_input" placeholder="Visitor-EmailID" required />
                    </div>
                    <div className ="form-control">
                    <input type="text" id="VisitorName" class="input_box form_input" placeholder="Enter Name of Visitor" required maxlength="40"/>
                    </div>
                    <div className ="form-control">
                    <input type="text" id="Visitorcontact" class="input_box form_input" placeholder="Enter contact number" required maxlength="10"/>
                    </div>
                    <div className = "form-control">
                    <input  type="text"id="DLnumber" class="input_box form_input" placeholder="DL_number" required maxlength="9" />
                    </div>
                    <div className = "form-control">
                    <input type="password"id="VisitorPassword"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="input_box form_input"placeholder="Visitor Password"required minlength="8"/>
                    </div>
                    <div className = "form-control">
                    <input type="text" placeholder="Car_plate_number" id="Carplatenumber"class="input_box form_input"required/>
                    </div>
                   
                   
                    <button>Create Visitor Record</button>           
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
 
export default CreateVisitor;