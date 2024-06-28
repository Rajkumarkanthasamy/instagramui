import React from 'react'
import Navigationbar from '../Dashboeard/Navigationbar'
import "./Setting.css";
import SettingNav from './SettingNav';
import EditProfile from './EditProfile/EditProfile';
function Setting() {
  return (
    <div className='home-continer'>
      <div className='setting-bar-continer'>
        <Navigationbar/>
        </div>

            <div className='setting-main-continer'>

                <div className='setting-main-continer-left'>
                    <div className='setting-main-continer-left-inner'>
                        <div className='setting-left-elements-header'>
                            Settings
                        </div>
                        <div className='setting-left-elements-continer'>
                           <SettingNav/>
                        </div>
                    </div>
                </div>

                <div className='setting-main-continer-right'>
                        <div className='setting-main-continer-right-inner'>
                            <EditProfile/>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Setting