import React from 'react'
import "./EditProfile.css";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function EditProfile() {
  return (
    <>
    <div className='editprofile-continer'>
       <div className='editprofile-continer-inner'>
          <div className='editprofile-continer-header'>Edit Profile</div>
            <div className='editprofile-change-profile'>

                <div className='editprofile-change-profile-pic-id'>
                  <div className='editprofile-change-profile-pic-div'>
                      <img src='https://mui.com/static/images/avatar/2.jpg'/>
                  </div>
                  <div className='editprofile-change-profile-id'>
                    <div className='editprofile-change-profile-id-name'>Rajkumar_h</div>
                    <div className='editprofile-change-profile-id-user-rl'>:)rajkumar</div>
                  </div>
                </div>
                <div>
                  <button className='editprofile-change-photo'>Change Photo</button>
                </div>
            </div>

            <div>
                  <p className='editprofile-sub-header'>Website</p>
                  <div>
                    <input type='text' className='editprofile-website-input' placeholder='gmail.com'/>
                  </div>

            </div>
            <div>
                  <p className='editprofile-sub-header'>Bio</p>
                  <div>
                    <input type='text' className='editprofile-bio-input' placeholder='bio'/>
                  </div>

            </div>

            <div>
                  <p className='editprofile-sub-header'>Gender</p>
                  <div>
                    <select  className='editprofile-gender-input'>
                      <option>Male</option>
                      <option>Female</option>
                      <option>NOT to mention</option>
                    </select>
                  </div>

            </div>
            <div>
                  <p className='editprofile-sub-header'>Show account suggestion on profile</p>
                  <div className='editprofile-suggestion-continer'>
                      <div>
                        <p className='editprofile-suggestion-continer-text-header'>Show account suggestion on profile</p>
                        <p className='editprofile-suggestion-continer-text-sub'>
                          Choose whether people can see account suggestion on your profile and whether <br/>
                          your account can be suggested on other profiles

                        </p>
                      </div>
                      
                       <IOSSwitch sx={{ m: 1 }} defaultChecked />
                        
                  </div>

                 <div className='editprofile-sumit-bnt'>
                  <button className='editprofile-change-photo'>Sumit</button>
                 </div> 

            </div>
       </div>
    </div>
    </>
  )
}

export default EditProfile

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
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#000',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));