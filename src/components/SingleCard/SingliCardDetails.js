import React, { useState, useEffect } from 'react';
import './SingleCardDetails.css';
import cardData from '../../resources/fakeData/cardData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../User-auth';

const SingliCardDetails = (props) => {
    const auth = useAuth();
    const { id } = useParams();
    const selectedItem = cardData.find(item => item.id === parseInt(id));
    const [numberOfItems, setNumberOfItems] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        if (selectedItem.numberOfItems) {
            setNumberOfItems(selectedItem.numberOfItems)
        }
    }, [selectedItem.numberOfItems]);
    const handleTotalNumberOfItems = (item) => {
        item.numberOfItems = numberOfItems;
        props.cartHandler(item);
        setIsSuccess(true);
    }
    if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 1500)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h2>{selectedItem.name}</h2>
                    <p className="full-description">{selectedItem.fullDescription}</p>
                    <div className="d-flex">
                        <h3>$ {selectedItem.price}</h3>
                    </div>
                    <div className="btn-design mb-2">
                        <button className="btn btn-rounded" onClick={() => setNumberOfItems(numberOfItems > 1 ? numberOfItems - 1 : 1)}> - </button> {numberOfItems} <button className="btn" onClick={() => setNumberOfItems(numberOfItems + 1)}> + </button>
                    </div>
                    <div>
                        {
                            auth.user ?
                                <Link to="/checkout">
                                    <button className="btn btn-danger btn-rounded mb-2 p-2" onClick={() => handleTotalNumberOfItems(selectedItem)}><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-danger btn-rounded mb-2 p-2"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                                </Link>
                        }
                        {
                            isSuccess &&
                            <div class="alert alert-success float-right" role="alert">
                                Cart Items added successfully!
                        </div>
                        }
                    </div>


                    <div className="more-images mt-5 ">
                        {selectedItem.images.map(img => <img className="mr-3" height="150px" src={img} alt="" />)} <br /><p id="arrow">   ></p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={selectedItem.images[0]} alt="" />
                </div>

            </div>

        </div>
    );
};

export default SingliCardDetails;