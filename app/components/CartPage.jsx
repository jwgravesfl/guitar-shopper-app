import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrent } from 'APP/app/reducers/cart'
import GuitarItem from './Guitar/GuitarItem';
import CartSideBar from './CartSideBar';

/* -----------------    COMPONENT     ------------------ */

class Cart extends Component {
    constructor() {
        super();

    }

    componentDidMount () {
       this.props.getCurrent(this.props.auth.id);
    }

    render() {
        const {cart} = this.props;
        return (
            <div className="row">
            <div className="col-lg-8 col-mg-8">

              <div className="user-query">
              </div>
              <br />
              <br />
              <div className="user-list">
                  {
                      cart.guitars && cart.guitars
                          .map(guitar => <GuitarItem guitar={guitar} key={guitar.id}/>)
                  }
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <CartSideBar />
            </div>
            </div>
        );
    }


}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({cart, auth}) => ({cart, auth});

// const mapDispatch = { addUser };

export default connect(mapState, {getCurrent})(Cart);

