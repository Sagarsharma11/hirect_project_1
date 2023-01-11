import React from 'react'
import './Mstyle.css'

const Mapform = () => {
  return (
    <div className="container-fluid map-wrapper">
        <div className="row main">
            <div className="col-sm-6 this_map left">
                <iframe title="google map" className='map float-end' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.68433280041!2d77.62522304269864!3d12.910257643547427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491bfdc6ecd%3A0xf232718439fbc879!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1673322176688!5m2!1sen!2sin"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-sm-6 right  form">
                <form>
                    <label>First Name</label>
                    <br/>
                    <input type="text" />
                    <br/>
                    <label>Last Name</label>
                    <br/>
                    <input type="text" />
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input type="email"/>
                    <br/>
                    <textarea className='my-3' placeholder='   LEAVE A MESSAGE FOR US'></textarea>
                    <br/>
                    <button className='btn ' >Submit</button>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Mapform