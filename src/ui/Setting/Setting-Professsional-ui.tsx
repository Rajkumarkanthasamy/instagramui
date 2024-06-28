import React from 'react'
import Navigationbar from '../Dashboeard/Navigationbar'
import "./Setting.css";
import SettingNav from './SettingNav';
import SettingProfesssional from './SettingProfesssional/SettingProfesssional';

function SettingProfesssionalui() {
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
                            <SettingProfesssional/>
                        </div>
                </div>
            </div>
            
    </div>
  )
}

export default SettingProfesssionalui