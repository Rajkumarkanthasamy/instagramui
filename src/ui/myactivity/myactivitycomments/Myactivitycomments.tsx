import React from 'react'
import './Myactivitycomments.css'
import Myactivitytabs from '../Myactivitytabs/Myactivitytabs'

function Myactivitycomments() {
var array = new Array(10).fill(0)
  return (
    <>
    <div className='myactivity-likes-main-continer'>
    <Myactivitytabs value={"comments"}/>
    <div className='myactivity-likes-filter-continer'>
        <p className='myactivity-likes-filter-text'>Newest to oldest</p>
        <button className='myactivity-likes-filter-button'>Sort & filter</button>
    </div>
        <div className='myactivity-likes-media-continer'>

            {
                array.map(()=>{
                    return(

                
                <>
            <div className='activity-comments-user-div'>        
                <div className='activity-comments-user-profile'>
                    <div className='activity-comments-user-img'>
                        <img src='https://mui.com/static/images/avatar/2.jpg'/>
                    </div>
                    <div className='activity-comments-user-id-date' >
                        <div style={{display:"flex"}}>
                        <p className='activity-comments-user-id'>Rajkumar_h_25</p>
                        <p className='activity-comments-user-date-text'>_user_comments_while_post</p>
                        </div>
                        <p className='activity-comments-user-date-text'>2w</p>
                    </div>
                </div>
                <div className='activity-comments-media-continer'>
                    <img src='https://img.freepik.com/free-photo/motocross-rider-racing-large-cloud-dust-debris-generative-ai_8829-2892.jpg?ga=GA1.1.1597837065.1702438010&semt=sph'/>
                </div>
            </div>

            <div className='activity-comments-user-div activity-comments-mycomments'>  

                <div className='activity-comments-user-profile'>
                    <div className='activity-comments-user-img'>
                        <img src='https://mui.com/static/images/avatar/2.jpg'/>
                    </div>
                    <div className='activity-comments-user-id-date' >
                        <div style={{display:"flex"}}>
                        <p className='activity-comments-user-id'>Rajkumar_h_25</p>
                        <p className='activity-comments-user-date-text'>_user_comments_while_post</p>
                        </div>
                        <p className='activity-comments-user-date-text'>2w</p>
                    </div>
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

export default Myactivitycomments