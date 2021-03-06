import React from 'react';

import menuData from '../menuData';
import Menu from './layout/menu/menuAAA';
import Intro from './layout/intro/introAAA';
import FooterAAA from './layout/footer/footerAAA';
import scrollUtil from '../utils/scroll';
import menuUtil from '../utils/menu';


export default class AppHandler extends React.Component {

  componentDidMount() {
    this.scrollHandler(true);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentDidUpdate() {
    this.scrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const offset = window.pageYOffset;
    if (offset > 186) {
      $('#menu_wrapper').addClass('navbar-fixed-top');
    } else {
      $('#menu_wrapper').removeClass('navbar-fixed-top');
    }
  }

  scrollHandler(isFirstTime) {
    const { location } = this.props;
    scrollUtil(location);
    if (!isFirstTime) {
      const bits = location.pathname.split('/');
      menuUtil(bits[1] || 'inicio');
    }
  }

  clickHandler() {
    if ($('.menu_trigger').is(':visible')) {
      $('.menu_trigger').click();
    }
  }

  render() {
    return (
      <div>
        <Menu items={menuData.items.children} icons={menuData.icons} onClick={this.clickHandler} />
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
