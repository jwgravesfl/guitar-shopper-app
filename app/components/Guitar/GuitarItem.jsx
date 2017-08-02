import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class GuitarItem extends React.Component {

    render() {
        const {guitar} = this.props;
        return (
            <div className="list-group-item min-content user-item guitar-item">
              <div className="media">
                <h4 className="tucked-list">
                  <span placeholder="Jean Doe" id="title">{guitar.model}</span>
                </h4>
                <NavLink className="media-body" activeClassName="active" to={`/guitars/${guitar.id}`}>
                  <div className="guitar-pic">
                    <img className="media-object img-circle" src={guitar.imageURL}/>
                  </div>
                </NavLink>
                  <h5 className="tucked-list">
                    <span>Brand: <NavLink to={`/brands/${guitar.brand && guitar.brand.id}`}>
                        {guitar.brand && guitar.brand.name}</NavLink> | </span>
                    <span>Type: {guitar.category} | </span>
                    <span>Price: ${guitar.price}</span>
                </h5>
              </div>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ brands }) => ({ brands });

export default connect(mapState, null)(GuitarItem);
