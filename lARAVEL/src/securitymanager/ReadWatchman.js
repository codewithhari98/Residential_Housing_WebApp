import React, { useState,Component, useEffect } from 'react';
import './ReadWatchman.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";


const ReadWatchman = () => {
  /* const initialData=[
    {Name: 'John Mayers',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
  {Name: 'Tommy',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
  {Name: 'Harsh',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
  {Name: 'John Diggle',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
  ]  */

  const [value,setValue]=useState('');
const[dataSource,setDataSource]=useState([]);
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
  const getBenefits = () => {
    axios.get("http://127.0.0.1:8000/getsecuritymanagerroute")
        .then(res => {
          return res.data
        }).then(data => {
          console.log(data)
          setDataSource(data)
        }).catch(error => {}) 
}
useEffect(() => {
    getBenefits();
}, []);
  
  return (
            <div>
                <link rel="stylesheet" href="header_footer_sidebar.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div className="parent">
                    <Header></Header>
                    <div className="main">
                        < Sidebar/>
                        <div className="content">
                            <div className='securityread'>
                                <h2 styles="font-size:1.5vw;">Watchmen List</h2>
                                <p styles="font-size:1.2vw;">Search Watchman by Name:</p>
                                <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
                                <br />
                                <table id="myTable">
                                    <thead>
                                        <tr>
                                        <th>Watchman ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>SSN</th>
                                            <th>DOB</th>
                                            <th>Watchman date of Joining</th>
                                            <th>Watchman Salary</th>
                                            <th>Start time</th>
                                            <th>End time</th>                              
                                           
                                        </tr>
                                    </thead>
                                    {value.length>0? filterTable.map((data)=>{
                                      return(
                                    <tr>
                                        <th>{data.sm_id}</th>
                                        <th>{data.sm_name}</th> 
                                        <th>{data.sm_email}</th>
                                        <th>{data.sm_contact}</th> 
                                        <th>{data.sm_ssn}</th>
                                      
                                        <th>{data.sm_dob}</th> 
                                        <th>{data.sm_doj}</th>    
                                        <th>{data.sm_salarys}</th> 
                                        <th>{data.sm_starttime}</th>       
                                        <th>{data.sm_endtime}</th>
                                      </tr>
                                      )
                                    })
                                    :
                                    dataSource.map((dataSource) => {
                                      return(
                                        <tr>
                                          <th>{dataSource.sm_id}</th>
                                          <th>{dataSource.sm_name}</th>
                                          <th>{dataSource.sm_email}</th>
                                          <th>{dataSource.sm_contact}</th>
                                          <th>{dataSource.sm_ssn}</th>
                                         
                                          <th>{dataSource.sm_dob}</th>
                                          <th>{dataSource.sm_doj}</th>
                                          <th>{dataSource.sm_salary}</th>
                                          <th>{dataSource.sm_starttime}</th>
                                          <th>{dataSource.sm_endtime}</th>
                                        </tr>
                                      )
                                    })
                                    
                                  } 
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        );
    }

export default ReadWatchman;