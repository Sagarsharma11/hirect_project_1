import React from 'react'
import Videosingle from '../VideoTwo/Videosingle'
import './videotwo.css'

const VideoTwo = () => {
    return (
        <>
            <div className="container-fluid two-video">
                <div className='row'>
                    <div className="col-sm-12">
                        <div className="title">
                            <h4 className='text-center'>Lorem ipsum dolor sit amet, consectetur</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis sodales, facilisis massa at, rutrum eros.</p>
                        </div>
                    </div>
                </div>
                <Videosingle/>
            </div>
          

        </>
    )
}

export default VideoTwo