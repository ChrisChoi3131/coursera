import React from 'react';
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <div className="bg-secondary hero mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 mb-4 mb-sm-0 text-light pt-4 pb-4">
                        <h1 className="mb-0 text-warning">Little Lemon</h1>
                        <h2 className="mb-4">Chicago</h2>
                        <p className="mb-4 fs-5 desc">We are family owned.
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist.
                        </p>
                        <Link to="/booking" role="button" className="btn btn-warning btn-lg">Reserve a Table</Link>
                    </div>
                    <div className="col-12 col-sm-4 pt-4 pb-4 pb-sm-0">
                        <img className="hero-image rounded"
                            height="300"
                            src="https://media.istockphoto.com/id/1208379871/pl/zdj%C4%99cie/zbli%C5%BCenie-m%C5%82odej-szcz%C4%99%C5%9Bliwej-kobiety-jedz%C4%85cej-makaron-przy-stole.jpg?s=2048x2048&w=is&k=20&c=T5PY2JOrf-1g6nUF3nx_bZMqU05yT9IqKrsPSNku5qY=" 
                            alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;