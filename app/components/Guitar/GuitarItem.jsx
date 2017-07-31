import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { removeUser } from '../../redux/users';
// import { removeStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */

class GuitarItem extends React.Component {

  render () {
    const { guitar, brands } = this.props;
    return (
      <div className="list-group-item min-content user-item guitar-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <img className="media-object img-circle" src={guitar.imageURL} />
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/guitars/${guitar.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{guitar.model}</span>
            </h4>
            <h5 className="tucked">
              <span>BRAND: { guitar.brand && guitar.brand.name}</span>
            </h5>
            <h5 className="tucked">
              <span>TYPE: {guitar.category}</span>
            </h5>
          </NavLink>
          {/*<div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.removeUserCallback}>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>*/}
        </div>
      </div>
    );
  }

  // removeUserCallback (event) {
  //   const { removeUser, removeStory, user, stories } = this.props;
  //   event.stopPropagation();
  //   removeUser(user.id);
  // }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ brands }) => ({ brands });

// const mapDispatch = { removeUser, removeStory };

export default connect(mapState, null)(GuitarItem);
