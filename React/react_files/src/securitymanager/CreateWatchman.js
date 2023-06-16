import React, { Component } from 'react';
import './CreateWatchman.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecuritySidebar from './sidebar';

class CreateWatchman extends Component {
    constructor(props) {
        super(props);
        this.state = { watchmanid: '', watchmanname: '', contact: '', watchmanSSN: '', watchmanDOB: '', watchmanDOJ: '', watchmanSalary: '', starttime: '', endtime: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        const { id, emailmessage, password, dob, date, salary, starttime, endtime } = this.state
        alert(`New Watchman has been created `);
    }

    state = {}
    render() {
        return (
            <div>
                <link rel="stylesheet" href="header_footer_sidebar.css" />

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                <div className="parent">
                    <Header></Header>
                    <div className="main">
                        <SecuritySidebar />
                        <div className="content">
                            <form onSubmit={this.handleSubmit}></form>
                            <div className="grid-container">
                                <div className='frm'>
                                    <h1>Create Watchman details</h1>
                                    <div className='form-control'>
                                        <input
                                            type="text"
                                            id="Watchman-ID"
                                            class="input_box form_input"
                                            placeholder="Watchman ID"
                                            required minlength="5" maxlength="5" size="10"
                                        />
                                        <input
                                            type="text"
                                            id="Watchman Name"
                                            class="input_box form_input"
                                            placeholder="Watchman Name"
                                        />
                                        <input
                                            type="number"
                                            id="Watchman contact"
                                            class="input_box form_input"
                                            placeholder="Enter contact number"
                                            required maxlength="10"
                                        />

                                        <input
                                            type="number"
                                            id="Watchman SSN"
                                            class="input_box form_input"
                                            placeholder="Watchman SSN"
                                            required maxlength="9"
                                        />
                                        <input
                                            type="text" placeholder="Date of Birth"
                                            onfocus="(this.type='date')"
                                            id="Watchman DOB"
                                            class="input_box form_input"
                                            required
                                        />

                                        <input
                                            type="text" placeholder="Date of Joining"
                                            onfocus="(this.type='date')"
                                            id="Watchman DOJ"
                                            class="input_box form_input"
                                            required
                                        />
                                        <input
                                            type="number"
                                            id="Watchman Salary"
                                            class="input_box form_input"
                                            placeholder="Watchman Salary"
                                            required
                                        />
                                        <input
                                            type="text" placeholder="Start Time"
                                            onfocus="(this.type='time')"
                                            id="Watchman Start Time"
                                            class="input_box form_input"
                                            required
                                        />
                                        <input
                                            type="text" placeholder="End Time"
                                            onfocus="(this.type='time')"
                                            id="Watchman End Time"
                                            class="input_box form_input"
                                            required
                                        />
                                        <button onclick="alert('The record has been Created')">Create Watchman Record</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        );
    }
}
export default CreateWatchman;