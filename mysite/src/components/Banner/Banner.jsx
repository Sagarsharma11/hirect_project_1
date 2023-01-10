import React from 'react'
import './Banner.css'

const Banner = (props) => {
    return (
        <div className='banner row'>
            <div className="col-sm-12 mx-auto">
                <img className='img' src={require('../images/Vector.png')} />
            </div>
            <div className='center'>
                {props.title}
            </div>
        </div>
    )
}

export default Banner