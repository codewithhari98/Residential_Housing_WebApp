import React, { Component } from 'react';
import  './CreateVisitor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from 'axios';

class CreateVisitor extends Component {
  state = {  
     email: '', name:'', contact:'', dlnumber:'',carplatenumber:''
  }
  
  handleChange = event => { 
    this.setState({ [event.target.name] : event.target.value  });
  }

  handleSubmit = event => {
    event.preventDefault(); 

    axios.post("http://127.0.0.1:8000/addvisitorroute", { user1:this.state.email,user2:this.state.name,user3:this.state.contact,user4:this.state.dlnumber,
    user5:this.state.carplatenumber
  
  })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
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
                                        <input
                                            type="text" value = {this.state.email} onChange={this.handleChange} placeholder="Email ID"
                                            id="VisitorEmailID" class="input_box form_input" name='email'
                                        />
                                        </div> 
                    <div className ="form-control">
                    <input type="text" value = {this.state.name} onChange={this.handleChange} id="VisitorName" name='name' class="input_box form_input" placeholder="Enter Name of Visitor" required maxlength="40"/>
                    </div>
                    <div className ="form-control">
                    <input type="text" value = {this.state.contact} onChange={this.handleChange} name='contact' id="Visitorcontact" class="input_box form_input" placeholder="Enter contact number" required maxlength="10"/>
                    </div>
                    <div className = "form-control">
                    <input  type="text" value = {this.state.dlnumber} onChange={this.handleChange} name='dlnumber' id="dlnumber" class="input_box form_input" placeholder="DL_number" required maxlength="9" />
                    </div>
                    <div className = "form-control">
                    <input type="text" value = {this.state.carplatenumber} onChange={this.handleChange} name='carplatenumber' placeholder="Car_plate_number" id="Carplatenumber"class="input_box form_input"required/>
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