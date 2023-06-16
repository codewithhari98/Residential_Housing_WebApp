import React, { Component } from 'react';
import "./UpdateWatchman.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecuritySidebar from './sidebar';


class UpdateWatchman extends Component {
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
        const { name, email, contact, ssn, message, dob, movein, moveout } = this.state
        alert(`Details updated `);
    }
    state = {}
    render() {
        return (
            <div>
                <link rel="stylesheet" href="header_footer_sidebar.css" />

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div className="parent">
                    <Header></Header>
                    <div className="main">
                        <SecuritySidebar />
                        <div className="content">
                            <form onSubmit={this.handleSubmit}>
                                <div className="grid-container">
                                    <div className='frm'>
                                        <h1>Update watchman details</h1>
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
                                        <button type="submit" className="registerbtn">Update!</button>
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

export default UpdateWatchman;