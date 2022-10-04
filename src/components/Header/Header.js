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
		<nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
			<div className="container">
				<a href="/" className="navbar-brand d-flex w-50 me-auto">
					<img src={logo} alt="" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapsingNavbar3"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
					<ul className="nav navbar-nav ms-auto w-100 justify-content-end">
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
				</div>
			</div>
		</nav>
	);
};

export default Header;
