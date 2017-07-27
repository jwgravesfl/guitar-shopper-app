import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'

class Sidebar extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const sampleBrands = ['Martin', 'Fender', 'Taylor', 'Gibson']
        const samplePrices = ['100-200', '200-400', '500-900', '1000+']

        const {guitars} = this.props;

        return (
            <sidebar>
                <img src="Rock-Guitar-icon.png" className="logo" />
                <h3>Search By Brand (these are guitars bro):</h3>
        <ul className="sidebarUl">
            {
                guitars.map(guitar => {
                    return (
                        <li>{guitar.model} <span><input type="checkbox" /></span></li>
                    )
                })
            }
          {/*<li>Brand 1 <span><input type="checkbox" /></span></li>
          <li>Brand 2 <span><input type="checkbox" /></span></li>
          <li>Brand 3 <span><input type="checkbox" /></span></li>
          <li>Brand 4 <span><input type="checkbox" /></span></li>
          <li>Brand 5 <span><input type="checkbox" /></span></li>*/}
        </ul>
        <h3>Search By Types:</h3>
        <ul className="sidebarUl">
          <li>Electric <span><input type="checkbox" /></span></li>
          <li>Acoustic <span><input type="checkbox" /></span></li>
        </ul>
        <h3>Search By Prices:</h3>
        <ul className="sidebarUl">
          <li>$100 - $200 <span><input type="checkbox" /></span></li>
          <li>$201 - $300 <span><input type="checkbox" /></span></li>
          <li>$301 - $400 <span><input type="checkbox" /></span></li>
          <li>$400 - $500 <span><input type="checkbox" /></span></li>
          <li>$501+ <span><input type="checkbox" /></span></li>
        </ul>
            </sidebar>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    guitars: state.guitars
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     filterGuitars(filterTermsObj) {
//       dispatch(filterGuitars(filterTermsObj));
//     }
//   }
// }

export default connect(mapStateToProps)(Sidebar);