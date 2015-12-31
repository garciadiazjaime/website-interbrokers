'use strict';

import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Item extends Component {

  render() {

    return (
      <li><Link to={this.props.url} class={style.navbarNavAnchor}>{this.props.children}</Link></li>
    );
  }
}
