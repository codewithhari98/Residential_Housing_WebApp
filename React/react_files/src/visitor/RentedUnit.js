import React, { Component } from 'react';
import "./RentedUnit.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

class RentedUnit extends Component {
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
            <Sidebar></Sidebar>
            <div className="content">
              <form>
                <h2>Rented Appartments  </h2>
                <div className="grid-container">
                    <div>
                        <p><b>Cabins</b></p>
                         <table className='table'>
                          <tr>
                            <td>Cabin Number</td>
                            <td>Rented Amount</td>
                          </tr>
                          <tr>
                            <td>1010</td>
                            <td>$1150</td>
                          </tr>
                          <tr>
                            <td>1050</td>
                            <td>$1250</td>
                          </tr>
                          <tr>
                            <td>1065</td>
                            <td>$1050</td>
                          </tr>
                          <tr>
                            <td>1075 </td>
                            <td>$1250</td>
                          </tr>
                          <tr>
                            <td>1090</td>
                            <td>$1150</td>
                          </tr>
                          <tr>
                            <td>1095</td>
                            <td>$1050</td>
                          </tr>
                          
                         </table>
                    
                    </div> 
                    <div>
                        <p><b>Studios</b></p>
                       
                        <table className='table'>
                          <tr>
                            <td>Studio Number</td>
                            <td>Rented Amount</td>
                          </tr>
                          <tr>
                            <td>2010</td>
                            <td>$1300</td>
                          </tr>
                          <tr>
                            <td>2020</td>
                            <td>$1250</td>
                          </tr>
                          <tr>
                            <td>2035</td>
                            <td>$1350</td>
                          </tr>
                          <tr>
                            <td>2050 </td>
                            <td>$1300</td>
                          </tr>
                          <tr>
                            <td>2055</td>
                            <td>$1250</td>
                          </tr>
                          <tr>
                            <td>2080</td>
                            <td>$1375</td>
                          </tr>
                          <tr>
                            <td>2085</td>
                            <td>$1350</td>
                          </tr>
                          <tr>
                            <td>2090</td>
                            <td>$1300</td>
                          </tr>
                          <tr>
                            <td>2095</td>
                            <td>$1250</td>
                          </tr>
                         
                          
                         </table>
                    </div>
                    <div>
                        <p><b>Townhomes</b></p>
                        
                        <table className='table'>
                          <tr>
                            <td>Townhome Number</td>
                            <td>Rented Amount</td>
                          </tr>
                          <tr>
                            <td>3010</td>
                            <td>$2050</td>
                          </tr>
                          <tr>
                            <td>3015</td>
                            <td>$2100</td>
                          </tr>
                          <tr>
                            <td>3025</td>
                            <td>$2175</td>
                          </tr>
                          <tr>
                            <td>3030 </td>
                            <td>$2000</td>
                          </tr>
                          <tr>
                            <td>3040</td>
                            <td>$2050</td>
                          </tr>
                          <tr>
                            <td>3055</td>
                            <td>$2030</td>
                          </tr>
                          <tr>
                            <td>3070</td>
                            <td>$2175</td>
                          </tr>
                          <tr>
                            <td>3095</td>
                            <td>$2200</td>
                          </tr>
                          
                         </table>
                      
                    </div>
                    
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

export default RentedUnit;

