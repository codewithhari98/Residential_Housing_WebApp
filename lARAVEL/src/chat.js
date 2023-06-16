import React, { useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';


function Chat() {
  const socket = io('http://localhost:3000');

  useEffect(() => {
    const messageContainer = document.getElementById('message-container');
    const messageForm = document.getElementById('send-container');
    const messageInput = document.getElementById('message-input');

    const name = prompt('What is your name?');
    appendMessage('You joined');
    socket.emit('new-user', name);

    socket.on('chat-message', (data) => {
      appendMessage(`${data.name}: ${data.message}`);
    });

    socket.on('user-connected', (name) => {
      appendMessage(`${name} connected`);
    });

    socket.on('user-disconnected', (name) => {
      appendMessage(`${name} disconnected`);
    });

    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = messageInput.value;
      appendMessage(`You: ${message}`);
      socket.emit('send-chat-message', message);
      messageInput.value = '';
    });

    function appendMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.innerText = message;
      messageContainer.append(messageElement);
    }
  }, [socket]);

  return (
    
    <div>
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <div className="parent">
                            <Header></Header>
                            <div className="main">
                                <Sidebar/>
                                <div className ="content">
      <div id="message-container" className='msgcntr'></div>

      <form id="send-container" className="Chatform">
        <input  className="ip"  type="text" id="message-input" />
        <button type="submit" id="send-button">
          Send
        </button>
      </form>
      <script defer src="http://localhost:3000/socket.io/socket.io.js"></script>

    </div>
    </div>
                            <Footer></Footer>
                            </div>
                            </div>
  );
}

export default Chat;







