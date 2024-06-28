import React from 'react'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function PushNotification() {
  return (
    <div>
        <div className='setting-notification-continer'>
        <p className='setting-notification-header'>Push Notification</p>
                <p className='setting-notification-subheader'>Push Notification</p>
                <div className='setting-notification-pause-all'>
                    <p className='setting-notification-normaltext-size'>
                        Pause all
                    </p>
                    <div>
                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                    </div>
                </div>
                <p className='setting-notification-subheader'>Likes</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel  style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem",}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel  style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem",}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel  style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem",}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Likes and comments on photos of you</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Comments</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>
                <p className='setting-notification-subheader'>Comments likes</p>
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
                <p className='setting-notification-subheader'>Comments daily digest</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>
                <p className='setting-notification-subheader'>First post and stories</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>
                <p className='setting-notification-subheader'>Add post submissions</p>
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

                <p className='setting-notification-subheader'>Mention request</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>New followers</p>
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

                <p className='setting-notification-subheader'>Account follow request</p>
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

                <p className='setting-notification-subheader'>Account suggestions</p>
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

                <p className='setting-notification-subheader'>Mention in bio</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Message requests</p>
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

                <p className='setting-notification-subheader'>Group requests</p>
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

                <p className='setting-notification-subheader'>Message from individual and group chats</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Off" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="From profile I follow" />
                        <FormControlLabel style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem"}} value="other" control={<Radio  style={{color:"#181818"}}/>} label="From everyone" />
                    </RadioGroup>
                </FormControl>

                <p className='setting-notification-subheader'>Broadcast channel invits</p>
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

                <p className='setting-notification-subheader'>Broadcast channel message</p>
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

                <p className='setting-notification-subheader'>Social channel message</p>
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


                <p className='setting-notification-subheader'>Original audio</p>
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

                <p className='setting-notification-subheader'>Remixes</p>
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


                <p className='setting-notification-subheader'>Live videos</p>
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

                <p className='setting-notification-subheader'>Recent uploaded reels</p>
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

                <p className='setting-notification-subheader'>Reels suggested for you</p>
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

                <p className='setting-notification-subheader'>Add yours</p>
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

                <p className='setting-notification-subheader'>Reels made for you</p>
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

                <p className='setting-notification-subheader'>your fundraisers</p>
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

                <p className='setting-notification-subheader'>Fundraisers by others</p>
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

                <p className='setting-notification-subheader'>Reminders</p>
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

                <p className='setting-notification-subheader'>Product announcements & feedback</p>
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


                <p className='setting-notification-subheader'>Ads</p>
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

                <p className='setting-notification-subheader'>Support request</p>
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

                <p className='setting-notification-subheader'>Trending places</p>
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

                <p className='setting-notification-subheader'>Birthdays</p>
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
                </div>
    </div>
  )
}

export default PushNotification



const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#181818',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));