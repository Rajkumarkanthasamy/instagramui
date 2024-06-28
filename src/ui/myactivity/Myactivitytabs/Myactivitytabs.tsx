import React from 'react'
import GestureIcon from '@mui/icons-material/Gesture';
import { Link } from 'react-router-dom';
interface Props {
    value: string;
  }

function Myactivitytabs(props:Props) {
  return (
    <>
        <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", minWidth:"100%", height:"3rem", borderBottom:"1px solid #aaa", color:"#181818",}}>

            <Link to={'/myactivity/likes'} style={{height:"100%", color:"#181818"}}>
            <div style={{ cursor:"pointer", display:"flex", justifyContent:"space-around", alignItems:"center", height:"100%", borderBottom:props.value == "likes" ? "2px solid #000":"none"}}>
                <GestureIcon style={{fontWeight:"700"}}/>
                <p style={{padding:"0.5rem"}}>LIKES</p>
            </div>
            </Link>
            <Link to={'/myactivity/comments'} style={{height:"100%", color:"#181818"}}>
            <div style={{cursor:"pointer",display:"flex", justifyContent:"space-around", alignItems:"center", height:"100%", borderBottom:props.value == "comments" ? "2px solid #000":"none"}}>
                <GestureIcon/>
                <p style={{padding:"0.5rem"}}>COMMENTS</p>
            </div>
            </Link>
            <Link to={'/myactivity/storyreplies'} style={{height:"100%", color:"#181818"}}>
            <div style={{cursor:"pointer",display:"flex", justifyContent:"space-around", alignItems:"center", height:"100%", borderBottom:props.value == "story" ? "2px solid #000":"none"}}>
                <GestureIcon/>
                <p style={{padding:"0.5rem"}}>STORY REPLIES</p>
            </div>
            </Link>

            <Link to={''} style={{height:"100%", color:"#181818"}}>
            <div style={{cursor:"pointer",display:"flex", justifyContent:"space-around", alignItems:"center", height:"100%", borderBottom:props.value == "reviews" ? "2px solid #000":"none"}}>
                <GestureIcon/>
                <p style={{padding:"0.5rem"}}>REVIEWS</p>
            </div>
            </Link>

        </div>
    </>
  )
}

export default Myactivitytabs