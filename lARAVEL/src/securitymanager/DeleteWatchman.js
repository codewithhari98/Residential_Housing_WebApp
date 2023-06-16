import React, { Component } from 'react';
import  './DeleteWatchman.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";

class DeleteWatchman extends Component {
    
    state = { 
        id:''
     } 
     handleChange = event => {
        this.setState({id: event.target.value });
     }

     handleSubmit = event => {
        event.preventDefault();
        //console.log("id:",id);

        axios.get(`http://127.0.0.1:8000/deletesecuritymanagerroute/${this.state.id}`, {user1:this.state.id})
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
                        <h1>Delete Watchman details</h1>
                    <div className='form-control'>
                    <label  for="id">ENTER WATCHMAN ID TO DELETE</label><br/>   
                    <input
                                            type="text" value = {this.state.id} onChange={this.handleChange} placeholder="Watchman ID"
                                            id="Watchman-ID"
                                            class="input_box form_input"
                                            name='id'
                                            required minlength="5" maxlength="5" size="10"
                                        />
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
 
export default DeleteWatchman;