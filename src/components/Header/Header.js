import React from 'react';
import './Header.css';
import logo from '../../resources/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../User-auth';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const auth = useAuth();
	return (
		<div>
			<div className="container-fluid" style={{position: 'fixed',backgroundColor: 'white', zIndex: 20}}>
				<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="/">
						<img src={logo} alt="" />
					</a>
					<ul className="nav justify-content-end" id="navbarTogglerDemo03">
						<li className="nav-item">
							<a className="nav-link" href="/checkout">
								<FontAwesomeIcon icon={faShoppingCart} /> <span className="ml-2">{props.count}</span>
							</a>
						</li>
						<li className="nav-item">
							{auth.user ? (
								<Link to="/checkout" className="nav-link">
									{auth.user.displayName}
								</Link>
							) : (
								<Link to="/login" className="nav-link">
									Login
								</Link>
							)}
						</li>

						<li className="nav-item">
							{auth.user ? (
								<a className="nav-link color-pink" href="/login">
									<button
										onClick={() => {
											auth.signOut();
										}}
										className="btn btn-rounded"
									>
										Sign Out
									</button>
								</a>
							) : (
								<a href="/login" className="nav-link color-pink">
									<button className="btn btn-rounded">Sign Up</button>
								</a>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
