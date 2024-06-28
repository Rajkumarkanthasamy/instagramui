import React from 'react'
import './Login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
function Login() {
  return (
    <div className='Login-continer'>
        <div className='Login-element-continer'>
                <div className='login-input-element-continer'>
                    <p className='login-input-element-continer-header'>Story Vista</p>
                    <input type='text' className='login-input' placeholder='  Phone number, username, email'/>
                    <input type='password' className='login-input' placeholder='  Password'/>
                    <button className='login-button' ><a style={{textDecoration:"none", color:"#fff"}} href='/home'>Log in</a></button>
                    <div className='login-or'>
                        <hr/>
                        <p>OR</p>
                        <hr/>
                    </div>
                    <div className='login-facebook-continer'>
                        <FacebookIcon style={{color:"#0064d1"}}/>
                        <p>Log in with facebook</p>
                    </div>
                    <div className='login-forgotpassword'><a>Forgot Password?</a></div>
                </div>
                <div className='login-signup-continer'>
                 <p>Don't have an account? <span><a href='/signup' >Sign Up</a></span></p>
                </div>
                <p style={{fontSize:"0.9rem"}}>Get the app.</p>
                <div className='login-download-continer'>
                    <div className='link-button-download'>
                        <AppleIcon style={{color:"#FFF"}}/>
                        <div>
                            <p className='login-download-link-text-first'>Download on the</p>
                            <p className='login-download-link-text-sec'>App store</p>
                        </div>
                    </div>
                    <div className='link-button-download'>
                    <BrowserUpdatedIcon style={{color:"#FFF"}}/>
                        <div>
                            <p className='login-download-link-text-first'>Download on the</p>
                            <p className='login-download-link-text-sec'>Browser</p>
                        </div>
                    </div>
                </div>

        <div className='login-details-continer'>
            <div className='login-details-continer-link'>
                <a className='login-details-continer-link-a'> Meta</a>
                <a className='login-details-continer-link-a'> About</a>
                <a className='login-details-continer-link-a'> Blog</a>
                <a className='login-details-continer-link-a'> Jobs</a>
                <a className='login-details-continer-link-a'> Help</a>
                <a className='login-details-continer-link-a'> Api</a>
                <a className='login-details-continer-link-a'> Privacy</a>
                <a className='login-details-continer-link-a'> Team</a>
                <a className='login-details-continer-link-a'> Location</a>
                <a className='login-details-continer-link-a'> Instagram Lite</a>
                <a className='login-details-continer-link-a'> Threads</a>
                <a className='login-details-continer-link-a'> Meta Verified</a>
                <a className='login-details-continer-link-a'> Contacts Uploading & Non-Users</a>
            </div>
            <p className='login-copyright'>© 2024 Story Vista</p>
        </div>        
        </div>
    </div>
  )
}

export default Login