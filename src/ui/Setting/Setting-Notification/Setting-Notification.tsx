import "./Setting-Notification.css"
import { IconButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';


function SettingNotification() {

  return (
    <>
        <div className='setting-notification-continer'>

            <div>
            <div>
                <p className='setting-notification-header'>Notification</p>
            </div>
            <div className='setting-notification-push-Email'>

            <Link to={"/setting/notification/push-notifivation"}>
                <div className='setting-notification-push-email-inner-cntr' >
                    
                    <p>Push notification</p>
                    <IconButton>
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                    
                </div>
            </Link>

            <Link to={"/setting/notification/email-notifivation"}>
                <div className='setting-notification-push-email-inner-cntr' >
                    <p>Email notification</p>
                    <IconButton>
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </div>
            </Link>

            </div>
            </div>

        </div>
    </>
  )
}

export default SettingNotification

