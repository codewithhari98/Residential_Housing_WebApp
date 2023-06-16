import React, { Component } from 'react';
import '../buildingManager/DeleteManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
import axios from "axios";

class DeleteVehicle extends Component {
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
        dlplatenumber: ''
    }

    handleChange = event => {
        this.setState({ dlplatenumber: event.target.value });
        console.log(this.state.dlplatenumber)
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log("id:", id);


        axios.get(`http://127.0.0.1:8000/deletevehicle/${this.state.dlplatenumber}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    state = {}
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                <div className="parent">
                    <Header></Header>
                    <div className="main">
                        <ResidentSidebar />
                        <div className="content">
                            <form onSubmit={this.handleSubmit}>
                                <div className="grid-container">
                                    <div className='frm'>
                                        <h1>Delete Vehicle details</h1>
                                        <div className='form-control'>
                                            <label for="EmailID">ENTER Plate Number to DELETE</label><br />
                                            <input type="text" name="dlplatenumber" value={this.state.dlplatenumber} onChange={this.handleChange} placeholder="Plate Number" pattern = "[a-zA-Z0-9-]+" id="dlplatenumber" required /><br />
                                        </div>
                                        <input type="submit" class="registerbtn" value="Delete" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />

                </div>
            </div>
        );
    }
}

export default DeleteVehicle;