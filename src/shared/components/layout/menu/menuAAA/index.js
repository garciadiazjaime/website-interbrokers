'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Item from './item';
import Main from './main';

export default class MenuAAA extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    var items = [{
      title: 'Inicio',
      url:'inicio'
    }, {
      title: 'Nosotros',
      url:'nosotros'
    }, {
      title: 'Servicios',
      url:'servicios'
    }, {
      title: 'Blog',
      url:'blog'
    }, {
      title: 'Contacto',
      url:'contacto'
    }];


    return (
      <Main items={items} tel="01.800.788.04.08" />
    );
  }
}
