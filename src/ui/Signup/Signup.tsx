import React from 'react'
import './Signup.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

function Signup() {
  return (
    <div className='signup-continer'>
        <div className='signup-element-continer'>
                <div className='signup-input-element-continer'>
                    <p className='signup-input-element-continer-header'>Story Vista</p>
                    <p className='signup-continer-header'>Sign up to see photos and videos from your friends.</p>
                    <button className='signup-button' >
                    <FacebookIcon style={{color:"#FFF", marginRight:"5px"}}/>
                        Log in with Facebook
                        </button>
                        <div className='signup-or'>
                        <hr/>
                        <p>OR</p>
                        <hr/>
                    </div>
                    <input type='text' className='signup-input' placeholder='  Mobile number or Email'/>
                    <input type='text' className='signup-input' placeholder='  Full Name'/>
                    <input type='text' className='signup-input' placeholder='   username'/>
                    <input type='password' className='signup-input' placeholder='  Password'/>
                    
                    <button className='signup-button' >Sign up</button>
                   
                </div>
                <div className='signup-signup-continer'>
                 <p>Have an account? <span><a href='/' >Log in</a></span></p>
                </div>
                <p style={{fontSize:"0.9rem"}}>Get the app.</p>
                <div className='signup-download-continer'>
                    <div className='link-button-download'>
                        <AppleIcon style={{color:"#FFF"}}/>
                        <div>
                            <p className='signup-download-link-text-first'>Download on the</p>
                            <p className='signup-download-link-text-sec'>App store</p>
                        </div>
                    </div>
                    <div className='link-button-download'>
                    <BrowserUpdatedIcon style={{color:"#FFF"}}/>
                        <div>
                            <p className='signup-download-link-text-first'>Download on the</p>
                            <p className='signup-download-link-text-sec'>Browser</p>
                        </div>
                    </div>
                </div>

        <div className='signup-details-continer'>
            <div className='signup-details-continer-link'>
                <a className='signup-details-continer-link-a'> Meta</a>
                <a className='signup-details-continer-link-a'> About</a>
                <a className='signup-details-continer-link-a'> Blog</a>
                <a className='signup-details-continer-link-a'> Jobs</a>
                <a className='signup-details-continer-link-a'> Help</a>
                <a className='signup-details-continer-link-a'> Api</a>
                <a className='signup-details-continer-link-a'> Privacy</a>
                <a className='signup-details-continer-link-a'> Team</a>
                <a className='signup-details-continer-link-a'> Location</a>
                <a className='signup-details-continer-link-a'> Instagram Lite</a>
                <a className='signup-details-continer-link-a'> Threads</a>
                <a className='signup-details-continer-link-a'> Meta Verified</a>
                <a className='signup-details-continer-link-a'> Contacts Uploading & Non-Users</a>
            </div>
            <p className='signup-copyright'>© 2024 Story Vista</p>
        </div>        
        </div>
    </div>
  )
}

export default Signup