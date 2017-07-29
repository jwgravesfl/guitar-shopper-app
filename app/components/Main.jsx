import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import BrandList from './BrandList';
import GuitarList from './Guitar/GuitarList'
import Login from './Login'
import store from '../store';
import { fetchAllBrands } from '../reducers/brands';
import { fetchAllGuitars } from '../reducers/guitars'
import { fetchFilteredBrands } from '../reducers/filterByBrand'

export default class Main extends Component {

    componentDidMount() {
        const guitarsThunk = fetchAllGuitars();
        store.dispatch(guitarsThunk);

        const brandsThunk = fetchAllBrands();
        store.dispatch(brandsThunk);

        const filteredBrandsThunk = fetchFilteredBrands();
        store.dispatch(filteredBrandsThunk);
    }
    render() {


        return (
            <div>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path='/brands' component={BrandList} />
                        <Route exact path='/guitars' component={GuitarList} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>

            </div>
        )
    }
}
