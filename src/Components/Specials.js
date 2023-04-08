import React from 'react';
import { Link } from "react-router-dom";

const Specials = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className='h1 mb-4'>This weeks specials</h3>
                <Link to="/specials" role='button' className="btn btn-warning btn-lg">Online Menu</Link>
            </div>
            <div className="row pt-2">
                <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                    <div className="card bg-body-secondary text-secondary">
                        <img src="https://media.istockphoto.com/id/1190330112/pl/zdj%C4%99cie/sma%C5%BCona-wieprzowina-i-warzywa-na-bia%C5%82ym-tle.jpg?s=1024x1024&w=is&k=20&c=evjvLCQ0pzttgYwvDV2ve9Sedt6YBB2EmczntlGXpNM=" className="card-img-top" alt="dish" />
                        <div className="card-body">
                            <h5 className="mb-4 card-title fw-semibold d-flex justify-content-between">
                                <a href="/" className='text-decoration-none text-secondary'>Fried pork and vegetables</a>
                                <span className="text-warning">$5.99</span>
                            </h5>
                            <p className="mb-4 card-text">Fried pork and vegetables on white background stock photo. Food, Plate, Meal, White Background, White Color</p>
                            <a href="/" className="card-link link-secondary text-decoration-none fw-semibold">Order a delivery <i className="mb-2 bi bi-truck"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                    <div className="card bg-body-secondary text-secondary">
                        <img src="https://media.istockphoto.com/id/1190330112/pl/zdj%C4%99cie/sma%C5%BCona-wieprzowina-i-warzywa-na-bia%C5%82ym-tle.jpg?s=1024x1024&w=is&k=20&c=evjvLCQ0pzttgYwvDV2ve9Sedt6YBB2EmczntlGXpNM=" className="card-img-top" alt="dish" />
                        <div className="card-body">
                            <h5 className="mb-4 card-title fw-semibold d-flex justify-content-between">
                                <a href="/" className='text-decoration-none text-secondary'>Fried pork and vegetables</a>
                                <span className="text-warning">$5.99</span>
                            </h5>
                            <p className="mb-4 card-text">Fried pork and vegetables on white background stock photo. Food, Plate, Meal, White Background, White Color</p>
                            <a href="/" className="card-link link-secondary text-decoration-none fw-semibold">Order a delivery <i className="mb-2 bi bi-truck"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                    <div className="card bg-body-secondary text-secondary">
                        <img src="https://media.istockphoto.com/id/1190330112/pl/zdj%C4%99cie/sma%C5%BCona-wieprzowina-i-warzywa-na-bia%C5%82ym-tle.jpg?s=1024x1024&w=is&k=20&c=evjvLCQ0pzttgYwvDV2ve9Sedt6YBB2EmczntlGXpNM=" className="card-img-top" alt="dish" />
                        <div className="card-body">
                            <h5 className="mb-4 card-title fw-semibold d-flex justify-content-between align-items-center">
                                <a href="/" className='text-decoration-none text-secondary'>Fried pork and vegetables</a>
                                <span className="text-warning">$5.99</span>
                            </h5>
                            <p className="mb-4 card-text">Fried pork and vegetables on white background stock photo. Food, Plate, Meal, White Background, White Color</p>
                            <a href="/" className="card-link link-secondary text-decoration-none fw-semibold">Order a delivery <i className="mb-2 bi bi-truck"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Specials;