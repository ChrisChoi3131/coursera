import React from 'react';
import { NavLink } from "react-router-dom";

const NavMain = () => {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/specials" className="nav-link">Menu</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/booking" className="nav-link">Reservations</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink to="/order-online" className="nav-link">Order Online</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
            </li> */}
        </ul>
    )
}

export default NavMain;