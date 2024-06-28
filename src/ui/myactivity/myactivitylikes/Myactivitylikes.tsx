import React from 'react'
import './Myactivitylikes.css'
import Myactivitytabs from '../Myactivitytabs/Myactivitytabs'

function Myactivitylikes() {
var array = new Array(6 * 10).fill(0)
  return (
    <>
    <div className='myactivity-likes-main-continer'>
    <Myactivitytabs value={"likes"}/>
    <div className='myactivity-likes-filter-continer'>
        <p className='myactivity-likes-filter-text'>Newest to oldest</p>
        <button className='myactivity-likes-filter-button'>Sort & filter</button>
    </div>
    <div className='myactivity-likes-media-continer'>
        <div className='myactivity-likes-media-inner-continer'>
            {
                array.map(()=>{
                    return(
                        <>
                        <div className='myactivity-likes-content-div'>
                            <img src='https://img.freepik.com/free-photo/motocross-rider-racing-large-cloud-dust-debris-generative-ai_8829-2892.jpg?ga=GA1.1.1597837065.1702438010&semt=sph'/>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </div>
    
    </>
  )

}

export default Myactivitylikes