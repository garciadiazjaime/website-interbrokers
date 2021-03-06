import React from 'react';
import _ from 'lodash';

import Banner from './banner';
import Intro from './intro';
import Intro2 from './intro2';
import Template2 from './template2';


export default class Header extends React.Component {

  renderElement(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        switch (item.type.toUpperCase()) {
          case 'BANNER':
            return (<Banner data={item} key={index} />);
          case 'INTRO':
            return (<Intro data={item} key={index} />);
          case 'INTRO2':
            return (<Intro2 data={item} key={index} />);
          case 'CONSULTORIA':
            return (<Template2 data={item} key={index} />);
          default:
            return null;
        }
      });
    }
  }

  render() {
    const { data, subcategory } = this.props;
    return (<div className="container-fluid" id={subcategory}>
        {this.renderElement(data)}
      </div>);
  }
}

Header.propTypes = {
  data: React.PropTypes.array.isRequired,
  subcategory: React.PropTypes.string.isRequired,
};
