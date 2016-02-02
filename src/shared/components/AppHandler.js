import React from 'react';

import menuData from '../menuData';
import Menu from './layout/menu/menuAAA';
import Intro from './layout/intro/introAAA';
import FooterAAA from './layout/footer/footerAAA';
import scrollUtil from '../utils/scroll';
import menuUtil from '../utils/menu';


export default class AppHandler extends React.Component {

  componentDidMount() {
    this.scrollHandler();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.action.toUpperCase() && 'PUSH') {
      this.scrollHandler();
    }
  }

  setMenuActive(elementID) {
    $('.navbar-nav li.active').removeClass('active');
    $('.navbar-nav a#' + elementID).parent().addClass('active');

    if ($('#mainmenu_trigger').is(':visible')) {
      $('#mainmenu_trigger').click();
    }
  }

  scrollHandler() {
    const { location } = this.props;
    scrollUtil(location);
    const bits = location.pathname.split('/');
    menuUtil(bits[1] || 'inicio');
  }

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
  location: React.PropTypes.any,
};
