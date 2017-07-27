import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import BrandList from './BrandList';
import store from '../store';
import {fetchAllGuitars} from '../reducers/guitars'
import {fetchAllBrands} from '../reducers/brands';

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
                <Sidebar />
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path='/brands' component={BrandList} />
                    </Switch>
                </div>
            </div>
        )
    }
}
