import React, {useState} from 'react'
import './ConvoList.css'
import {RiBarChartHorizontalFill} from 'react-icons/ri'
import {AiOutlineReload} from 'react-icons/ai'


const ConvoList = () => {
    const [users, setUser] = useState([{
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        id: 1,
        name: "Tim Hover",
        active: true,
        isOnline: true,
      },
      {
        image:
          "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        id: 2,
        name: "Ayub Rossi",
        active: false,
        isOnline: false,
      }])
    return (
        <>
        <div className="convolist">
            <div className="heading">
                <div className="icon">
                <RiBarChartHorizontalFill/>
                </div>

                <h2>Conversations</h2>

                <div className="icon-reload">
                <AiOutlineReload/>
                </div>
            </div>  
            
        </div> 
        </>
    )
}

export default ConvoList
