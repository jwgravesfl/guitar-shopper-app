import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import store from 'APP/app/store.jsx';
import GuitarList from 'APP/app/components/Guitar/GuitarList';
import GuitarItem from 'APP/app/components/Guitar/GuitarItem';
import {getAllGuitars} from 'APP/app/reducers/guitars';
import {fetchAllBrands} from 'APP/app/reducers/brands';


describe('Testing the guitar components in our store...', () => {
  let guitarComponent;

  beforeEach(() => {
    const guitars = [
        {
          id: 1,
          model: 'American Standard Stratocaster Electric Guitar',
          category: 'Electric',
          orientation: 'right',
          description: 'A very solid Fender guitar',
          imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/American-Standard-Stratocaster-Electric-Guitar-Sienna-Sunburst-Maple-Fingerboard/H80805000002001-00-500x500.jpg',
          price: 1099.99,
          brand_id: 2
        },
        {
          id: 2,
          model: 'American Standard Stratocaster Electric Guitar',
          category: 'Electric',
          orientation: 'right',
          description: 'A very solid Fender guitar',
          imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/American-Standard-Stratocaster-Electric-Guitar-Sienna-Sunburst-Maple-Fingerboard/H80805000002001-00-500x500.jpg',
          price: 1099.99,
          brand_id: 2
        },
        {
          id: 3,
          model: 'American Standard Stratocaster Electric Guitar',
          category: 'Electric',
          orientation: 'right',
          description: 'A very solid Fender guitar',
          imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/American-Standard-Stratocaster-Electric-Guitar-Sienna-Sunburst-Maple-Fingerboard/H80805000002001-00-500x500.jpg',
          price: 1099.99,
          brand_id: 2
        }
      ]

      store.dispatch(getAllGuitars(guitars));

  })


    it('Can render a single guitar properly...', () => {

      const guitar = {
        id: 1,
        model: 'American Standard Stratocaster Electric Guitar',
        category: 'Electric',
        orientation: 'right',
        description: 'A very solid Fender guitar',
        imageURL: 'http://media.guitarcenter.com/is/image/MMGS7/American-' +
        'Standard-Stratocaster-Electric-Guitar-Sienna-Sunburst-Maple-' +
        'Fingerboard/H80805000002001-00-500x500.jpg',
        price: 1099.99,
        brand_id: 2
      }

      guitarComponent = shallow(<GuitarItem guitar={guitar} />, {context: {
          store: store
      }});

      expect(guitarComponent.dive().find('h5').at(1)).to.have.html('<h5 class="tucked"><span>TYPE: Electric</span></h5>')
    })

    it('Renders all guitars...', () => {



      const allGuitarsComp = shallow(<GuitarList  />, {
          context: {
              store
          }
      })

      expect(allGuitarsComp.props().guitars).to.have.length(3);

    })
})
