import React, { useState, useEffect } from 'react';
import './Card.css';
import cardData from '../../resources/fakeData/cardData.json';
import SingleCard from '../SingleCard/SingleCard';


const Card = (props) => {
    const [card, setCard] = useState([]);
    const [foodCategory, setFoodCategory] = useState("lunch");
    useEffect(() => {
        setCard(cardData);
    }, [])


    const cardItems = card.filter(food => food.type == foodCategory);
    return (
        <div>
            <div className="container card-area">
                <div className="row">
                    <nav>
                        <ul className="nav justify-content-center">
                            <li onClick={() => setFoodCategory("breakfast")} className="nav-item">
                                <span to="breakfast" className={foodCategory === "breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                            </li>
                            <li onClick={() => setFoodCategory("lunch")} className="nav-item">
                                <span to="breakfast" className={foodCategory === "lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                            </li>
                            <li onClick={() => setFoodCategory("dinner")} className="nav-item">
                                <span to="breakfast" className={foodCategory === "dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="row">
                        {
                            cardItems.map(food => <SingleCard key={food.id} food={food} cardItems={cardItems}></SingleCard>)
                        }
                    </div>
                    <div className="text-center">
                        {
                            props.count ?
                                <a href="/checkout">
                                    <button disabled className="btn btn-secondary">Check Out Your Food</button>
                                </a> : <button disabled className="btn btn-secondary">Check Out Your Food</button>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;