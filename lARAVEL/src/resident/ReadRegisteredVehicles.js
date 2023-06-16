import React, { useState,Component, useEffect } from 'react';
import  '../gardenManager/ReadResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
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
    axios.get("http://127.0.0.1:8000/getResidentregistervehicle")
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
                        < ResidentSidebar/>
                        <div className="content">
                            <div className='securityread'>
                                <h2 styles="font-size:1.5vw;">Registered Vehicles List</h2>
                                <p styles="font-size:1.2vw;">Search Vehicles Registered:</p>
                                <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
                                <br />
                                <table id="myTable">
                                    <thead>
                                        <tr>
                                        
                                        <th>Email</th>
                                        <th>Vehicle Model</th>
                                        <th>Vehicle Year</th>
                                        <th>Vehicle Color</th>
                                        <th>License Plate Number</th>                             
                                           
                                        </tr>
                                    </thead>
                                    {value.length>0? filterTable.map((data)=>{
                                      return(
                                    <tr>
                                        <th>{data.email}</th>
                                        <th>{data.vehiclemodel}</th> 
                                        <th>{data.vehicleyear}</th>
                                        <th>{data.vehiclecolor}</th> 
                                        <th>{data.dlplatenumber}</th>
                                      
                                        
                                      </tr>
                                      )
                                    })
                                    :
                                    dataSource.map((dataSource) => {
                                      return(
                                        <tr>
                                          <th>{dataSource.email}</th>
                                          <th>{dataSource.vehiclemodel}</th>
                                          <th>{dataSource.vehicleyear}</th>
                                          <th>{dataSource.vehiclecolor}</th>
                                          <th>{dataSource.dlplatenumber}</th>
                                         
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