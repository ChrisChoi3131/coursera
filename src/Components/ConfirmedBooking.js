import React from 'react';
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
    const { state } = useLocation();
    const { date, time, guests } = state;

    return (
        <div style={{maxWidth : "750px"}} className='mt-4 me-auto ms-auto'>
            <h2 className='h1 mb-4 text-success'><i className="bi bi-calendar2-check-fill"></i> Your Booking has been confirmed.</h2>
            <p>Dear Guest,</p>

            <p>Thank you for choosing to dine at <b className='text-success'>Lemon Restaurant!</b></p>
            <p>We are pleased to confirm your reservation for &nbsp;
            <b className='text-success'><i className="bi bi-people-fill"></i> {guests} persons</b> on <b className='text-success'><i className="bi bi-calendar3"></i> {date}</b> at <b className='text-success'><i className="bi bi-clock"></i> {time}</b>.</p>

            <p>We look forward to welcoming you to our restaurant and providing you with an exceptional dining experience. Our team of chefs will be preparing a delicious meal using only the freshest ingredients, and our attentive staff will be on hand to ensure that your every need is met.</p>

            <p>Please note that if your plans change and you need to cancel or modify your reservation, we kindly ask that you let us know as soon as possible so that we can make the necessary adjustments.</p>

            <p>If you have any questions or special requests, please do not hesitate to contact us at <b><i className="bi bi-telephone"></i> 99902112</b> or via email at <b><i className="bi bi-envelope"></i> lemon@gmail.com</b>. We are always happy to assist in any way we can.</p>

            <p>Thank you once again for choosing to dine at Lemon Restaurant. We can't wait to see you soon!</p>

            <p>Best regards,</p>

            <p>Lemon Restaurant</p>

        </div>
    )
}

export default ConfirmedBooking;