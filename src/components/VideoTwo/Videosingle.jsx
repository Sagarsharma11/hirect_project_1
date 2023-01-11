import React from 'react'
import './videotwo.css'

const Videosingle = () => {
    return (
        <>

            <div className="row  video-wrapper-2">
                <div className="col-sm-6 ">
                    <div className="video-2 left">
                        <img className='float-end' src={require('../images/Rectangle 4173-3.png')} />
                        <i class="fa-regular fa-circle-play"></i>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="video-2 right ">
                        <img src={require('../images/Rectangle 4173-3.png')} />
                        <i class="fa-regular fa-circle-play"></i>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Videosingle