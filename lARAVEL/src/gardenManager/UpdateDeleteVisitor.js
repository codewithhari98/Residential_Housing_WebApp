import React, { useState,Component } from 'react';
import * as ReactDOM from 'react-dom';
import  './UpdateDeleteVisitor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

const Row = ({Name, Email, Contact, Status,remove}) => (
    // <div className="row">
    //   <div className='tablediv'>{Name}</div>
    //   <div className='tablediv'>{Email}</div>
    //   <div className='tablediv'>{Contact}</div>
    //   <div className='tablediv'>{Status}</div>   
    //   <div className="remove">
    //     <a href="#" onClick={() => remove(Email)}>Delete</a>
    //   </div>  
    // </div>
        <tr>
        <th>{Name}</th>
        <th>{Email}</th>
        <th>{Contact}</th>
        <th>{Status}</th>   
        <th className="remove">
          <a href="#" onClick={() => remove(Email)}>Delete</a>
        </th>  
      </tr>
  );
 
class ManageVisitor extends Component {
    state = {
      data: [
        {Name:'Harry', Email:'harry@gmail.com', Contact:'3133133133',Status:'Approved'},
        {Name:'John', Email:'John@gmail.com', Contact:'3134133133',Status:'Waiting'},
        {Name:'Paul', Email:'Paul@gmail.com', Contact:'3133153133',Status:'Waiting'},
        {Name:'Charlie', Email:'Charlie@gmail.com', Contact:'3136133133',Status:'Approved'},
        {Name:'Gary', Email:'Gary@gmail.com', Contact:'3133133183',Status:'Approved'},
      ]}; 

    compareBy = (key) => {
      return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
      };
    };
     
    sortBy = (key) => {
      let arrayCopy = [...this.state.data];
      arrayCopy.sort(this.compareBy(key));
      this.setState({data: arrayCopy});
    };
  
    remove = (rowEmail) => {
      const arrayCopy = this.state.data.filter((row) => row.Email !== rowEmail);
      this.setState({data: arrayCopy});
    };
      
    render() {
      const rows = this.state.data.map( (rowData) => <Row remove={this.remove} {...rowData } />);
  
      return (
        <div>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                
                                <div className ="content">
                                <div className='read'>
  <h2 styles="font-size:1.5vw;">Update or delete visitors log</h2>
        {/* <div className="table"> */}
        <table id="myTable">
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th onClick={() => this.sortBy('Status')}>Status</th>
            <th>Delete</th>
            </tr>
          </thead>
            {rows}
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
  
//   ReactDOM.render(<ManageVisitor />, document.getElementByEmail('app'));
  export default ManageVisitor;