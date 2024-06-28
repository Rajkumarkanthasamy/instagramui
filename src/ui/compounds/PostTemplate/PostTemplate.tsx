import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import './PostTemplate.css'
import { IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ViewCommandstemplate from '../ViewCommandstemplate/ViewCommandstemplate';
function PostTemplate() {

    const [opencaps, setopencaps] = useState(false)
    const [openbackdrop, setopenbackdrop] = useState(false)

    const closebacdrop =(value:any)=>{
        setopenbackdrop(value)
        alert(`backdrop closed! ${value}`)
    }
  return (
    <div>
         <div className='user-post-image-reels-continer'>

<div className='user-post-image-reels'>

  <div className='user-post-header'>
      <div className='user-status-bar-div' >
           <img src='https://mui.com/static/images/avatar/2.jpg'/>
      </div>
        <div className=''>
          <p className='user-post-id-text-p'>Rajkumar_h_25</p>
          <p style={{fontSize:"0.8rem", margin:"1px"}}>Original audio</p>
        </div>
        <p className='user-posted-date'>1w</p>
        <p className='user-post-follow-text'>Follow</p>
        <IconButton><MoreHorizOutlinedIcon/></IconButton>

  </div>
  <div className='user-post-div-img'>
    <img src='https://img.freepik.com/free-photo/motocross-rider-racing-large-cloud-dust-debris-generative-ai_8829-2892.jpg?ga=GA1.1.1597837065.1702438010&semt=sph'/>
  </div>

  <div className='user-post-like-command-message-save-continer'>
      <div className='user-post-like-msg-command-continer'>
                <div>
                <IconButton>
                  <FavoriteBorderIcon style={{fontSize:"2rem"}}/>
                  </IconButton>
                </div>
                <div>
                <IconButton>
                  <MapsUgcOutlinedIcon style={{fontSize:"2rem",}}/>
                </IconButton>
                </div>
                <div>
                <IconButton>
                  <SendOutlinedIcon style={{fontSize:"2rem", rotate:"-20deg"}}/>
                  </IconButton>
                </div>
              </div>
              <div>
              <IconButton>
                <BookmarkBorderOutlinedIcon style={{fontSize:"2rem"}}/>
              </IconButton>
              </div>
    </div>
<p className='user-post-likes'>23 Likes</p>
<div className='user-post-id-caps-continer'>
  <p className='user-post-id-bottom'>Rajkumar_h_25</p>
  <p className='user-caps'>Still feels like a dream to say this bike is mine</p>
  <button onClick={()=>setopencaps(!opencaps)} style={{backgroundColor:"#FFF", border:"none", fontSize:"1rem", color:"#00000095", cursor:"pointer"}}>more</button>
</div>
    <div className='user-more-caps' style={{display:opencaps? "block" : "none"}}>
        <a>#caps</a>
        <a>#caps</a>
        <a>#caps</a>
        <a>#caps</a>
        <a>#caps</a>
    </div>
</div>
<button style={{backgroundColor:"#FFF", border:"none", fontSize:"1rem", color:"#00000095", cursor:"pointer"}} >12,000 View All Commands</button><br/>
<input type='text' className='user-post-add-command' placeholder='Add Commands'/>
</div>
<div>
<ViewCommandstemplate openbackdrop={openbackdrop} closebacdrop={closebacdrop}/>
</div>
    </div>
  )
}

export default PostTemplate




