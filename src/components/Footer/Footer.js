import React from 'react';
import './Footer.css';
import FooterImg from '../../resources/logo.png';

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-12 col-sm-12 justify-content-left">
                    <div className="col-md-6 ">
                        <img src={FooterImg} alt="" />
                    </div>
                    <div className="col-md-3">
                        <p>About Online Food</p>
                        <p>Read Our Blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="col-md-3">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="col-md-6"> <small style={{ color: 'gray' }}>Copyright &copy; 2019-20 Hot Onion Restuarant Ltd.</small></div>
                    <div className="col-md-6">
                        <a href="">Privacy Policy.</a>
                        <a href="">Terms of Use</a>
                        <a href="">Pricing</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;