import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../API/api';

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            validateOnMount: true,
            date: '',
            time: '',
            guests: '',
            occasion: 'Birthday',
        },
        validationSchema: Yup.object({
            date: Yup.date()
                .required('Please, select date'),
            time: Yup.string()
                .required('Please, select time'),
            guests: Yup.number()
                .min(1, 'Guests number must be at least 1')
                .max(10, 'Guests number must be at be 10 or less')
                .required('Please, select number of guests')
        }),
        onSubmit: values => {
            submitAPI(values);
            navigate('/confirmed-booking',  { state: values });
        }
    });

    const onDateChange = (e) => {
        updateTimes(e.target.value);
    }

    const updateTimes = (date) => {
        setAvailableTimes(fetchAPI(new Date(date)));
    }

    const initializeTimes = (date) => {
        setAvailableTimes(fetchAPI(new Date(date)));
    }

    useEffect(() => {
        initializeTimes(Date.now());
    }, []);

    return (
        <form style={{maxWidth : "500px"}} className='mt-4 me-auto ms-auto' onSubmit={formik.handleSubmit}>
            <h2 className="h1 mb-4">Book Now</h2>
            <div className="row mb-3">
                <div className="col-12 col-sm-6">
                    <label htmlFor="date" className='form-label'>Choose date</label>
                    <input type="date" id="date" className='form-control' name='date' value={formik.values.date}
                    onChange={(e) => {
                        onDateChange(e);
                        formik.handleChange(e);
                      }}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div className='pt-2 text-danger'>{formik.errors.date}</div>
                    ) : null}
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="time" className='form-label'>Choose time</label>
                    <select id="time" className='form-control' name='time' onChange={formik.handleChange} value={formik.values.time}>
                        {availableTimes.map((time, index) => <option key={index}>{time}</option>)}
                    </select>
                    {formik.touched.time && formik.errors.time ? (
                        <div className='pt-2 text-danger'>{formik.errors.time}</div>
                    ) : null}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="guests" className='form-label'>Number of guests</label>
                <input type="number" placeholder="1" id="guests" className='form-control' name='guests' onChange={formik.handleChange} value={formik.values.guests} />
                {formik.touched.guests && formik.errors.guests ? (
                    <div className='pt-2 text-danger'>{formik.errors.guests}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <label htmlFor="occasion" className='form-label'>Occasion</label>
                <select id="occasion" className='form-control' name="occasion" onChange={formik.handleChange} value={formik.values.occasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input disabled={!formik.dirty} className='btn btn-warning btn-lg' type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;