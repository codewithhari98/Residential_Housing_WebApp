import React, { Component } from 'react';
import  './DeleteResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";

class DeleteResident extends Component {
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
        remail: ''
      }
    
      handleChange = event => {
        this.setState({ email: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        // console.log("id:", id);

    
        axios.post("http://localhost/wdm/delete_resident.php", { user1:this.state.email})
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
                    <label  for="EmailID">ENTER RESIDENT EMAILID TO DELETE</label><br/>   
                    <input  type="email"  value = {this.state.email}onChange={this.handleChange} placeholder="Resident-Email" name="email" id="email"   required/><br/>
                    
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
 
export default DeleteResident;