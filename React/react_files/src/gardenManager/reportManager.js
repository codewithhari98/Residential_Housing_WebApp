import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import "./reportManager.css"


class ReportManager extends Component {
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
                                <div className ="content-report">
                                <div className="report">
    <p >Hello Manager ! Welcome to the Reports generation page</p>
    <p >Please choose a start date and an end date within today's date</p>
    <form>
      <label  for="start">Start date</label>
      <input name= "end date" type="date" id="date" min="2000-01-01" required/>
      <label  for="end">End date</label>
      <input  type="date" id="date" max="2023-12-12" required/>
      <button   onClick={window['myFunction']} >Generate Reports</button>
    </form> 
      </div>
      <div id="hide_display">
      <div className = "grid-containers">
        <div>
          <p> Duration of Employment</p>
          <a>
          <img border="0" alt="Sorry ! unavailable" src="images/bargraph.jpg"/>
          </a>
        </div>
        <div>
            <p> Count</p>
            <a>
            <img border="0" alt="Sorry ! unavailable" src="images/piechart.jpg"/>
            </a>
        </div>
        <div>
        <p> Salary</p>
        <a>
            <img border="0" alt="Sorry ! unavailable" src="images/enroll.jpg"/>
            </a>
        </div>
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
 
export default ReportManager;