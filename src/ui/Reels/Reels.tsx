import React from 'react'
import './Reels.css';
import Navigationbar from '../Dashboeard/Navigationbar';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Reels() {
  return (
    <>
    <div className='reels-continer'>
     <div className='reels-nav-bar-continer'>
       <Navigationbar/>
       </div>
        <div className='reels-main'>

            
               
                {
                    [1,2,3,4,5,6,7,8,9].map(()=>{
                        return(
                            <>
                            <div className='reels-main-reels-continer'>
                             <div className='reels-continer-div'>

                                    <div className='reels-continer-div-video'>
                                    <img src='./Bikeimg.jpg'/>
                                    </div>
                                    <div className='reels-continer-div-action-button'>
                                        
                                    <div className='reels-action-icon-count-continer'>
                                            <IconButton style={{padding:"3px", color:"#000"}}>
                                                <FavoriteBorderRoundedIcon/>
                                            </IconButton>
                                        <p className='reels-action-count'>344</p>                   
                                        </div>
                                        <div className='reels-action-icon-count-continer'>
                                            <IconButton style={{padding:"3px", color:"#000"}}>
                                                <ModeCommentOutlinedIcon/>
                                            </IconButton>
                                            <p className='reels-action-count'>344</p>        
                                        </div>
                                        
                                        <div className='reels-action-icon-count-continer'>
                                            <IconButton style={{padding:"3px", color:"#000", rotate:"-30deg"}}>
                                                <SendIcon/>
                                            </IconButton>
                                                        
                                        </div>
                                        <div className='reels-action-icon-count-continer'>
                                            <IconButton style={{padding:"3px", color:"#000"}}>
                                                <BookmarkBorderIcon/>
                                            </IconButton>
                                        </div>
                                        <div className='reels-action-icon-count-continer'>
                                            <IconButton style={{padding:"3px", color:"#000"}}>
                                                <MoreHorizIcon/>
                                            </IconButton>          
                                        </div>
                                        <div className='reels-action-icon-count-continer reels-border reels-border-audio'>
                                            <img className='reels-action-icon-count-continer-img' src='./Bikeimg.jpg'/>
                                        </div>
                                    </div>

                                    </div>
                                    </div>
                            </>
                        )
                    })
                }

            </div>
        </div>

    
    </>
  )
}

export default Reels