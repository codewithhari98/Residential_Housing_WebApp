import React, { Component } from 'react';
import  './DeleteManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class DeleteManager extends Component {
    constructor(props){
        super(props);
        this.state = {id:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        const { id} = this.state
        alert(` manager has been deleted `);
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
                        <h1>Delete manager details</h1>
                    <div className='form-control'>
                    <label  for="EmailID">ENTER MANAGER EMAILID TO DELETE</label><br/>   
                    <input type="text" pattern = "^[sgbpSGPB][0-9]+$" title="Must conatain an ID that starts with 1 character S|G|B|P followed by 4 digits"name="id" id="id" maxlength="5" placeholder="Manager EmailID" required/><br/>
                    </div> 
                    <input type="submit"class="registerbtn"  value="Delete"  />      
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
 
export default DeleteManager;