import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

  render() {
    return (
      <div className="checkout-page">
        <h1>Checkout!</h1>
      </div>
    )
  }
}

mapStateToProps = (state) => {
  return {
    cart: state.cart,
    auth: state.auth
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    // stuff
  }
}

export default connect(mapStateToProps)(Checkout);
