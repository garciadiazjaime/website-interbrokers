import React from 'react';

import menuData from '../menuData';
import Menu from './layout/menu/menuAAA';
import Intro from './layout/intro/introAAA';
import FooterAAA from './layout/footer/footerAAA';


export default class AppHandler extends React.Component {

  render() {
    return (
      <div>
        <Menu items={menuData.items.children} icons={menuData.icons} />
        <Intro />
        {this.props.children}
        <FooterAAA items={menuData.items.children} addresses={menuData.addresses}/>
      </div>
    );
  }
}

AppHandler.propTypes = {
  children: React.PropTypes.object.isRequired,
};
