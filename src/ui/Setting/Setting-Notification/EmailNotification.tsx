import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function EmailNotification() {
  return (
    <div>
        <div className='setting-notification-continer'>
        
         <p className='setting-notification-header'>Email Notification</p>
                
                <p className='setting-notification-subheader'>Feedback emails</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="On" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Reminder emails</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="On" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Product emails</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="On" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>New emails</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="On" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Promotional emails</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="On" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Support emails</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem", fontWeight:"100"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem", fontWeight:"100"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="On" />
                    </RadioGroup>
                </FormControl>
                
                </div>
    </div>
  )
}

export default EmailNotification