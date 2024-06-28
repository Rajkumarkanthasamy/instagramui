import React from 'react'
import "./Notification.css";
import Navigationbar from '../Dashboeard/Navigationbar';
import { Divider } from '@mui/material';

function Notification() {
  return (
    <div className='notification-continer'>
      <div className='notification-nav-bar-continer'>
        <Navigationbar/>
        </div>
            <div className='notification-main'>
                <div className='notification-header'>
                    <p>Notifications</p>
                </div>
                    <div className='notification-list-continer'>
                        <div className='notification-recent-header'><p>Recent</p></div>
                        {/* message.css */}
                        {
                            [1,2].map(()=>{
                                return(
                                    <>
                                    <div className='notification-message-continer'>
                                            <div className='notification-id-continer'>
                                            <div className='notification-profile-div'>
                                                <img src='https://mui.com/static/images/avatar/2.jpg'/>
                                            </div>
                                            <div className='message-search-user-id-about-continer'>
                                                <p className='notification-id-about-continer-id'>
                                                    Dhaha_muthu_raaj
                                                    <p className='notification-id-about-continer-about'>Started to following you</p>
                                                </p>
                                                <p className='notification-id-about-continer-about'>Non_living_things</p>
                                            </div>
                                             </div>
                                             <button className='notification-follow-button'>Follow</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                        <Divider/>
                        <div className='notification-recent-header'><p>Yesterday</p></div>

                        {
                            [1,2,3,4].map(()=>{
                                return(
                                    <>
                                    <div className='notification-message-continer'>
                                            <div className='notification-id-continer'>
                                            <div className='notification-profile-div'>
                                                <img src='https://mui.com/static/images/avatar/2.jpg'/>
                                            </div>
                                            <div className='message-search-user-id-about-continer'>
                                                <p className='notification-id-about-continer-id'>
                                                    Dhaha_muthu_raaj
                                                    <p className='notification-id-about-continer-about'>Liked you post</p>
                                                </p>
                                                <p className='notification-id-about-continer-about'>Non_living_things</p>
                                            </div>
                                             </div>
                                             <button className='notification-follow-button'>Follow</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    <Divider/>
                    <div className='notification-recent-header'><p>Last Week</p></div>
                    {
                            [1,2,3,4].map(()=>{
                                return(
                                    <>
                                    <div className='notification-message-continer'>
                                            <div className='notification-id-continer'>
                                            <div className='notification-profile-div'>
                                                <img src='https://mui.com/static/images/avatar/2.jpg'/>
                                            </div>
                                            <div className='message-search-user-id-about-continer'>
                                                <p className='notification-id-about-continer-id'>
                                                    Dhaha_muthu_raaj
                                                    <p className='notification-id-about-continer-about'>Started to following you</p>
                                                </p>
                                                <p className='notification-id-about-continer-about'>Non_living_things</p>
                                            </div>
                                             </div>
                                             <button className='notification-follow-button'>Follow</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    
                    
            </div>
    </div>
  )
}

export default Notification