import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import { fetchAllGuitars } from '../reducers/guitars'
import BrandList from './BrandList';
import GuitarList from './Guitar/GuitarList'
import Login from './Login'
import store from '../store';
import { fetchAllBrands } from '../reducers/brands';

export default class Main extends Component {

    componentDidMount() {
        const guitarsThunk = fetchAllGuitars();
        store.dispatch(guitarsThunk);

        const brandsThunk = fetchAllBrands();
        store.dispatch(brandsThunk);
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
