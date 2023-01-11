import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='row'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">
                        <img src={require('../images/gol-logo 1.png')} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Find Reservations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" tabIndex="-1">About Lakshadweep</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Gol</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item login">
                                <a className="nav-link" to="/">Login</a>
                            </li>
                            <li className="nav-item sign">
                                <a className="nav-link px-4" to="/">Sign Up</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar