import React from 'react'
import './Chatbody.css'
import ConvoList from '../ConvoList/ConvoList'
import ChatArea from '../ChatArea/ChatArea'
import Profile from '../Profile/Profile'

const Chatbody = () => {
    return (
        <>
            <div className="main_chatbody">
                <ConvoList/>
                <ChatArea/>
                <Profile/>
            </div>   
        </>
    )
}

export default Chatbody
