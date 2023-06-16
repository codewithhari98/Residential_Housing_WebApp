import React, { useState,Component, useEffect } from 'react';
import  './ReadResident.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";




const ReadResident=()=>{

// const initialData=[
//   {Name: 'John Mayers',Email:'usha@gmail.com',Contact:'5127422458',SSN:'856989757',Password:'@123dsf',DOB:'01/01/2000' ,MoveInDate:'01/01/2023',MoveOutDate:'10/01/2023'},
// {Name: 'Tommy',Email:'usha01@gmail.com',Contact:'5127432458',SSN:'856967890',  Password:'@123dsf',DOB:'01/01/2000' , MoveInDate:'01/01/2023',MoveOutDate:'10/05/2023'},
// {Name: 'Harsh',Email:'usha02@gmail.com',Contact:'5127442458',SSN:'856998765',  Password:'@123dsf',DOB:'01/01/2000', MoveInDate:'01/01/2023',MoveOutDate:'10/07/2023'},
// {Name: 'John Diggle',Email:'usha03@gmail.com',Contact:'5127415458',SSN:'856978975', Password:'@123dsf',DOB:'01/01/2000' , MoveInDate:'01/01/2023',MoveOutDate:'10/09/2023'},
// ]

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
    axios.get("http://127.0.0.1:8000/getresidentroute")
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
                            <link rel="stylesheet" href="header_footer_sidebar.css"/>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
                                    <div className='buildingread'>
  <h2 styles="font-size:1.5vw;">Residents List</h2>
  <p styles="font-size:1.2vw;">Search Resident by Name:</p>  
  <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
    <thead>
      <tr>
      <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>SSN</th>
        <th>Password</th>
        <th>DOB</th>
        <th>Movein date</th>
        <th>Moveout date</th>
      </tr>
    </thead>
       {value.length>0? filterTable.map((data)=>{
          return(
            <tr>
            <th>{data.name}</th>
            <th>{data.email}</th>
            <th>{data.contact}</th>
            <th>{data.ssn}</th>
            <th>{data.password}</th>
            <th>{data.dob}</th>
            <th>{data.movein}</th>
            <th>{data.moveout}</th>
            </tr>
          )
        })
      : 
      dataSource.map((dataSource)=>{
        return(
          <tr>
            <th>{dataSource.name}</th>
            <th>{dataSource.email}</th>
            <th>{dataSource.contact}</th>
            <th>{dataSource.ssn}</th>
            <th>{dataSource.password}</th>
            <th>{dataSource.dob}</th>
            <th>{dataSource.movein}</th>
            <th>{dataSource.moveout}</th>
            
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
 
export default ReadResident;