import React from 'react';
import _ from 'lodash';

import Banner from './banner';


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

  renderHeader(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item) => {
        console.log('item', item);
        switch (item.type.toUpperCase()) {
          case 'BANNER':
            return (<Banner data={item} />);
          default:
            return null;
        }
      });
    }
  }

  render() {
    const { category, subcategory, service } = this.props.params;
    const data = this.getData(category, subcategory, service);

    return (<div className="container-fluid">
      {this.renderHeader(data.header)}
    </div>);
  }
}

ServiceInner.propTypes = {
  params: React.PropTypes.any,
};
