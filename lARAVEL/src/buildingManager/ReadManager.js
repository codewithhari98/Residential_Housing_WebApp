import React, { useState,Component, useEffect } from 'react';
import  './ReadManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";




const ReadManager=()=>{

const initialData=[
  {Name: 'John Mayers',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
{Name: 'Tommy',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
{Name: 'Harsh',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
{Name: 'John Diggle',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
]

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
    axios.get("http://127.0.0.1:8000/getbuildingmanagerroute")
        .then(res => {
            console.log(res.data) 
            setDataSource(res.data)
        }).catch(error => {})
}
useEffect(() => {
    getBenefits();
}, []);


        return (
            <div>
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                    <div className='buildingread'>
  <h2 styles="font-size:1.5vw;">Managers List</h2>
  <p styles="font-size:1.2vw;">Search manager by Name:</p>  
  <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>DOB</th>
        <th>Manager ID</th>
        <th>Date of Joining</th>
        <th>SSN</th>
        <th>Contact</th>
        <th>Password</th>
        <th>Manager Salary</th>
        <th>Manager Start timr</th>
        <th>Manager End Time</th>
      </tr>
    </thead>
       {value.length>0? filterTable.map((data)=>{
          return(
            <tr>
            <th>{data.bm_name}</th>
            <th>{data.bm_dob}</th>
            <th>{data.bm_id}</th>
            <th>{data.bm_doj}</th>
            <th>{data.bm_ssn}</th>
            <th>{data.bm_dob}</th>
            <th>{data.bm_password}</th>
            <th>{data.bm_salary}</th>
            <th>{data.bm_starttime}</th>
            <th>{data.bm_endtime}</th>
            </tr>
          )
        })
      : 
      dataSource.map((dataSource)=>{
        return(
          <tr>
            <th>{dataSource.bm_name}</th>
            <th>{dataSource.bm_dob}</th>
            <th>{dataSource.bm_id}</th>
            <th>{dataSource.bm_doj}</th>
            <th>{dataSource.bm_ssn}</th>
            <th>{dataSource.bm_dob}</th>
            <th>{dataSource.bm_password}</th>
            <th>{dataSource.bm_salary}</th>
            <th>{dataSource.bm_starttime}</th>
            <th>{dataSource.bm_endtime}</th>
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
 
export default ReadManager;