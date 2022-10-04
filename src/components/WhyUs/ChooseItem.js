import React from 'react';
import './ChooseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ChooseItem = ({ item }) => {
	const { title, description, img, icon } = item;
	return (
		<div className="col-xl-4">
			<div className="single-item pb-3">
				<div className="card">
					<img className="card-img-top" src={img} alt="" />
					<div className="card-body choose-aria-content d-flex">
						<div className="choose-aria-icon">
							<img src={icon} alt="" />
						</div>
						<div>
							<h5 className="card-title">{title}</h5>
							<p className="card-text">{description}</p>
							<Link style={{ textDecoration: 'none' }} to={'itemDetails/' + 10}>
								<h6>
									See more <FontAwesomeIcon icon={faArrowRight} />
								</h6>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseItem;
