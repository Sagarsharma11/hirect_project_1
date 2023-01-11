import React from 'react'
import './videotwo.css'
import Videosingle from '../VideoTwo/Videosingle'

const Fullvideogallery = () => {
  return (
    <div className="container-fluid full-video-gallery">
        <div className="row">
            <div className="com-sm-12">
                <h2 className='fw-bold text-center'>Lorem ipsum dolor sit amet </h2>
            </div>
        </div>
        <Videosingle/>
        <Videosingle/>
        <Videosingle/>
        <button className='btn discover-more'>
            Discover More
        </button>
    </div>
  )
}

export default Fullvideogallery