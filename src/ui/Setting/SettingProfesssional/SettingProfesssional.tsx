import React from 'react'
import "./SettingProfesssional.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function SettingProfesssional() {
    
  return (
    <>
      <div className='setting-professional-continer'>
        <div>
          <p className='setting-professional-header'>Professional account</p>
        </div>
        <div className='setting-professional-inner-continer'>

        <div className='setting-professional-option-continer'>
                  <div>
                    <p className='setting-professional-subheader'>Category</p>
                  </div>
                  <div>
                    <p className='setting-professional-normal-text'>{"Art"}</p>
                    <p style={{color:"#1a75ff"}}>Change</p>
                    <div style={{display:"flex", margin:"0px", padding:"0px"}}>
                      <input type='checkbox'/>
                      <p className='setting-professional-normal-text'>Display category label</p>
                    </div>
                  </div>
              </div>

              <div className='setting-professional-option-continer'>
                  <div>
                    <p className='setting-professional-subheader'>Email</p>
                  </div>
                  <div>
                    <p className='setting-professional-normal-text' style={{color:"#aaa"}}>Public business information</p>
                    <input type='text' className='setting-professional-input'/>
                  </div>
              </div>

              <div className='setting-professional-option-continer'>
                  <div>
                    <p className='setting-professional-subheader'>Phone</p>
                  </div>
                  <div>
                    <input type='text' className='setting-professional-input'/><br/>
                    <p className='setting-professional-subheader' style={{fontWeight:"800"}}>How would you like to be reached?</p>
                    <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel  style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem",}} value="female" control={<Radio style={{color:"#181818"}}/>} label="Call" />
                        <FormControlLabel  style={{backgroundColor:"inherit", color:"#181818", margin:"2px 0px", padding:"0px", fontSize:"0.9rem",}} value="male" control={<Radio   style={{color:"#181818"}}/>} label="Text" />
                    </RadioGroup>
                </FormControl>
                <div style={{display:"flex", margin:"0px", padding:"0px"}}>
                      <input type='checkbox'/>
                      <p className='setting-professional-normal-text'>Display contact info</p>
                    </div>
                  </div>
              </div>
              <div className='setting-professional-option-continer'>
                  <div>
                    <p className='setting-professional-subheader'>WhatsApp Number</p>
                  </div>
                  <div>
                    <input type='text' className='setting-professional-input'/><br/>
                    <button className='setting-professional-button'>Submit</button>
                  </div>
              </div>

        </div>
      </div>
    </>
  )
}

export default SettingProfesssional