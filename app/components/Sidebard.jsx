import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Sidebar extends Component {

    render() {

        const sampleBrands = ['Martin', 'Fender', 'Taylor', 'Gibson']
        const samplePrices = ['100-200', '200-400', '500-900', '1000+']

        return (
            <sidebar>
                <img src="Rock-Guitar-icon.png" className="logo" />
                <section>
                    <h4 className="menu-item">
                        This is all the SHit
                    </h4>
                </section>
                <hr />
                <ul className="list-unstyled">Brands
                    {
                        sampleBrands.map(brand => {
                            return (
                                <li>
                                    <button
                                        className="navbar-btn btn btn-default">
                                        {brand}
                                    </button>
                                </li>
                            );
                        })
                    }

                </ul>
                <ul className="list-unstyled"> Price Range
                    {
                        samplePrices.map(price => {
                            return (
                                <li>
                                    <button
                                        className="navbar-btn btn btn-default">
                                        {price}
                                    </button>
                                </li>
                            );
                        })
                    }

                </ul>
            </sidebar>
        );
    }
}

