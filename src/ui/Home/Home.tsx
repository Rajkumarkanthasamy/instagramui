import React from 'react'
import './Home.css'
import Navigationbar from '../Dashboeard/Navigationbar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PostTemplate from '../compounds/PostTemplate/PostTemplate';
function Home() {
  return (
    <div className='home-continer'>
      <div className='nav-bar-continer'>
        <Navigationbar/>
        </div>
            <div className='home-main'>

              <div className='user-status-bar'>
                <div className='user-status-bar-div user-news-status' >
                  <img src='https://mui.com/static/images/avatar/2.jpg'/>
                </div>
                <div className='user-status-bar-div user-news-status'>
                  <img src='https://mui.com/static/images/avatar/2.jpg'/>
                </div>
                <div className='user-status-bar-div'>
                  <img src='https://mui.com/static/images/avatar/2.jpg'/>
                </div>
                <div className='user-status-bar-div'>
                  <img src='https://mui.com/static/images/avatar/2.jpg'/>
                </div>
              </div>


           {
            [1,2,3,4,5,6,7,8].map(()=>{
              return(
                <PostTemplate/>
              )
            })
           }
           
            </div>
    </div>
  )
}

export default Home

