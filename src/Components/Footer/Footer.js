import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo/logo.png';
const Footer = () => {
    return (
        <div className="bg-color">
        <div className="container">
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <Link class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" to="/" aria-label="Logo">
                      <img src={logo} alt="" srcset="" />
                    </Link>
                    <ul class="list-unstyled small text-muted">
                        <li class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<a href="/docs/5.0/about/team/">Bootstrap team</a> eiusmod tempor <a href="https://github.com/twbs/bootstrap/graphs/contributors">consectetur </a>.</li>
                        <li class="mb-2">Lorem ipsum dolor <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">lorem</a>, dolor <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">situm</a>.</li>
                        <li class="mb-2">Lorem ipsum dolor</li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="/">Home</a></li>
                        <li class="mb-2"><a href="/docs/5.0/">Services</a></li>
                        <li class="mb-2"><a href="/docs/5.0/examples/">Contact</a></li>
                        <li class="mb-2"><a href="https://opencollective.com/bootstrap">Explore</a></li>
                        <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Special</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="/docs/5.0/getting-started/">Order now</a></li>
                        <li class="mb-2"><a href="/docs/5.0/examples/starter-template/">Get a package</a></li>
                        <li class="mb-2"><a href="/docs/5.0/getting-started/webpack/">Special discount</a></li>
                        <li class="mb-2"><a href="/docs/5.0/getting-started/parcel/">News</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Connect with</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Facebook</a></li>
                        <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Youtube</a></li>
                        <li class="mb-2"><a href="https://github.com/twbs/icons">Twitter</a></li>
                        <li class="mb-2"><a href="https://github.com/twbs/rfs">Linkedin</a></li>
                        <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">Google +</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Go to service</a></li>
                        <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">back to home</a></li>
                        <li class="mb-2"><a href="https://github.com/sponsors/twbs">Pick a service</a></li>
                        <li class="mb-2"><a href="https://opencollective.com/bootstrap">See latest blog</a></li>
                        <li class="mb-2"><a href="https://bootstrap-slack.herokuapp.com/">Find more</a></li>
                        <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;