import React from 'react'
import './style.css'

const Contactus = () => {
  return (
    <>
      <div className='contact-us w-100'>
        <div className='row'>
          <h2 className='text-center '>Contact Us</h2>
          <p className='text-center '>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <p className='text-center'>
              1901 Thornridge Cir. Shiloh<br />
              Hawaii 81063
            </p>
          </div>
          <div className="col-sm-4">
          <i class="fa-sharp fa-solid fa-square-phone"></i>
            <p className='text-center'>
            +91-4555545454
            </p>
          </div>
          <div className="col-sm-4">
          <i class="fa-sharp fa-solid fa-envelope"></i>
            <p className='text-center'>
            tim.jennings@example.com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus