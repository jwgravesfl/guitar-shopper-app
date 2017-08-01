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
        const {auth} = this.props;
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
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link className="navbar-brand" to="/"><img src="/Rock-Guitar-icon.png"/></Link>
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
                        {auth ? (this.renderLogout()) : null}
                        {auth ? (this.renderCart()) : null}
                        {auth ? (this.renderUser(auth)) : (this.renderLoginSignup(auth))}
                    </div>
                </div>
            </nav>
        );
    }

  renderUser (auth) {
    return (
        <ul className="nav navbar-nav navbar-right"> <li>
          <NavLink to="/guitars" activeClassName="active">
            Welcome, {auth.name}!
          </NavLink>
          </li>
        </ul>
    )
  }

    renderLoginSignup() {
      return (
        <ul className="nav navbar-nav navbar-right"> <li>
            <NavLink to="/signup" activeClassName="active">signup</NavLink>
          </li>
            <li>
              <NavLink to="/login" activeClassName="active">login</NavLink>
            </li>
          </ul>
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
          <button className="navbar-btn btn btn-default"
            onClick={() => {this.props.getCurrent(this.props.auth && this.props.auth.id)}}>
            <NavLink to="/cart" activeClassName="active">{}</NavLink>cart
        </button>
        </li>
      </ul>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

import { logout } from 'APP/app/reducers/auth'
import { getCurrent } from 'APP/app/reducers/cart'


const mapStateToProps = ({ auth }) => ({ auth });


export default withRouter(connect(mapStateToProps, { logout, getCurrent })(Navbar));
