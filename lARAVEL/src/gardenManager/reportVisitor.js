import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import "./reportVisitor.css"
import axios from "axios";

class ReportVisitors extends Component {
  constructor(props){
    super(props);
    this.state={
        startdate: '',enddate:'',dataSource:[] 
    }
}

  handleChange = event => {
    console.log("hellochange")
    this.setState({ [event.target.name] : event.target.value });
  }
  verifyoutput = event => {
    
    event.preventDefault();
    console.log(this.state.enddate)
    console.log( this.state.startdate)
    if(this.state.startdate != '' && this.state.enddate!='') { 
        console.log("hello")

        axios.get(`http://127.0.0.1:8000/getVisitorReportRoute/${this.state.startdate}/${this.state.enddate}`, { user1:this.state.startdate , user2 : this.state.enddate})
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ dataSource: res.data},()=>console.log(this.state));
          window.myFunction()
          // console.log("ds::" ,this.state.dataSource)
        })

    }

  }
  getData=event=>{
    return this.state.dataSource
  } 
    render() { 
        return (
            <div>
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>

                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content-report">
                                <div className="report">
    <p >Hello Manager ! Welcome to the Reports generation page</p>
    <p >Please choose a start date and an end date within today's date</p>
    <form>
      <label  for="start">Start date</label>
      <input onChange = {this.handleChange} name= "startdate" type="date" id="date1" min="2000-01-01" required/>
      <label  for="end">End date</label>
      <input  onChange = {this.handleChange} type="date" name= "enddate" id="date2" max="2023-12-12" required/>
      <button   onClick={this.verifyoutput} >Generate Reports</button>
    </form> 
      </div>
      <div id="hide_display">
      <div className = "grid-containers">
        
      <table id="myTable">
    <thead>
      <tr>
        <th>Visitor Name</th>
        <th>Visitor Email</th>
        <th>Contact</th>
        <th>Visiting Date</th>
      </tr>
    </thead>

      {this.state.dataSource.map((dataSource)=>{
        return(
          <tr>
            <th>{dataSource.name}</th>
            <th>{dataSource.email}</th>
            <th>{dataSource.contact}</th>
            <th>{dataSource.visitdate}</th>
          </tr>
        )
      })
      }
  </table>
        </div>
</div>
</div>
            </div>
<Footer/>
                            </div>
                            </div>

        );
    }
}
 
export default ReportVisitors;