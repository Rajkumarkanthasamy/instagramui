import React, {useState} from 'react'
import Myactivitytabs from '../myactivitytabsphotosandvideos/MyactivityTabs'
import './Myactivitypost.css';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';

function Myactivitypost() {

    const [activetabs, setactivetabs] =useState("post")


  return (
    <div className='myactivity-post-continer'>
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
                    <PeopleAltIcon style={{padding:"0px 0.5rem"}}/> HIGHLIGHTS
                    </p>
                  </div>

                  <div className='own-taps-main-continer' style={{display:activetabs == "post" ? "block":"none"}}>
                    
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
                  <div className='own-taps-main-continer' style={{display:activetabs == "reels" ? "block":"none"}}>
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
  )

}

export default Myactivitypost