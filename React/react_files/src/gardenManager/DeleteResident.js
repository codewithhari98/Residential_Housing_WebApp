import React, { Component } from 'react';
import  './DeleteResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class DeleteResident extends Component {
    constructor(props) {
        super(props);
        this.state = {name:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { id} = this.state
        alert(` Resident has been deleted `);
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
                        <h1>Delete Resident details</h1>
                    <div className='form-control'>
                    <label  for="EmailID">ENTER RESIDENT EMAILID TO DELETE</label><br/>   
                    <input type="email" placeholder="ResidentEmailID" name="Resident EmailID" id="name" required/><br/>
                    </div> 
                                    <button  onclick="alert('The Resident record has been deleted')">Delete</button>
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
 
export default DeleteResident;