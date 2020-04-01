import React from 'react';
import "./SingleCard.css";
import { Link } from 'react-router-dom';
import './SingleCard.css';

const SingleCard = (props) => {
    console.log(props);

    const { id, name, shortDescription, price, images } = props.food;
    return (
        <div className="col-md-4 col-sm-6 mb-5">
            <Link style={{ textDecoration: 'none' }} to={"itemDetails/" + id}>
                <div className="single-card">
                    <img src={images[0]} alt="" />
                    <div className="card-body" >
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <h4>$ {price.toFixed(2)}</h4>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default SingleCard;