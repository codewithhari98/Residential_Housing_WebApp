import React, { Component } from 'react';
import "./UpdateResident.css" ;
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';


class UpdateVisitor extends Component {
  constructor(props) {
    super(props);
    this.state = {myInput:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const { myInput} = this.state
    alert(`Details updated `);
  }
    state = {  } 
    render() { 
        return (
            <div>
                          <link rel="stylesheet" href="header_footer_sidebar.css"/>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                <div class="update">
  <h2 >Visitor List</h2>
  <p >Search Status of Visitor to update or delete:</p>  
  <input className="form-control" id="myInput" onkeyup="myFunction()" type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Status</th>
        <th>Accept/Reject</th>
        <th>Delete</th>
      </tr>
    </thead>
      <tr>
        <td>Harry</td>
        <td>harry@gmail.com</td>
        <td>3133133133</td>
        <td>Approved</td>
        <td><button  onclick="alert('The record has been Updated')">Update</button></td>
        <td><button  onclick="alert('The record has been deleted')">Delete</button></td>
      </tr>
      <tr>
        <td>John</td>
        <td>John@gmail.com</td>
        <td>3133133144</td>
        <td>Approved</td>
        <td><button  onclick="alert('The record has been Updated')">Update</button></td>
        <td><button  onclick="alert('The record has been deleted')">Delete</button></td>
      </tr>
      <tr>
        <td>Paul</td>
        <td>Paul@gmail.com</td>
        <td>4293133133</td>
        <td>Waiting</td>
        <td><button  onclick="alert('The record has been Updated')">Update</button></td>
        <td><button onclick="alert('The record has been deleted')">Delete</button></td>
      </tr>
      <tr>
        <td>Charlie</td>
        <td>Charlie@gmail.com</td>
        <td>7299133133</td>
        <td>Approved</td>
        <td><button  onclick="alert('The record has been Updated')">Update</button></td>
        <td><button onclick="alert('The record has been deleted')">Delete</button></td>
      </tr>
   
  </table>
              
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
 
export default UpdateVisitor;