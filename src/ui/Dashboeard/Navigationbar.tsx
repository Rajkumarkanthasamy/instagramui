import React, { useState } from 'react'
import "./Navigationbar.css"
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GestureIcon from '@mui/icons-material/Gesture';

function Navigationbar() {

  const [openMoreOption, setopenMoreOption] = useState(false);

  const moreOption=()=>{
    return(
      <>
       <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openMoreOption}
        onClick={()=>setopenMoreOption(!openMoreOption)}
      >
        <div className='nav-more-option-continer' >
           <div className='nav-more-option-continer-inner-fr'>
                <Link to={"/setting/editprofile"}>
                  <button className='nav-more-option-continer-nav-bt'> <SettingsOutlinedIcon style={{fontSize:"1.5rem", paddingRight:"1rem"}}/> Setting</button>
                </Link>
                 <Link to={"/myactivity/likes"}>
                  <button className='nav-more-option-continer-nav-bt'> <ShowChartOutlinedIcon style={{fontSize:"1.5rem", paddingRight:"1rem"}}/> Your activity</button>
                </Link> 
                <Link to={"/home"}>
                  <button className='nav-more-option-continer-nav-bt'> <BookmarkBorderOutlinedIcon style={{fontSize:"1.5rem", paddingRight:"1rem"}}/> Saved</button>
                </Link>
                 <Link to={"/home"}>
                  <button className='nav-more-option-continer-nav-bt'> <WbSunnyIcon style={{fontSize:"1.5rem", paddingRight:"1rem"}}/> Switch appearance</button>
                </Link>
                 <Link to={"/home"}>
                  <button className='nav-more-option-continer-nav-bt'> <ReportGmailerrorredOutlinedIcon style={{fontSize:"1.5rem", paddingRight:"1rem"}}/> Repoart a problem</button>
                </Link>
            </div>  
                <div className='nav-more-option-continer-inner-sec'> 
                    <Link to={"/home"}>
                      <button className='nav-more-option-continer-nav-bt nav-more-option-continer-nav-bt-margin'> <GestureIcon style={{fontSize:"1.5rem", paddingRight:"1rem"}}/> Threads</button>
                    </Link>
                    </div>  
                <div className='nav-more-option-continer-inner-sec'> 
                    <Link to={"/home"}>
                      <button className='nav-more-option-continer-nav-bt nav-more-option-continer-nav-bt-margin' style={{paddingLeft:"1rem"}}>Switch accounts</button>
                    </Link>
                    </div>  
                <div className='nav-more-option-continer-inner-sec'> 
                    <Link to={"/home"}>
                      <button className='nav-more-option-continer-nav-bt nav-more-option-continer-nav-bt-margin' style={{paddingLeft:"1rem"}}> Log out</button>
                    </Link>
                </div> 
        </div>
      </Backdrop>
    </div>
      </>
    )
  }
  return (
    <div className='nav-continer'>

        <p className='nav-continer-header'>Story Vista</p>
        <div className='nav-link-continer'>
        <Link to={"/home"}>
            <button className='nav-button div-icon-button'> <HomeIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Home</button>
           <div className='nav-icon-buttons'><HomeIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 
        </Link>
        <Link to={""}>
            {/* <button className='nav-button div-icon-button'> <SearchIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Search</button> */}
            {AnchorTemporaryDrawer()}
        </Link>
        <Link to={"/explore"}>
            <button className='nav-button div-icon-button'> <ExploreIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Explore</button>
            <div className='nav-icon-buttons'><ExploreIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 


        </Link>
        <Link to={"/reels"}>
            <button className='nav-button div-icon-button'> <SlowMotionVideoIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Reels</button>
            <div className='nav-icon-buttons'><SlowMotionVideoIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 

        </Link>
        <Link to={"/message"}>
            <button className='nav-button div-icon-button'> <SendIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem", rotate:"-20deg"}}/> Message</button>
            <div className='nav-icon-buttons'><SendIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem", rotate:"-20deg"}}/></div> 


        </Link>
        <Link to={"/notification"}>
            <button className='nav-button div-icon-button'> <FavoriteBorderIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Notification</button>
            <div className='nav-icon-buttons'><FavoriteBorderIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 

            
        </Link>
        <Link to={"/post"}>
            <button className='nav-button div-icon-button'> <AddBoxIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Create</button>
            <div className='nav-icon-buttons'><AddBoxIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 


        </Link>
        <Link to={"/profile"}>
            <button className='nav-button div-icon-button'>  <Avatar style={{ marginLeft:"2.8rem", marginRight:"1rem", }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" /> Profile</button>
            <div className='nav-icon-buttons'><Avatar style={{ marginLeft:"2.8rem", marginRight:"1rem", }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" /></div>

        </Link>
        <Link to={""}>
            <button onClick={()=>setopenMoreOption(!openMoreOption)} className='nav-button div-icon-button'> <MenuIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}} /> More</button>
            <div className='nav-icon-buttons'><MenuIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 
            {moreOption()}
        </Link>
        </div>


    </div>
  )
}

export default Navigationbar;



type Anchor = 'top' | 'left' | 'bottom' | 'right';

function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
  
    left: false,
    
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
        <p className='nav-search-text'>Search</p>
        <div className='nav-search-input-continer'>
        <input type='text' className='nav-search-input'/>
        <IconButton><CloseIcon style={{fontSize:"10px", backgroundColor:"#AAAaaa55", borderRadius:"50%", color:"#fff", padding:"2px"}}/></IconButton>
        </div>
        <p className='nav-recent-text'>Recent</p>
        <Divider />
      <List>
        {[2,3,4,5,6,7,8,9,].map(()=>{
            return(
              <Link to={"/userprofile"}>
                <div className='nav-search-react-ids-continer'>
            <div className='nav-profile-div'>
                <img src='https://mui.com/static/images/avatar/2.jpg'/>
            </div>
            <div className='nav-search-user-id-about-continer'>
                <p className='nav-search-user-id-about-continer-id'>Dhaha_muthu_raaj</p>
                <p className='nav-search-user-id-about-continer-about'>Followed Manju_nath_lo</p>
            </div>
        </div>
        </Link>
        
            )
        })}
        
      </List>
      
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={"left"}>
          {/* <Button onClick={toggleDrawer("left", true)}>{"left"}</Button> */}
          <button onClick={toggleDrawer("left", true)} className='nav-button div-icon-button'> <SearchIcon style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/> Search</button>
          <div className='nav-icon-buttons' onClick={toggleDrawer("left", true)}><SearchIcon  style={{fontSize:"2rem", paddingLeft:"2.8rem", paddingRight:"1rem"}}/></div> 

          
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}











