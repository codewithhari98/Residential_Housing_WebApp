import React, { useState,Component } from 'react';
import  './ReadVisitor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';



const ReadVisitor=()=>{
const initialData=[
  {Name: 'John Mayers', Email:'jahn@visitor.com',  Contact:'5127412458',  DLnumber:'34567',CarplateNumber:'ABC1234'},
{Name: 'Tommy' , Email:'tommy@visitor.com', Contact:'5127412458',  DLnumber:'87653',CarplateNumber:'XYZ4567'},
{Name: 'Harsh', Email:'harsh@visitor.com',  Contact:'5127412458',  DLnumber:'764536',CarplateNumber:'UVW5647'},
{Name: 'John Diggle', Email:'diggle@visitor.com',  Contact:'5127412458', DLnumber:'23456',CarplateNumber:'IJK2345'},
]

const [value,setValue]=useState('');
const[dataSource,setDataSource]=useState(initialData);
const[filterTable,setTableFilter]=useState([]);
const handleSearch= (e)=> {
  if(e.target.value!=""){
    setValue(e.target.value);
    const filterTable=dataSource.filter(v=>Object.keys(v).some(k=>String(v[k]).toUpperCase().includes(e.target.value.toUpperCase())));
    setTableFilter([...filterTable])
  }else{
    setValue(e.target.value);
    setDataSource([...dataSource])
  }

   
  }


        return (
            <div>
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                    <div className='visitorread'>
  <h2 styles="font-size:1.5vw;">Visitors List</h2>
  <p styles="font-size:1.2vw;">Search Visitor by Name:</p>  
  <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>DLnumber</th>
        <th>CarplateNumber</th>
     
      </tr>
    </thead>
        {value.length>0? filterTable.map((data)=>{
          return(
            <tr>
            <th>{data.Name}</th>
            <th>{data.Email}</th>
            <th>{data.Contact}</th>
            <th>{data.DLnumber}</th>
            <th>{data.CarplateNumber}</th>
            
            </tr>
          )
        })
      :
      dataSource.map((data)=>{
        return(
          <tr>
          <th>{data.Name}</th>
          <th>{data.Email}</th>
          <th>{data.Contact}</th>
          <th>{data.DLnumber}</th>
          <th>{data.CarplateNumber}</th>
      
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
 
export default ReadVisitor;


    