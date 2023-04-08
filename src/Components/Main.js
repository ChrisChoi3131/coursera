import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import About from './About';
import Specials from './Specials';
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
    return (
        <main className='mb-4 pb-4'>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/specials" element={<Specials />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
                    <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
                </Routes>
            </div>
        </main>
    );
}

export default Main;