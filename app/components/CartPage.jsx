import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar';
import GuitarItem from './GuitarItem';

/* -----------------    COMPONENT     ------------------ */

class GuitarList extends Component {
    constructor() {
        super();
    }


    render() {
        const {guitars, auth, brands} = this.props;

        return (

            <div className="container">

              <div className="user-query">
              </div>
              <br />
              <br />
              <div className="user-list">
                  {
                      guitars
                          .filter(guitar => {
                          //here goes the code to render the guitars based on the join table.... fuck that dude....
                                





                      })
                      
                          .map(guitar => <GuitarItem guitar={guitar} key={guitar.id}/>)
                  }
              </div>
            </div>
        );
    }

  
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({guitars, auth, brands}) => ({guitars, auth, brands});

// const mapDispatch = { addUser };

export default connect(mapState)(GuitarList);

