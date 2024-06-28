import React from 'react'
import './Setting.css'
import { Link } from 'react-router-dom'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function SettingNav() {
  return (
    <>
     <div className='setting-left-elements-continer-header'>
                                How you use story vista
                            </div>

                                <div className='setting-left-elements-list-continer'>
                                    
                                    <Link to={"/setting/editprofile"}>
                                        <button className='setting-left-elements-list-button'> <AccountCircleOutlinedIcon style={{padding:"0px 1rem"}}/> Edit profile</button>
                                    </Link>
                                    <Link to={"/setting/notification"}>
                                        <button className='setting-left-elements-list-button'> <NotificationsNoneOutlinedIcon style={{padding:"0px 1rem"}}/> Notification</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                        For Professional
                                    </div>
                                    <Link to={"/setting/professsional"}>
                                        <button className='setting-left-elements-list-button'> <ContactsOutlinedIcon style={{padding:"0px 1rem"}}/> Professional account</button>
                                    </Link>
                                    <Link to={"/setting/bussiness"}>
                                        <button className='setting-left-elements-list-button'> <LocalPhoneOutlinedIcon style={{padding:"0px 1rem"}}/> Bussiness tools</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                        Whate you see
                                    </div>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <NotificationsOffOutlinedIcon style={{padding:"0px 1rem"}}/> Muted accounts</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <FavoriteBorderOutlinedIcon style={{padding:"0px 1rem"}}/> Likes and share</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                        Who can see your content
                                    </div>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <LockOutlinedIcon style={{padding:"0px 1rem"}}/> Account privacy</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <FavoriteBorderOutlinedIcon style={{padding:"0px 1rem"}}/> Close Friends</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <BlockOutlinedIcon style={{padding:"0px 1rem"}}/> Block</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <AssistantOutlinedIcon style={{padding:"0px 1rem"}}/> Hide stroy and live</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                        How others can interact with you
                                    </div>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <ModeCommentOutlinedIcon style={{padding:"0px 1rem"}}/> Message and story</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <ForumOutlinedIcon style={{padding:"0px 1rem"}}/> Tags and mentions</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <ModeCommentOutlinedIcon style={{padding:"0px 1rem"}}/> Commands</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <AutorenewOutlinedIcon style={{padding:"0px 1rem"}}/> Sharing and remixes</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <AutorenewOutlinedIcon style={{padding:"0px 1rem"}}/> Restricted account</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <FormatSizeOutlinedIcon style={{padding:"0px 1rem"}}/> Hidden words</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                        You app amd media
                                    </div>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <FileDownloadOutlinedIcon style={{padding:"0px 1rem"}}/> Archiving & downloading</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <GTranslateOutlinedIcon style={{padding:"0px 1rem"}}/> Language</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <DevicesOutlinedIcon style={{padding:"0px 1rem"}}/> Website permissions</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                    For families
                                    </div>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <GroupOutlinedIcon style={{padding:"0px 1rem"}}/> Supervision</button>
                                    </Link>
                                    <div className='setting-left-elements-continer-header'>
                                    More info and support
                                    </div>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <SupportOutlinedIcon style={{padding:"0px 1rem"}}/> Help</button>
                                    </Link>
                                    <Link to={""}>
                                        <button className='setting-left-elements-list-button'> <PermIdentityOutlinedIcon style={{padding:"0px 1rem"}}/> Accounts Status</button>
                                    </Link>

                                </div>
    </>
  )
}

export default SettingNav