import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='row'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={require('../images/gol-logo 1.png')} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Find Reservations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Packages</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link active" href="/" tabindex="-1">About Lakshadweep</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Gol</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Support</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item login">
                                <a className="nav-link" href="/">Login</a>
                            </li>
                            <li className="nav-item sign">
                                <a className="nav-link px-4" href="/">Sign Up</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar