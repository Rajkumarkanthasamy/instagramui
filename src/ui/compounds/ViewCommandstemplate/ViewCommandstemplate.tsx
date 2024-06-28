import React, { useEffect, useState } from 'react'
import './ViewCommandstemplate.css';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Backdrop from '@mui/material/Backdrop';
import { IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface Props {
    openbackdrop: any;
    closebacdrop : any;
  }

function ViewCommandstemplate(props:Props) {
    const [openBacdrop, setopenBacdrop] =useState(props.openbackdrop)

    useEffect(()=>setopenBacdrop(openBacdrop), openBacdrop)
  return (
    <>
   <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBacdrop}
        onClick={()=>setopenBacdrop(false)}
        
      >
    <div className='viewcommands-continer' >
        <div className='commands-close-button' onClick={()=>props.closebacdrop(false)}>
            <IconButton >
                <CloseIcon style={{fontSize:"2rem", backgroundColor:"#fff", color:"#000", borderRadius:"50%", padding:"0.5rem"}}/>
            </IconButton>
        </div>
        <div className='viewcommands-content'>
        <img src='https://img.freepik.com/free-photo/motocross-rider-racing-large-cloud-dust-debris-generative-ai_8829-2892.jpg?ga=GA1.1.1597837065.1702438010&semt=sph'/>

        </div>
        
        <div className='viewcommands'>
            <div className='viewcommands-header'>
            <div className='user-post-header'>
      <div className='commands-user-status-bar-div' >
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

          <div className='viewcommands-list'>

                <div className='user-post-header'>
                        <div className='commands-user-status-bar-div' >
                            <img src='https://mui.com/static/images/avatar/2.jpg'/>
                        </div>
                            <div className=''>
                            <p className='user-post-id-text-p'>Rajkumar_h_25</p>
                            </div>
                        <p className='user-post-id-text-p'>Tag details :) :) :) :)</p>
                 </div>   
          <div className='command-tag-list'>
          <a>#caps</a>
          <a>#caps</a>
          <a>#caps</a>
          <a>#caps</a>
          <a>#caps</a>
          <a>#caps</a>
          <a>#caps</a>
          </div>

          <div className='user-post-header'>
      <div className='commands-user-status-bar-div' >
           <img src='https://mui.com/static/images/avatar/2.jpg'/>
      </div>
        <div className=''>
          <p className='user-post-id-text-p'>Rajkumar_h_25</p>

          <p style={{fontSize:"0.9rem", margin:"1rem"}}>1w&nbsp;&nbsp;3liks&nbsp;&nbsp;Reply</p>
        </div>
        <p className='user-post-id-text-p'>command text</p>

        <IconButton><FavoriteBorderIcon/></IconButton>
          </div>  
          <div className='user-post-header'>
      <div className='commands-user-status-bar-div' >
           <img src='https://mui.com/static/images/avatar/2.jpg'/>
      </div>
        <div className=''>
          <p className='user-post-id-text-p'>Rajkumar_h_25</p>

          <p style={{fontSize:"0.9rem", margin:"1rem"}}>1w&nbsp;&nbsp;3liks&nbsp;&nbsp;Reply</p>
        </div>
        <p className='user-post-id-text-p'>command text</p>
        <IconButton><FavoriteBorderIcon/></IconButton>
          </div>  <div className='user-post-header'>
      <div className='commands-user-status-bar-div' >
           <img src='https://mui.com/static/images/avatar/2.jpg'/>
      </div>
        <div className=''>
          <p className='user-post-id-text-p'>Rajkumar_h_25</p>

          <p style={{fontSize:"0.9rem", margin:"1rem"}}>1w&nbsp;&nbsp;3liks&nbsp;&nbsp;Reply</p>
        </div>
        <p className='user-post-id-text-p'>command text</p>

        <IconButton><FavoriteBorderIcon/></IconButton>
          </div>   
          </div>
          <div className='command-like-msg-share'>
          <div className='commands-user-post-like-command-message-save-continer'>
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
              <div style={{marginRight:"1rem"}}>
              <IconButton>
                <BookmarkBorderOutlinedIcon style={{fontSize:"2rem"}}/>
              </IconButton>
              </div>
    </div>

            <p className='commands-like-continer'>12,020 likes</p>
            <div className='commands-input-post-continer'>
            <input className='command-input' type='text' placeholder='Add Commands'/>
            <button className='commands-post-button'>Post</button>
            </div>
          </div>

                
            </div>    
        </div>        
        </div>
        </Backdrop>
        </>
  )
}

export default ViewCommandstemplate

