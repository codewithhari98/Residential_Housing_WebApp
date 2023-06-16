

import React, { Component } from 'react';
import "./VisitorRequest.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class VisitorRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'',email:'', phone:'', aptno:'',type:'',dlno:'', plateno:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const { name, email, phone,aptno,type, dlno, plateno} = this.state
    alert(`Visitor is Requested`);
  }
  state = {}
  render() {
    return (
      <div>
        <link rel="stylesheet" href="headerfooter.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="parent">
          <Header></Header>
          <div className="main">
            <Sidebar></Sidebar>
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <h2>Request a Visitor</h2>
                <h2>Make sure all the details are correct!!</h2>
                <div className="grid-container">
                <table className="myTable">
                    <tr>
                      <td>Name</td>
                      <td><input type="text" readonly required name="name" id="name" /></td>
                    </tr>
                    <tr>
                      <td>E-mail</td>
                      <td><input type="text" readonly required pattern="^\S+@\S+\.\S+$" name="email" id="email" /></td>
                    </tr>
                    <tr>
                      <td>Phone no</td>
                      <td><input type="text" readonly required pattern = "\d{10}" maxlength="10"  name="phone" id="phone"/></td>
                    </tr>
                    <tr>
                      <td>Apt no</td>
                      <td><input type="text" required pattern = "\d{4}" name="aptno" id="aptno"/></td>
                    </tr>
                    <tr>
                      <td>Resident Type</td>
                      <td><select  style={{width:"175px"}} name="type" id="type" >
                        <option></option>
                        <option value="studio">Studio</option>
                        <option value="cabin">Cabin</option>
                        <option value="Townhouse">Townhouse</option>
                      </select></td>
                    </tr>
                    <tr>
                      <td>DL Number</td>
                      <td><input type="text" name="dlno" id="dlno" maxlength="10" pattern = "^[A-Z0-9]*$" required/ ></td>
                    </tr>
                    <tr>
                      <td>Car Plate Number</td>
                      <td><input type="text" name="plateno" id="plateno" required maxlength="7" pattern = "^[A-Z0-9]*$"/></td>
                    </tr>
                  </table>
                  <input type="submit"class="registerbtn"  value="Request"  />
                  <button className="button">Clear</button>
                </div>
              </form>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default VisitorRequest;