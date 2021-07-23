import React from 'react'
import './ChatArea.css'
import pp from '../../images/anindya.jpeg'

const ChatArea = () => {
    return (
        <>
         <div className="chatArea">
            <div className="chat-heading">
                <img src={pp} alt="profilepic" className="pppp"/>
                <div className="user-name"><h4>Anindya Kumar Patro</h4></div>
            </div>
            <div className="chat-body">This is the chat body</div>
            <div className="chat-footer">
                <input type="text" placeholder="Enter message here" name="message"/>
            </div>
        </div>   
        </>
    )
}

export default ChatArea
