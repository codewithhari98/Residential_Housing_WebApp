import React, { useState,Component } from 'react';
import  './ReadManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';



const ReadManager=()=>{
const initialData=[
  {Name: 'John Mayers',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
{Name: 'Tommy',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
{Name: 'Harsh',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
{Name: 'John Diggle',DOB:'01/01/2000' , ManagerID:'12345', Type:'Garden manager' ,SSN:'8569-8975-8759-7894', Contact:'5127412458', Password:'@123dsf', ManagerTimings:'9:00am',ManagerSalary:'100000$',ManagerdateofJoining:'01/01/2023'},
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
        <th>Type</th>
        <th>SSN</th>
        <th>Contact</th>
        <th>Password</th>
        <th>Manager Timings</th>
        <th>Manager Salary</th>
        <th>Manager date of Joining</th>
      </tr>
    </thead>
        {value.length>0? filterTable.map((data)=>{
          return(
            <tr>
            <th>{data.Name}</th>
            <th>{data.DOB}</th>
            <th>{data.ManagerID}</th>
            <th>{data.Type}</th>
            <th>{data.SSN}</th>
            <th>{data.Contact}</th>
            <th>{data.Password}</th>
            <th>{data.ManagerTimings}</th>
            <th>{data.ManagerSalary}</th>
            <th>{data.ManagerdateofJoining}</th>
            </tr>
          )
        })
      :
      dataSource.map((data)=>{
        return(
          <tr>
          <th>{data.Name}</th>
          <th>{data.DOB}</th>
          <th>{data.ManagerID}</th>
          <th>{data.Type}</th>
          <th>{data.SSN}</th>
          <th>{data.Contact}</th>
          <th>{data.Password}</th>
          <th>{data.ManagerTimings}</th>
          <th>{data.ManagerSalary}</th>
          <th>{data.ManagerdateofJoining}</th>
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