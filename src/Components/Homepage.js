import React from 'react';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About'
import styled from 'styled-components';


const Homepage = () => {
    const Section = styled.section`
        padding: 50px 0;
        @media (max-width: 768px) {
            padding: 20px 0;
        }
    `;

    return (
        <>
            <Section><Specials /></Section>
            <Section><Testimonials /></Section>
            <Section><About /></Section>
        </>
    );
}

export default Homepage;