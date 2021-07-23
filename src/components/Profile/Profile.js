import React from 'react'
import './Profile.css'
import pp from '../../images/anindya.jpeg'
import {IoIosCall} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'

const Profile = () => {
    return (
        <>
         <div className="profile">
            <div className="profile-card">
                <div className="profile-pic">
                    <img className="ppp" src={pp} alt="profile pic"/>
                </div>
                <div className="profile-data">
                    <h3 className="profile-name">Anindya Kumar Patro</h3>
                    <div className="row-button">
                        <button className="btn1">
                            <IoIosCall/>
                            Call
                        </button>
                        <button className="btn2">
                            <FaUserAlt/>
                            Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="pfbg">
                <div className="details">
                    <h4>Customer Details</h4>
                    <div className="row-details">
                        <p className="titlep">Email:</p>
                        <p className="valp">anindya2001@gmail.com</p>
                    </div>
                    <div className="row-details">
                        <p className="titlep">First Name:</p>
                        <p className="valp">anindya</p>
                    </div>
                    <div className="row-details">
                        <p className="titlep">Last Name:</p>
                        <p className="valp">kumar</p>
                    </div>
                </div>
            </div>
         </div>   
        </>
    )
}

export default Profile
