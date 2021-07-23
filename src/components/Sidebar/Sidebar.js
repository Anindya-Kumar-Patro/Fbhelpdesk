import React from 'react'
import {BsFillInboxFill,BsPeopleFill,BsFillBarChartFill} from 'react-icons/bs'
import './Sidebar.css'
import rp from '../../images/rp.png'

const Sidebar = () => {
    return (
        <>
         <div className = "sidenav">
             <ul>
                 <li className = "list">
                     <a>
                         <img className="logo" src={rp} alt="Richpanel Logo"/>
                     </a>
                 </li>

                 <li className = "list active">
                     <a href="#" href="#">
                         
                           <BsFillInboxFill size="1.5rem"/> 
                           
                         
                     </a>
                 </li>

                 <li className = "list">
                     <a href="#">
                         
                             <BsPeopleFill size="1.5rem"/>
                           
                         
                     </a>
                 </li>

                 <li className = "list">
                     <a href="#">
                         
                             <BsFillBarChartFill size="1.5rem"/>
                           
                         
                     </a>
                 </li>

                 
             </ul>

        </div>   
        </>
    )
}

export default Sidebar
