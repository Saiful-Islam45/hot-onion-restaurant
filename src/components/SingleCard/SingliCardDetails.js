import React, { useState, useEffect } from 'react';
import cardData from '../../resources/fakeData/cardData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const SingliCardDetails = (props) => {
    const { id } = useParams();
    const selectedItem = cardData.find(item => item.id == id);
    const [numberOfItems, setNumberOfItems] = useState(1);

    useState(() => {
        if (selectedItem.numberOfItems) {
            setNumberOfItems(selectedItem.numberOfItems)
        }
    }, [selectedItem.numberOfItems]);
    const handleTotalNumberOfItems = (item) => {
        item.numberOfItems = numberOfItems;
        props.cartHandler(item);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h2>{selectedItem.name}</h2>
                    <p>{selectedItem.fullDescription}</p>
                    <div className="d-flex">
                        <h3>$ {selectedItem.price}</h3>
                    </div>
                    <div className="btn-design">
                        <button className="btn btn-rounded" onClick={() => setNumberOfItems(numberOfItems <= 1 ? 1 : numberOfItems - 1)}>-</button> {numberOfItems} <button className="btn" onClick={() => setNumberOfItems(numberOfItems + 1)}>+</button>
                    </div>
                    <button className="btn btn-danger btn-rounded mb-2" onClick={() => handleTotalNumberOfItems(selectedItem)}><FontAwesomeIcon icon={faShoppingCart} /> Add</button>

                    <div className="more-images mt-5 ">
                        {selectedItem.images.map(img => <img className="mr-4" height="150px" src={img} alt="" />)}
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