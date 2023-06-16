import React, { Component } from 'react';
import "./Timings.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import VisitorSidebar from '../visitor/VisitorSidebar';
import { Link } from "react-router-dom";


class Timings extends Component {
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
            <VisitorSidebar></VisitorSidebar>
            <div className="content">
              <form>
                <h2>Adhere to the timimngs else fine will be imposed !!</h2>
                <div className="grid-container">
                  <table className='myTable'>
                    <tr>
                      <td><img src="images/logo.png"></img></td>
                      <td>Pools</td>
                      <td>Open from 8:am till 8pm</td>
                    </tr>

                    <tr>
                      <td> <img className="img" src="images/trail.png"></img></td>
                      <td>Walking Trails</td>
                      <td>Open All Time</td>
                    </tr>
                    <tr>
                      <td> <img className="img" src="images/tennis.png"></img></td>
                      <td>Tennis court</td>
                      <td>Open from 8:am till 6:pm</td>
                    </tr>

                    <tr>
                      <td> <img className="img" src="images/garden1.png"></img></td>
                      <td>All Gardens</td>
                      <td>Open from 6:am till 10:pm</td>
                    </tr>

                  </table>
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

export default Timings;

