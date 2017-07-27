import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../redux/users';
import { removeStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */

class GuitarItem extends React.Component {

  constructor (props) {
    super(props);
    // this.removeUserCallback = this.removeUserCallback.bind(this);
  }

  render () {
    const { guitar } = this.props;
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <img className="media-object img-circle" src={guitar.photo} />
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/guitars/${guitar.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{guitar.model}</span>
            </h4>
            <h5 className="tucked">
              <span>{guitar.brand}</span>
            </h5>
            <h5 className="tucked">
              <span>{guitar.category}</span>
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

  removeUserCallback (event) {
    const { removeUser, removeStory, user, stories } = this.props;
    event.stopPropagation();
    removeUser(user.id);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ stories }) => ({ stories });

const mapDispatch = { removeUser, removeStory };

export default connect(mapState, mapDispatch)(GuitarItem);
