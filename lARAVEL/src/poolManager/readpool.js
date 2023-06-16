import React, { useState,Component, useEffect } from 'react';
import  '../buildingManager/ReadManager.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import axios from "axios";




const ReadPool=()=>{

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
    axios.get("http://127.0.0.1:8000/getpooldetails")
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
  <h2 styles="font-size:1.5vw;">Membership List</h2>
  <p styles="font-size:1.2vw;">Search by Name:</p>  
  <input styles="font-size:1.2vw;" className="form-control" id="myInput" value={value} onChange={handleSearch} type="text" placeholder="Search.."/>
  <br/>
  <table id="myTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>

      </tr>
    </thead>
       {value.length>0? filterTable.map((data)=>{
          return(
            <tr>
            <th>{data.name}</th>
            <th>{data.email}</th>

            </tr>
          )
        })
      : 
      dataSource.map((dataSource)=>{
        return(
          <tr>
            <th>{dataSource.name}</th>
            <th>{dataSource.email}</th>

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
 
export default ReadPool;