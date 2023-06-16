import React, { Component } from 'react';
import './CreateWatchman.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from 'axios';

class CreateWatchman extends Component {
    state = {
        id: '', name: '', contact: '', ssn: '', dob: '', doj: '', salary: '', starttime: '', endtime: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post("http://127.0.0.1:8000/addsecuritymanagerroute", {
            user1: this.state.id, user2: this.state.name, user3: this.state.contact, user4: this.state.ssn,
            user5: this.state.dob, user6: this.state.doj, user7: this.state.salary, user8: this.state.starttime, user9: this.state.endtime, user10: this.state.email, user11: this.state.password

        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" href="header_footer_sidebar.css" />

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                <div className="parent">
                    <Header></Header>
                    <div className="main">
                        <Sidebar />
                        <div className="content">
                            <form onSubmit={this.handleSubmit}>
                                <div className="grid-container">
                                    <div className='frm'>
                                        <h1>Create Watchman details</h1>
                                        <div className='form-control'>
                                            <input
                                                type="text" value={this.state.id} onChange={this.handleChange} placeholder="Watchman ID"
                                                id="Watchman-ID"
                                                class="input_box form_input"
                                                name='id'
                                                required minlength="5" maxlength="5" size="10"
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="text" value={this.state.name} onChange={this.handleChange} placeholder="Watchman Name"
                                                id="Watchman Name"
                                                class="input_box form_input"
                                                name='name'
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email ID"
                                                id="WatchmanEmailID" class="input_box form_input" name='email'
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input 
                                            type="text" value={this.state.contact} onChange={this.handleChange} 
                                            pattern="\d*" maxlength="9" placeholder="Enter contact number" 
                                            name="contact" id="contact" required />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="text" value={this.state.ssn} onChange={this.handleChange} placeholder="Watchman SSN"
                                                id="Watchman SSN"
                                                class="input_box form_input"
                                                name='ssn'
                                                required maxlength="9"
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input type="password" value={this.state.password} onChange={this.handleChange} name='password' id="VisitorPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" class="input_box form_input" placeholder="Visitor Password" required minlength="8" />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="date" value={this.state.dob} onChange={this.handleChange} placeholder="Date of Birth"
                                                onfocus="(this.type='date')"
                                                id="Watchman DOB"
                                                class="input_box form_input"
                                                name='dob'
                                                required
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="date" value={this.state.doj} onChange={this.handleChange} placeholder="Date of Joining"
                                                onfocus="(this.type='date')"
                                                id="Watchman DOJ"
                                                class="input_box form_input"
                                                name='doj'
                                                required
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="text" value={this.state.salary} onChange={this.handleChange} placeholder="Watchman Salary"
                                                id="Watchman Salary"
                                                class="input_box form_input"
                                                name='salary'
                                                required
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="time" placeholder="Start Time" value={this.state.starttime} onChange={this.handleChange}
                                                onfocus="(this.type='time')"
                                                id="Watchman Start Time"
                                                class="input_box form_input"
                                                name='starttime'
                                                required
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <input
                                                type="time" placeholder="End Time" value={this.state.endtime} onChange={this.handleChange}
                                                onfocus="(this.type='time')"
                                                id="Watchman End Time"
                                                class="input_box form_input"
                                                name='endtime'
                                                required
                                            />
                                        </div>
                                        <input type="submit" class="registerbtn" value="Create" />
                                        {/* <button onClick="alert('The record has been Created')">Create Watchman Record</button> */}
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>


        );
    }
}
export default CreateWatchman;