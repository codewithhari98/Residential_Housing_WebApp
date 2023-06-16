import React, { Component } from 'react';
import './ReadWatchman.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecuritySidebar from './sidebar';

class ReadWatchman extends Component {
    constructor(props) {
        super(props);
        this.state = { myInput: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        const { myInput } = this.state
        alert(` Details are displayed `);
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
                        < SecuritySidebar/>
                        <div className="content">
                            <div className='securityread'>
                                <h2 styles="font-size:1.5vw;">Watchmen List</h2>
                                <p styles="font-size:1.2vw;">Search Watchman by Name:</p>
                                <input styles="font-size:1.2vw;" className="form-control" id="myInput" onkeyup="myFunction()" type="text" placeholder="Search.." />
                                <br />
                                <table id="myTable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>DOB</th>
                                            <th>Watchman ID</th>
                                            <th>SSN</th>
                                            <th>Contact</th>
                                            <th>Watchman Timings</th>
                                            <th>Watchman Salary</th>
                                            <th>Watchman date of Joining</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>John Mayers</td>
                                        <td>01/01/2000</td>
                                        <td>12345</td>
                                        <td>8569-8975-8759-7894</td>
                                        <td>5127412458</td>
                                        <td> 9:00am</td>
                                        <td>100000$</td>
                                        <td>01/01/2023</td>
                                    </tr>
                                    <tr>
                                        <td>Jimmy</td>
                                        <td>01/01/2000</td>
                                        <td>78452</td>
                                        <td>8569-8975-8759-7894</td>
                                        <td>5127412458</td>
                                        <td> 9:00am</td>
                                        <td>100000$</td>
                                        <td>01/01/2023</td>
                                    </tr>
                                    <tr>
                                        <td>Tommy</td>
                                        <td>01/01/2000</td>
                                        <td>86541</td>
                                        <td>8569-8975-8759-7894</td>
                                        <td>5127412458</td>
                                        <td> 9:00am</td>
                                        <td>100000$</td>
                                        <td>01/01/2023</td>
                                    </tr>
                                    <tr>
                                        <td>Harsh</td>
                                        <td>01/01/2000</td>
                                        <td>74125</td>
                                        <td>8569-8975-8759-7894</td>
                                        <td>5127412458</td>
                                        <td> 9:00am</td>
                                        <td>100000$</td>
                                        <td>01/01/2023</td>
                                    </tr>
                                    <tr>
                                        <td>Jennifer</td>
                                        <td>01/01/2000</td>
                                        <td>96541</td>
                                        <td>8569-8975-8759-7894</td>
                                        <td>5127412458</td>
                                        <td> 9:00am</td>
                                        <td>100000$</td>
                                        <td>01/01/2023</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        );
    }
}

export default ReadWatchman;