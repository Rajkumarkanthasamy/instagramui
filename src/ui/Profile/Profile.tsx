import React, { useState } from 'react'
import "./Profile.css"
import Navigationbar from '../Dashboeard/Navigationbar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ReactPlayer from 'react-player';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
function Profile() {

  const [activetabs, setactivetabs] =useState("post")
  const saranimg= "https://scontent.cdninstagram.com/v/t51.29350-15/432005099_394036000234050_7883267870094133867_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3MTkuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=2HTGzXIQT08Q7kNvgGFCMPI&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMyMzYxMzI3OTU0MDMyMzg5Ng%3D%3D.2-ccb7-5&oh=00_AfDgZVqwgJ7VNKA4KXSoy6dNcBkCp5WCYhcbzd2k1KoUMg&oe=663F66AC&_nc_sid=10d13b"
  return (
    <div className='own-profile-continer'>
      <div className='own-profile-nav-bar-continer'>
        <Navigationbar/>
        </div>
            <div className='own-profile-main'>
                <div className='own-profile-details-continer'>
                  <div className='own-profile-continer-left'>
                    <div className='own-profile-photo'>
                        <img src='https://mui.com/static/images/avatar/2.jpg'/>
                    </div>
                  </div>
                  <div className='own-profile-continer-right'>
                    <div className='own-profile-continer-right-header'>
                      <p className='own-profile-id'>Dhana_muthu_raaj</p>
                      <div className='own-profile-action-div'>
                        <p>Edit profile</p>
                        <KeyboardArrowDownIcon/>
                      </div>
                      <div className='own-profile-action-div'>
                        <p>View archive</p>
                      </div>
                      <div className='own-profile-action-div'>
                        <p>Ad tool</p>
                      </div>
                      <div>
                      <IconButton style={{margin:"0px", padding:"0px"}}>
                            <SettingsOutlinedIcon style={{ padding:"0px", borderRadius:"5px"}}/>
                          </IconButton>
                      </div>
                    </div>

                    <div className='own-profile-continer-friends'>
                      <p><span>0</span> posts</p>    
                      <p><span>2923</span> followers</p>    
                      <p><span>1021</span> following</p>    
                    </div>

                    <div className='own-profile-continer-friends-about'>
                      <p>Dhana_muthu_raaj</p>
                      <p>Not -living thing 🦁🦁🦁🦁</p>
                    </div>

                    <div className='own-profile-continer-friends-followed-by'>
                        <p><span>Followed by</span></p>
                        <p>Rajkumar_h_25, </p>
                        <p>Manju_nath_lo_01,</p>
                        <p> niroop_dsg </p>
                        <p><span>+ more</span></p>

                    </div>
                  </div>
                </div>

                <div className='own-profile-highlight-status-continer'>
                  {[1,2,3,4,5,6,7].map(()=>{
                    return(
                      <>
                    <div className='own-profile-highlight-status-div'>
                        <div className='own-profile-highlight-status-div-img'>
                          <img src='https://mui.com/static/images/avatar/2.jpg'/>
                        </div>
                        <p className='own-profile-highlight-status-div-img-p'>💟 status meaning</p>
                  </div>
                      </>
                    )
                  })}
                  

                </div>

                <div className='own-profile-tap-continer'>
                  <hr/>
                  <div className='own-profile-tap-continer-header'>

                    <p onClick={()=>setactivetabs("post")} className={`own-profile-tap-continer-header-p  ${activetabs == "post" ? "own-active-tabs" : ""}`}>
                      <CalendarViewMonthIcon style={{padding:"0px 0.5rem"}}/> POSTS
                    </p>
                    <p onClick={()=>setactivetabs("reels")} className={`own-profile-tap-continer-header-p  ${activetabs == "reels" ? "own-active-tabs" : ""}`}>
                      <VideoLibraryIcon style={{padding:"0px 0.5rem"}}/>REELS
                    </p>
                    <p onClick={()=>setactivetabs("photos")} className={`own-profile-tap-continer-header-p  ${activetabs == "photos" ? "own-active-tabs" : ""}`}>
                    <PeopleAltIcon style={{padding:"0px 0.5rem"}}/> TAGGED
                    </p>
                  </div>

                  <div className='own-taps-main-continer' style={{display:activetabs == "post" ? "block":"none"}}>
                    
                    <div className='own-profile-post-tap'>
                    {[1,2,3,4,5,6,7,8,9,0,].map(()=>{
                      return(
                        <div className='own-profile-tap-post-items'>
                        <img src="./Bikeimg.jpg" />
                        <div className='own-post-likes-commands'>
                          <div><FavoriteIcon style={{color:"#FFF", marginRight:"10px", fontSize:"2rem"}}/> 564</div>
                          <div><ModeCommentRoundedIcon style={{color:"#FFF", marginRight:"10px", fontSize:"2rem"}}/> 53</div>
                        </div>
                      </div>
                      
                      )
                    })}                    

                    </div>
                    
                    </div>
                  <div className='own-taps-main-continer' style={{display:activetabs == "reels" ? "block":"none"}}>
                  <div className='own-profile-post-tap'>
                    {[1,2,3,4,5,6,7,8,9,0,].map(()=>{
                      return(
                        <div className='own-profile-tap-post-items'>
                        <img src="./Flowers.jpg" />
                        <div className='own-post-likes-commands'>
                          <div><FavoriteIcon style={{color:"#FFF", marginRight:"10px", fontSize:"2rem"}}/> 564</div>
                          <div><ModeCommentRoundedIcon style={{color:"#FFF", marginRight:"10px", fontSize:"2rem"}}/> 53</div>
                        </div>
                      </div>
                      )
                    })}
                    </div>
                  </div>
                  <div className='own-taps-main-continer' style={{display:activetabs == "photos" ? "block":"none"}}>
                  <div className='own-profile-post-tap'>
                    {[1,2,3,4,5,6,7,8,9,0,].map(()=>{
                      return(
                        <div className='own-profile-tap-post-items'>
                        <img src="https://img.freepik.com/free-photo/motocross-rider-racing-large-cloud-dust-debris-generative-ai_8829-2892.jpg?ga=GA1.1.1597837065.1702438010&semt=sph" />
                        <div className='own-post-likes-commands'>
                          <div><FavoriteIcon style={{color:"#FFF", marginRight:"10px", fontSize:"2rem"}}/> 564</div>
                          <div><ModeCommentRoundedIcon style={{color:"#FFF", marginRight:"10px", fontSize:"2rem"}}/> 53</div>
                        </div>
                      </div>
                      )
                    })}
                    </div>
                  </div>

                  
                  
                </div>

            </div>
            </div>
  )
}

export default Profile;