import React from 'react'
import './Message.css'
import Navigationbar from '../Dashboeard/Navigationbar'
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';


function Message() {



    var messageData =[
        {me:"hi"},{you:"hi bro"},{you:"where r u"}, {me:"I am in India"},
    ]
  return (
    <div className='message-continer'>
    <div className='message-nav-bar-continer'>
      <Navigationbar/>
      </div>
          <div className='message-main'>
          <Box
      sx={{ width: 350, }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
        <p className='message-search-text'>Dhana_muthu_raaj</p>
        <div className='message-search-input-continer'>
        <input type='text' className='message-search-input'/>
        <IconButton><CloseIcon style={{fontSize:"10px", backgroundColor:"#AAAaaa55", borderRadius:"50%", color:"#fff", padding:"2px"}}/></IconButton>
        </div>
        <p className='message-recent-text'>Recent</p>
        <Divider />
      <List>
        {[2,3,4,5,6,7,8,9,].map(()=>{
            return(
              <Link to={""}>
                <div className='message-search-react-ids-continer'>
            <div className='message-profile-div'>
                <img src='https://mui.com/static/images/avatar/2.jpg'/>
            </div>
            <div className='message-search-user-id-about-continer'>
                <p className='message-search-user-id-about-continer-id'>Dhaha_muthu_raaj</p>
                <p className='message-search-user-id-about-continer-about'>Followed Manju_nath_lo</p>
            </div>
        </div>
        </Link>
        
            )
        })}
        
      </List>
      
    </Box>

    <div className='message-chart-continer'>
        <div className='message-chart-continer-header'>
                <div className='message-chart-continer-header-profile'>
                <div className='message-search-react-ids-continer'>
                <div className='message-profile-div'>
                    <img src='https://mui.com/static/images/avatar/2.jpg'/>
                </div>
                <div className='message-search-user-id-about-continer'>
                    <p className='message-search-user-id-about-continer-id'>Dhaha_muthu_raaj</p>
                    <p className='message-search-user-id-about-continer-about'>Non_living_things</p>
                </div>
            </div>
            </div>
            <div className='message-chart-continer-header-call-help'>
                    <IconButton ><LocalPhoneOutlinedIcon style={{fontSize:"1.5rem", color:"#000"}}/></IconButton>
                    <IconButton ><DuoOutlinedIcon style={{fontSize:"1.5rem", color:"#000"}}/></IconButton>
                    <IconButton ><HelpOutlineOutlinedIcon style={{fontSize:"1.5rem", color:"#000"}}/></IconButton>
            </div>
        </div>


            
        <div className='message-chart-coversation-continer'>
            <div className='message-chart-coversation-continer-inner'>
                {
                    messageData.map((message)=>{
                        var messageFrom:string = Object.keys(message).toString()
                        
                        return(
                            <>
                            <div style={{width:"100%", display:"flex", justifyContent:messageFrom == "me" ?  "end" : "start", alignItems:"center", height:"auto"}}>
                                <div className='message-chart-coversation'  style={{backgroundColor:messageFrom == "me"?"#00bfff":"#cacaca" , color:messageFrom == "me"?"#fff":"#000"}}>
                                    {messageFrom == "me"? message.me : message.you}
                                    </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>



        <div className='message-chart-continer-footer'>
            <div className='message-chart-continer-footer-actione-continer'>
                <div>
                <IconButton ><SentimentSatisfiedAltOutlinedIcon style={{fontSize:"2rem", color:"#000"}}/></IconButton>
                </div>
                <div style={{width:"80%"}}>
                    <input className='message-chart-input' placeholder='Message...' type='text' style={{width:"100%"}}/>
                </div>
                <div className='message-chart-continer-header-call-help'>
                    <IconButton ><KeyboardVoiceOutlinedIcon style={{fontSize:"1.5rem", color:"#000"}}/></IconButton>
                    <IconButton ><ImageOutlinedIcon style={{fontSize:"1.5rem", color:"#000"}}/></IconButton>
                    <IconButton ><FavoriteBorderOutlinedIcon style={{fontSize:"1.5rem", color:"#000"}}/></IconButton>
            </div>
            </div>
        </div>
    </div>



          </div>
          </div>
  )
}

export default Message