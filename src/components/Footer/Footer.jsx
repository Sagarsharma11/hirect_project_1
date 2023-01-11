import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footer ">

            <div className='bg-img'>
                <img className='download-img' src={require('../images/download our app.png')} alt="" />
                <div className='bg-image-wrapper row'>



                    <div className="col-sm-12 my-row">
                        <div className='row this_mobile_row'>
                            <div className="col-sm-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Company</option>
                                    <option value="1">Events</option>
                                    <option value="2">Blogs</option>
                                    <option value="3">FAQ</option>
                                    <option value="4">Join US</option>
                                </select>
                            </div>

                            <div className="col-sm-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>About</option>
                                    <option value="1">Project</option>
                                    <option value="2">Lorem</option>
                                    <option value="3">Services</option>
                                    <option value="4">Our Story</option>
                                </select>
                            </div>

                            <div className="col-sm-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Contact Us</option>
                                    <option value="1">abc@lorem.com</option>
                                    <option value="2">India</option>
                                </select>
                            </div>
                        </div>
                        <div className="row this_row">

                            <div className="col-sm-3 ">
                                <div className='company-info'>
                                    <img className='logo-img' src={require('../images/gol-logo-white.png')} alt="" />
                                    <p>
                                        Lorem Ipsum is simply dummy <br />
                                        text of the printing and type <br />
                                        setting industry.
                                    </p>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <i className="fa-sharp fa-solid fa-camera"></i>
                                </div>
                            </div>
                            <div className="col-sm-3 company">
                                <h4>Company</h4>
                                <ul>
                                    <li>Events</li>
                                    <li>Blogs</li>
                                    <li>FAQ</li>
                                    <li>Join US</li>
                                </ul>
                            </div>
                            <div className="col-sm-3 about">
                                <h4>About</h4>
                                <ul>
                                    <li>Project</li>
                                    <li>Lorem</li>
                                    <li>Services</li>
                                    <li>Our Story</li>
                                </ul>
                            </div>
                            <div className="col-sm-3 contactus">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>abc@lorem.com</li>
                                    <li>India</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className='mobile_social_media'>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <i className="fa-sharp fa-solid fa-camera"></i>
                                </div>
                                <footer>
                                    <p>Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.</p>
                                </footer>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Footer