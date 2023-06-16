import React, { Component } from 'react';
import  './ReadResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class ReadResident extends Component {
  constructor(props) {
    super(props);
    this.state = {myInput:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const { myInput} = this.state
    alert(` Details are displayed `);
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
                                <Sidebar/>
                                <div className ="content">
                                    <div className='residentread'>
  <h2 styles="font-size:1.5vw;">Residents List</h2>
  <p styles="font-size:1.2vw;">Search Resident by Name:</p>  
  <input styles="font-size:1.2vw;" className="form-control" id="myInput" onkeyup="myFunction()" type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
  <thead>
      <tr>
        <th>Name</th>
        <th>DOB</th>
        <th>Email</th>
        <th>Type</th>
        <th>SSN</th>
        <th>Contact</th>
        <th>Password</th>
        <th>Movein date</th>
        <th>Moveout date</th>
      </tr>
    </thead>
      <tr>
        <td>John Mayers</td>
        <td>01/01/2000</td>
        <td>John@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
      <tr>
        <td>Jimmy</td>
        <td>01/01/2000</td>
        <td>joe@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
      <tr>
        <td>Tommy</td>
        <td>01/01/2000</td>
        <td>John@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
      <tr>
        <td>Harsh</td>
        <td>01/01/2000</td>
        <td>John@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
      <tr>
        <td>Jennifer</td>
        <td>01/01/2000</td>
        <td>John@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
    
      <tr>
        <td>Valeria</td>
        <td>01/01/2000</td>
        <td>John@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
    
      <tr>
        <td>Sandra</td>
        <td>01/01/2000</td>
        <td>John@gmail.com</td>
        <td>Owner</td>
        <td>8569-8975-8759-7894</td>
        <td>5127412458</td>
        <td>@123dsf</td>
        <td>01/01/2021</td>
        <td> - </td>
      </tr>
      </table>
  </div>


      




                            </div>
                            </div>
<Footer/>
                            </div>
            </div>
            
        );
    }
}
 
export default ReadResident;