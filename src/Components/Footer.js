import React from 'react';
import NavMain from './NavMain';
import logo from '../logo.svg';

const Footer = () => {
    return (
        <footer className="pt-4 pb-4 bg-secondary mt-4 text-light">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-12 col-sm-3">
                        <h4>Doormat Navigation</h4>
                        <NavMain />
                    </div>
                    <div className="col-12 col-sm-3">
                        <h4>Contact</h4>
                        <ul className='list-unstyled'>
                            <li>US, New York</li>
                            <li>99902112</li>
                            <li><a href="/" className='text-light text-decoration-none'>lemon@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-3">
                        <h4>Social Media Links</h4>
                        <ul className='list-unstyled'>
                            <li><a href="/" className='text-light text-decoration-none'>Facebook</a></li>
                            <li><a href="/" className='text-light text-decoration-none'>Twitter</a></li>
                            <li><a href="/" className='text-light text-decoration-none'>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;