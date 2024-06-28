import React from 'react';
import './App.css';
import Login from "./ui/Login/Login"
import SignUp from './ui/Signup/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/Home/Home"
import UserProfile from './ui/Userprofile/UserProfile';
import Explore from "./ui/Explore/Explore"
import Reels from './ui/Reels/Reels';
import Message from './ui/Message/Message';
import Notification from './ui/Notification/Notification';
import Post from './ui/Post/Post';
import Profile from './ui/Profile/Profile';
import SettingEditProfile from './ui/Setting/Setting-Edit-Profile';
import SettingNotificationui from './ui/Setting/Setting-Notification-ui';
import SettingNotificationpushui from './ui/Setting/Setting-Notification-push-ui';
import SettingNotificationemailui from './ui/Setting/Setting-Notification-email-ui';
import SettingProfesssionalui from './ui/Setting/Setting-Professsional-ui';
import SettingBusinessui from './ui/Setting/Setting-business-ui';
import MyActivityLikesui from './ui/myactivity/Myactivity-Likes-ui';
import Myactivitycommentsui from './ui/myactivity/Myactivity-comment-ui';
import Myactivitystoryrepliesui from './ui/myactivity/Myactivity-StoryReplies-ui';
import Myactivitypostsui from './ui/myactivity/myactivityphotosansvideos/Myactivityposts-ui';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/reels' element={<Reels />} />
          <Route path='/message' element={<Message />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/post' element={<Post />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/myactivity/likes' element={<MyActivityLikesui/>} />
          <Route path='/myactivity/comments' element={<Myactivitycommentsui/>} />
          <Route path='/myactivity/storyreplies' element={<Myactivitystoryrepliesui/>} />
          <Route path='/myactivity/posts' element={<Myactivitypostsui/>} />

          <Route path='/setting/editprofile' element={<SettingEditProfile/>} />
          <Route path='/setting/notification' element={<SettingNotificationui/>} />
          <Route path='/setting/notification/push-notifivation' element={<SettingNotificationpushui/>} />
          <Route path='/setting/notification/email-notifivation' element={<SettingNotificationemailui/>} />
          <Route path='/setting/professsional' element={<SettingProfesssionalui/>} />
          <Route path='/setting/bussiness' element={<SettingBusinessui/>} />


          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
