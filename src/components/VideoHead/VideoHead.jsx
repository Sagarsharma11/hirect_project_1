import React from 'react'
import './videohead.css'
const VideoHead = () => {
  return (
    <> 
        <div className='row video-wrapper'>
            <div className="col-sm-12">
                <div className="title">
                <h2 className='fw-bold'>Lorem ipsum </h2>
                <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis sodales, facilisis massa at, rutrum eros.</p>
                </div>
                <div className="video">
                    <img src={require('../images/Rectangle 4173-3.png')} />
                    <i class="fa-regular fa-circle-play"></i>
                </div>

            </div>
        </div>
    </>
  )
}

export default VideoHead