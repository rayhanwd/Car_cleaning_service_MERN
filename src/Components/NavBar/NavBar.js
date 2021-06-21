import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/logo.png';
const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/">
                <img src={logo} class="d-inline-block align-top" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">About</Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Offers</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Contact</Link>
                        </li>
                    </ul>
                    <button className="contact-btn">Take Offer</button>
                </div>
            </nav>
        </>
    );
};

export default NavBar;