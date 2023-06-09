import React from 'react';
import { Link } from "react-router-dom";
import NavMain from './NavMain';

import logo from '../logo.svg';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-bold" id="navbarNavDropdown">
                    <NavMain />
                </div>
            </div>
        </nav>
    )
}

export default Nav;