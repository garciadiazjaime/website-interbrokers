import React from 'react';
import _ from 'lodash';

import data from './data';
import Banner from './banner';
import Intro from './intro';
import Footer from './footer';


export default class ServiceInner extends React.Component {

  getData(category, subcategory, service) {
    try {
      return {
        header: require('../db/' + category + '/header_common'),
        content: require('../db/' + category + '/' + subcategory + '/' + service),
      };
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  renderHeader(serviceData) {
    if (_.isArray(serviceData) && serviceData.length) {
      return serviceData.map((item) => {
        switch (item.type.toUpperCase()) {
          case 'BANNER':
            return (<Banner data={item} />);
          case 'INTRO':
            return (<Intro data={item} />);
          default:
            return null;
        }
      });
    }
  }

  render() {
    const { category, subcategory, service } = this.props.params;
    const serviceData = this.getData(category, subcategory, service);

    return (<div>
      {this.renderHeader(serviceData.header)}
      <Footer data={data.block1} />
    </div>);
  }
}

ServiceInner.propTypes = {
  params: React.PropTypes.any,
};
