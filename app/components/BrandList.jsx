import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import BrandItem from './BrandItem';

class AllBrands extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="brand-list">
          {
            this.props.brands
              .map(brand => <BrandItem brand={brand} />)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brands
  }
};

const mapDispatchToProps = (dispatch) => {
  // put in methods and such
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBrands);
