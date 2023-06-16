import React, { Component } from 'react';
import  './DeleteManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";

class DeleteManager extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {id:'' };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({ [event.target.name] : event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     const { id} = this.state
    //     alert(` manager has been deleted `);
    //   }
    state = {
        id: ''
      }
    
      handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        // console.log("id:", id);

    
        axios.get(`http://127.0.0.1:8000/deletebuildingmanagerroute/${this.state.id}`, { user1:this.state.id})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
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
                    <input  type="text"  value = {this.state.id}onChange={this.handleChange} placeholder="Manager-ID" pattern = "^[sgbpSGPB][0-9]+$" title="Must conatain an ID that starts with 1 character S|G|B|P followed by 4 digits"name="id" id="id" maxlength="5"  required/><br/>
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