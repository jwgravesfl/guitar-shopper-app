import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';


/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    this.renderCart = this.renderCart.bind(this);
  }


  render() {
    const { auth } = this.props;
    if (auth) {
      this.props.getCurrent(auth.id);
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="/Rock-Guitar-icon.png" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/guitars" activeClassName="active">ALL GUITARS</NavLink>
              </li>
              <li>
                <NavLink to="/brands" activeClassName="active">ALL BRANDS</NavLink>
              </li>
            </ul>
            {/**
             * auth && whatever component you want to render maybe...
             */}
            {auth ? (this.renderCart()) : (<div></div>)}
            {auth ? (this.renderLogout()) : (<div></div>)}
            {this.renderLoginSignup(auth)}

          </div>
        </div>
      </nav>
    );
  }

  //think about making this components...
  renderLoginSignup(auth) {
    return (
      auth ? (<ul className="nav navbar-nav navbar-right"> <h3 >
        Welcome, {auth.name}!
          </h3> </ul>) : (<ul className="nav navbar-nav navbar-right"> <li>
          <NavLink to="/signup" activeClassName="active">signup</NavLink>
        </li>
          <li>
            <NavLink to="/login" activeClassName="active">login</NavLink>
          </li>
        </ul>)
    );
  }

  renderLogout() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <button
            className="navbar-btn btn btn-default"
            onClick={this.props.logout}>
            logout
        </button>
        </li>
      </ul>
    );
  }

  renderCart() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <button
            onClick={() => {this.props.getCurrent(this.props.auth && this.props.auth.id)}}>
            <NavLink to="/cart" className="navbar-brand" activeClassName="active"><img src="/img/28468-200.png"/></NavLink>
        </button>

        </li>
      </ul>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

import { logout } from 'APP/app/reducers/auth'
import { getCurrent } from 'APP/app/reducers/cart'
//be consistent with placing of imports

const mapStateToProps = ({ auth }) => ({ auth });


export default withRouter(connect(mapStateToProps, { logout, getCurrent })(Navbar));
