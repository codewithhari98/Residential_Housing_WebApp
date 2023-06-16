import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import { Link } from "react-router-dom";
import  './gardenTimings.css';
import axios from "axios";

class GardenTimings extends Component {
  state = {
    email:localStorage.getItem("user"),
    starttime: '',
    endtime: ''
     }
     componentDidMount() {   
      axios.get("http://127.0.0.1:8000/getGardenTimingRoute")
          .then(res => {
            console.log("res", res.data)
            this.setState({email: res.data[0]["email"]})
            this.setState({starttime: res.data[0]["starttime"]})
            this.setState({endtime: res.data[0]["endtime"]})
            // console.log(res.data)
            // this.setState({ data });
            // console.log(data)
            // console.log('hello')
          })
          
  }
  
    handleChange = event => {
      this.setState({ [event.target.name] : event.target.value  });
      this.setState({email: localStorage.getItem("user")})
    }
      
    handleSubmit = event => {    
    axios.put(`http://127.0.0.1:8000/updateGardenTimingRoute/${this.state.email}`, { user1:this.state.email,user2:this.state.starttime,user3:this.state.endtime
    }).then(res => {
      console.log("hello1")
          console.log(res);
          console.log(res.data);
        })
    }
    render() { 
        return (
            <div>
                     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                     <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                    <div className='garden'>
  <h2 className="h2">Hello garden Manager</h2>
  <p className="p">What would you like to do?</p>  
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>Garden Start Timings</th>
        <th>Garden End Timings</th>
        <th>Update</th>
      </tr>
      <tr>
        <td><input type="text" value={this.state.starttime} id="starttime" name="starttime" onChange={this.handleChange}></input></td>
        <td><input type="text" value={this.state.endtime} id="endtime" name="endtime" onChange={this.handleChange}></input></td>
        <td><button styles="font-size:1.2vw;" onClick={this.handleSubmit}>Update</button></td>
      </tr>
    </thead>
</table>
                            <div className = "garden-grid-container">
                                <div>
                                    <p> Manage Residents</p>
                                    <Link to="/helloResident">    
                                        <img border="0" alt="Sorry ! unavailable" src="images/residents.jpeg"/>
                                    </Link>
                                </div>
                                <div>
                                    <p> <b> Manage Visitors</b></p>
                                            <Link to="/helloVisitor">    
                                            <img border="0" alt="Sorry ! unavailable" src="images/visitor.jpeg"/>
                                            </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <Footer></Footer>
                            </div>

                              );
      
                            }
                          }
                          export default GardenTimings;                        