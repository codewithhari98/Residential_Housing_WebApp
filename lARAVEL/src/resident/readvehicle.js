import React, { useState,Component, useEffect } from 'react';
import  '../buildingManager/ReadManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResidentSidebar from '../resident/sidebar';
import axios from "axios";




const ReadVehicle=()=>{

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
    axios.get(`http://127.0.0.1:8000/getvehiclelist`)
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
                                <ResidentSidebar/>
                                <div className ="content">
                                    <div className='buildingread'>
  <h2 styles="font-size:1.5vw;">Vehicle List</h2>
  <p styles="font-size:1.2vw;">Search Your Vehicle:</p>  
  <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>vehiclemodel</th>
        <th>vehicleyear</th>
        <th>vehiclecolor</th>
        <th>dlplatenumber</th>
      </tr>
    </thead>
       {value.length>0? filterTable.map((data)=>{
          return(
            <tr>
            <th>{data.vehiclemodel}</th>
            <th>{data.vehicleyear}</th>
            <th>{data.vehiclecolor}</th>
            <th>{data.dlplatenumber}</th>
            </tr>
          )
        })
      : 
      dataSource.map((dataSource)=>{
        return(
          <tr>
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
<Footer/>
                            </div>
            </div>
            
        );
    }
 
export default ReadVehicle;