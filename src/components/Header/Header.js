import React from 'react';
import './Header.css';
import logo from "../../resources/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>

                    <ul className="nav justify-content-end" id="navbarTogglerDemo03">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color-pink" href="#">Sign up</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Header;