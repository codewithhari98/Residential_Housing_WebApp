import React, { Component } from 'react';
import  './DeleteWatchman.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecuritySidebar from './sidebar';

class DeleteWatchman extends Component {
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
        alert(` Watchman has been deleted `);
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
                                <SecuritySidebar/>
                                <div className ="content">
                                <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className='frm'>
                        <h1>Delete Watchman details</h1>
                    <div className='form-control'>
                    <label  for="EmailID">ENTER WATCHMAN EMAILID TO DELETE</label><br/>   
                    <input type="text" placeholder="WatchmanEmailID" name="Watchman EmailID" id="name" required/><br/>
                    </div> 
                                    <button  onclick="alert('The Watchman record has been deleted')">Delete</button>
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