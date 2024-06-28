import React from 'react'
import Navigationbar from '../Dashboeard/Navigationbar'
import './MyActivity.css'
import { IconButton } from '@mui/material'
import GestureIcon from '@mui/icons-material/Gesture';

function MyActivity() {
  return (
    <>
     <div className='activity-continer'>
      <div className='nav-bar-continer'>
        <Navigationbar/>
        </div>
            <div className='activity-main'>
                <div className='activity-table-continet'>
                    <div className='activity-left-nav-continer'>
                        <p className='activity-left-nav-header'>Your activity</p>

                        <div className='activity-left-nav-button-div'>
                            <div className='activity-nav-button-icon'>
                                <GestureIcon/>
                            </div>
                            <div className='activity-nav-button-details'>
                                <p className='activity-nav-button-details-header'>Interactions</p>
                                <p className='activity-nav-button-details-p'>Review and delete likes, comments, and your other Interactions.</p>
                            </div>
                        </div>

                        <div className='activity-left-nav-button-div'>
                            <div className='activity-nav-button-icon'>
                                <GestureIcon/>
                            </div>
                            <div className='activity-nav-button-details'>
                                <p className='activity-nav-button-details-header'>Photos and videos</p>
                                <p className='activity-nav-button-details-p'>View, archive or delete photos and videos you've shared.</p>
                            </div>
                        </div>

                        <div className='activity-left-nav-button-div'>
                            <div className='activity-nav-button-icon'>
                                <GestureIcon/>
                            </div>
                            <div className='activity-nav-button-details'>
                                <p className='activity-nav-button-details-header'>Account history</p>
                                <p className='activity-nav-button-details-p'>Review changes you've made to your acccount since you created it.</p>
                            </div>
                        </div>

                        <div className='activity-left-nav-button-div'>
                            <div className='activity-nav-button-icon'>
                                <GestureIcon/>
                            </div>
                            <div className='activity-nav-button-details'>
                                <p className='activity-nav-button-details-header'>Ad activity</p>
                                <p className='activity-nav-button-details-p'>See which ads you've interacted with recently.</p>
                            </div>
                        </div>

                        <div className='activity-left-nav-button-div'>
                            <div className='activity-nav-button-icon'>
                                <GestureIcon/>
                            </div>
                            <div className='activity-nav-button-details'>
                                <p className='activity-nav-button-details-header'>Download your information</p>
                                <p className='activity-nav-button-details-p'>Download a copy of the information you,ve shared with instagram.</p>
                            </div>
                        </div>
                    </div>
                    <div className='activity-right-nav-continer'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyActivity