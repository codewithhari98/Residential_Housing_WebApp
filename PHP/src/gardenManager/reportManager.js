import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import "./reportManager.css"
import axios from "axios";


class ReportManager extends Component {
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

        axios.post("http://localhost/wdm/garden_manager_report.php", { user1:this.state.startdate , user2 : this.state.enddate})
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ dataSource: res.data},()=>console.log(this.state));
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
      <div className = "grid-containers">
        
        <table id="myTable">
      <thead>
        <tr>
          <th>Garden Manager ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Date of Joining</th>
          <th>Salary</th>
          <th>Manager Start Time</th>
          <th>Manager End Time</th>
        </tr>
      </thead>
  
        {this.state.dataSource.map((dataSource)=>{
          return(
            <tr>
              <th>{dataSource.gm_id}</th>
              <th>{dataSource.gm_name}</th>
              <th>{dataSource.gm_email}</th>
              <th>{dataSource.gm_contact}</th>
              <th>{dataSource.gm_doj}</th>
              <th>{dataSource.gm_salary}</th>
              <th>{dataSource.gm_starttime}</th>
              <th>{dataSource.gm_endtime}</th>
            </tr>
          )
        })
        }
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
 
export default ReportManager;