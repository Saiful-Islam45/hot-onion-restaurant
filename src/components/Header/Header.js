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

            <div class="s01">
                <form>
                    <h1>Best food waiting for you belly</h1>
                    <div className="search-area">
                        <div className="text-left">
                            <input id="search" type="text" placeholder="Search for food" />
                            <button className="btn btn-danger" type="button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Header;