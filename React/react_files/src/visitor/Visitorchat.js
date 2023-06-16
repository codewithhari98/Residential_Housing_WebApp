import PopChat from '../components/Chat'
import Header from '../components/Header';
import Footer from '../components/Footer';
import VisitorSidebar from './VisitorSidebar';
import React, { Component } from 'react';
const msgs = ['hey, whatsup!', 'my oh, how ya doin ?', 'you know, chhht, like that ..','wanna meet ?afternoon',"good","bad"]
//function to retrive the message to be sent
const getMessage = (msg)=> {console.log(msg)}
class Chatwithmevisitor extends Component {
render(){
    return (<div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <VisitorSidebar/>
                                <div className ="content">
        <PopChat messages= {msgs} getMessage= {getMessage}/>
        </div>
        </div>
        <Footer></Footer>
        </div>
        </div>
        );
}
}

export default Chatwithmevisitor;