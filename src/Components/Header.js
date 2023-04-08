import React from 'react';
import Nav from './Nav';
import CallToAction from './CallToAction';


const Header = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <CallToAction />
        </>
    )
}

export default Header;