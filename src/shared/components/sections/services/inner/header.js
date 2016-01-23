import React from 'react';
import _ from 'lodash';

import Banner from './banner';
import Intro from './intro';


export default class Header extends React.Component {

  renderElement(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        switch (item.type.toUpperCase()) {
          case 'BANNER':
            return (<Banner data={item} key={index} />);
          case 'INTRO':
            return (<Intro data={item} key={index} />);
          default:
            return null;
        }
      });
    }
  }

  render() {
    const { data } = this.props;
    return (<div className="content-fluid">
        {this.renderElement(data)}
      </div>);
  }
}

Header.propTypes = {
  data: React.PropTypes.array.isRequired,
};
