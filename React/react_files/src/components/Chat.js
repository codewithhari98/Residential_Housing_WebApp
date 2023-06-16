import React, { useState } from 'react'
//import the css here
import './chat.css';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
  let textRef = React.createRef()
  const {messages} = props

  const [chatopen, setChatopen] = useState(true)
  const toggle = e => {
    setChatopen(!chatopen)
  }

const handleSend = e => {
  const get = props.getMessage
  get(textRef.current.value)
}

  return (
    
    <div id='chatCon'>
      <div className="chat-box" style={chatopen ? show : hide}>
    <div className="header">Chat with me</div>
    <div className="msg-area">
      {
        messages.map((msg, i) => (
          i%2 ? (
          <p className="right"><span>{ msg }</span></p>
          ) : (
            <p className="left"><span>{ msg }</span></p>
          )
          
        ))
      }

    </div>
    <div className="footer">
      <input type="text"  ref={textRef} />
      <button onClick={handleSend}><i className="material-icons" styles="font-size:3vh;">send</i></button>
    </div>
  </div>
    <div className="pop">
      <p><i onClick={toggle} className="material-icons">forum</i></p>
    </div>
    </div>
  )
}

export default PopChat;