import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="s01 container-fluid">
                <div className="row">
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
            </div>
        </div>
    );
};

export default Banner;