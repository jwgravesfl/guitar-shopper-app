import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import BrandList from './BrandList';

export default class Main extends Component {


    // componentDidMount() {
    //     const studentsThunk = fetchStudents();
    //     const campusesThunk = fetchCampuses();
    //     store.dispatch(studentsThunk);
    //     store.dispatch(campusesThunk);
    // }

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
