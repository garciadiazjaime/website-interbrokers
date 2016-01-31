import React from 'react';

import menuData from '../menuData';
import Menu from './layout/menu/menuAAA';
import Intro from './layout/intro/introAAA';
import FooterAAA from './layout/footer/footerAAA';
import scrollHelper from '../utils/scroll';


export default class AppHandler extends React.Component {

  componentDidMount() {
    this.scrollHandler();
  }

  componentDidUpdate() {
    this.scrollHandler();
  }

  scrollHandler() {
    const { location } = this.props;
    scrollHelper(location);
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
