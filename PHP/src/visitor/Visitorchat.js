
import React, {useState} from 'react';
import {ChatEngine, getOrCreateChat} from 'react-chat-engine'
import Header from '../components/Header';
import Footer from '../components/Footer';
import VisitorSidebar from '../visitor/VisitorSidebar';

const Chatwithmevisitor = () => {


    return (

        <div> 
            <link rel="stylesheet" href="header_footer_sidebar.css"/>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                            <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <VisitorSidebar/>
                                <div className ="content">
            		<ChatEngine
			projectID='5c22787c-3246-4da3-abe2-58e46274a8c1'
			userName='ash'
			userSecret='ash'
		/>
        {/* <ChatEngine
        projectID='5c22787c-3246-4da3-abe2-58e46274a8c1'
        userName='manager'
        userSecret='manager'
    /> */}
        </div>
        </div>
        <Footer/>
                            </div>
            </div>


	);
}

export default Chatwithmevisitor;