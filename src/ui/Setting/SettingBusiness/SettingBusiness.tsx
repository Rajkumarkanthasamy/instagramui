import React, { useState } from 'react'
import "./SettingBusiness.css"
import { IconButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Backdrop from '@mui/material/Backdrop';


function SettingBusiness() {
    const [opencreateaccount, setopencreateaccount] = useState(false);
    const [openpersonaccount, setopenpersonaccount] = useState(false);

  return (
    <>
     <div className='setting-business-continer'>

          
            <div>
                <p className='setting-business-header'>Business</p>
            </div>
            <div className='setting-business-push-Email'>

                <div className='setting-business-push-email-inner-cntr'  onClick={()=>setopencreateaccount(!opencreateaccount)}>
                    
                    <p>Switch to create account</p>
                    <IconButton>
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                    
                </div>

                <div className='setting-business-push-email-inner-cntr' onClick={()=>setopenpersonaccount(!openpersonaccount)}>
                    <p>Switch to personal account</p>
                    <IconButton>
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </div>
            </div>




            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={opencreateaccount}
                >
                   <div className='setting-business-pop-continer'>
                        <div className='setting-business-pop-header'>
                            <p>Switch to create account?</p>
                        </div>
                        <div className='setting-business-pop-details'>
                        <p>
                            Create account are best for public figures, content producers, 
                            artists and influencers. You can switch back to a business account anytime
                        </p>
                        </div>
                        <div style={{width:"99%", color:"#eee", borderBottom:"1px solid #eee"}}/>
                        <button  className='setting-business-pop-button'>Switch</button>
                        <div style={{width:"99%", color:"#eee", borderBottom:"1px solid #eee"}}/>
                        <button  className='setting-business-pop-button' style={{color:"#181818"}} onClick={()=>setopencreateaccount(!opencreateaccount)}>Cancel</button>
                        
                   </div>
                </Backdrop>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openpersonaccount}
                >
                   <div className='setting-business-pop-continer'>
                        <div className='setting-business-pop-header'>
                            <p>Switch to a personal account?</p>
                        </div>
                        <div className='setting-business-pop-details'>
                        <p>
                        When you switch back to a personal account, in-app insights will be turned off and insights from all your content, 
                        including content and insights for promotions, will be permanently removed.
                        </p>
                        </div>
                        <div style={{width:"99%", color:"#eee", borderBottom:"1px solid #eee"}}/>
                        <button  className='setting-business-pop-button'>Switch</button>
                        <div style={{width:"99%", color:"#eee", borderBottom:"1px solid #eee"}}/>
                        <button  className='setting-business-pop-button' style={{color:"#181818"}} onClick={()=>setopenpersonaccount(!openpersonaccount)}>Cancel</button>
                        
                   </div>
                </Backdrop>
    </div>

            </div>
    </>
  )
}

export default SettingBusiness