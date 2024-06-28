import React from 'react'
import './MyactivityStoryReplies.css'
import Myactivitytabs from '../Myactivitytabs/Myactivitytabs'

function Myactivitystoryreplies() {

var array = new Array(15).fill(0)
  return (
    <>
    <div className='myactivity-likes-main-continer'>
    <Myactivitytabs value={"story"}/>
    <div className='myactivity-likes-filter-continer'>
        <p className='myactivity-likes-filter-text'>Newest to oldest</p>
        <button className='myactivity-likes-filter-button'>Sort & filter</button>
    </div>
        <div className='myactivity-likes-media-continer'>

            {
                array.map(()=>{
            return(
                <>

            <div className='activity-comments-user-div' style={{display:"flex", justifyContent:"start", alignItems:"center", padding:"0px 1rem", height:"4rem"}}>    

                <div className='activity-comments-user-profile'>

                    <div className='activity-comments-user-img'>
                        <img src='https://mui.com/static/images/avatar/2.jpg'/>
                    </div>

                    <div className='activity-comments-user-id-date' >
                        <div style={{display:"flex"}}>
                        <p className='activity-comments-user-id'>Rajkumar_h_25</p>
                        <p className='activity-comments-user-date-text'>_user_comments_while_post</p>
                        </div>
                    </div>
                    
                </div>
                <div className='activity-comments-media-continer' style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                    <p className='activity-comments-user-date-text'>5w</p>
                </div>
            </div>

            </>
                )})
        }
        </div>
    </div>
    
    </>
  )

}

export default Myactivitystoryreplies