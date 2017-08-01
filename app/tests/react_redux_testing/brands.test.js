import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import store from 'APP/app/store.jsx';
import BrandList from 'APP/app/components/BrandList';
import BrandItem from 'APP/app/components/BrandItem';
import { getAllBrands } from 'APP/app/reducers/brands';


describe('Testing the brand components', () => {
  beforeEach(() => {
    const brands = [
      {
        name: 'Martin',
        address: '510 Sycamore Street',
        city: 'Nazareth',
        state: 'PA',
        phone: '610-759-2837',
        location: [],
        description: 'One of the world’s leading acoustic instrument makers, Martin guitars ' +
        'are hand-made by skilled craftsmen and women, who use a combination ' +
        'of new design and techniques, along with those introduced by the company founder.',
        websiteURL: 'https://www.martinguitar.com/'
      },
      {
        name: 'Taylor',
        address: '1980 Gillespie Way',
        city: 'El Cajon',
        state: 'CA',
        phone: '(619) 258-1207',
        location: [],
        description: 'Taylor Guitars was founded in 1974 by Bob Taylor and Kurt Listug, and has ' +
        'grown into the leading global builder of premium acoustic guitars. Renowned for blending modern, ' +
        'innovative manufacturing techniques with a master craftsman\'s attention to detail, Taylor acoustic ' +
        'guitars are widely considered among the best-sounding and easiest to play in the world.',
        websiteURL: 'https://www.taylorguitars.com/'
      },
      {
        name: 'Gibson',
        address: 'Gibson USA',
        city: 'Nashville',
        state: 'TN',
        phone: '1-800-4GIBSON',
        location: [],
        description: 'The home of Gibson electric guitars today is "Gibson USA," built in 1974 in Nashville ' +
        'specifically for the production of Gibson\'s Les Paul guitars. Although the entire guitar ' +
        'industry went through a slump in the late \'70s, the spirit of innovation remained strong at Gibson.',
        websiteURL: 'http://www.gibson.com/'
      },
      {
        name: 'Fender',
        address: '17600 n. Perimeter Drive, Suite 100',
        city: 'Scottsdale',
        state: 'AZ',
        phone: '(480) 596-9690 ',
        location: [],
        description: 'With an illustrious history dating back to 1946, Fender has touched and transformed music ' +
        'worldwide and in nearly every genre: rock ‘n’ roll, country and western, jazz, rhythm and blues and many others. ',
        websiteURL: 'www.fender.com'
      },
      {
        name: 'Ibanez',
        address: 'not swag',
        city: 'Nagoya, Aichi',
        state: 'Japan',
        phone: 'still swag',
        location: [],
        description: 'Ibanez (アイバニーズ Aibanīzu) is a Japanese guitar brand owned by Hoshino Gakki. ' +
        'Based in Nagoya, Aichi, Japan, Hoshino Gakki were one of the first Japanese musical instrument companies to ' +
        'gain a significant foothold in import guitar sales in the United States and Europe, as well as the first brand of ' +
        'guitars to mass-produce the seven-string guitar and eight-string guitar.',
        websiteURL: 'www.ibanez.com'
      }
    ]

    store.dispatch(getAllBrands(brands));
  })

  it('Can render a single brand properly', () => {

    const singleBrand =  {
        name: 'Taylor',
        address: '1980 Gillespie Way',
        city: 'El Cajon',
        state: 'CA',
        phone: '(619) 258-1207',
        location: [],
        description: 'Taylor Guitars was founded in 1974 by Bob Taylor and Kurt Listug, and has ' +
        'grown into the leading global builder of premium acoustic guitars. Renowned for blending modern, ' +
        'innovative manufacturing techniques with a master craftsman\'s attention to detail, Taylor acoustic ' +
        'guitars are widely considered among the best-sounding and easiest to play in the world.',
        websiteURL: 'https://www.taylorguitars.com/'
      }

      //spaces...
    const brandComponent = shallow(<BrandItem brand={singleBrand}/>, {
      context: {
        store
      }
    })

    expect(brandComponent.find('h4').at(0)).to.have.html('<h4 class="media-heading tucked"><span placeholder="Brand...">Taylor</span></h4>')
  })

  it('brand list has brands array as props', () => {
    const allBrandsComponent = shallow(<BrandList />, {
      context: {
        store
      }
    })
    expect(allBrandsComponent.props().brands).to.have.length(5);
  })
})
