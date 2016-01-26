import React from 'react';
import _ from 'lodash';

import Header from './header';
import Body from './body';
import Footer from './footer';

import servicesData from '../db';
import dataBlocks from './data';


export default class ServiceInner extends React.Component {

  getData(category, subcategory, service) {
    try {
      return {
        header: require('../db/' + category + '/' + subcategory + '/header_common'),
        content: require('../db/' + category + '/' + subcategory + '/' + service),
      };
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  getMenuItems(data, baseUrl, category, subcategory) {
    if (_.isArray(data) && data.length) {
      const seccionUrl = [baseUrl, category].join('/');
      const categoryData = data.filter((item) => {
        return item.href && item.href.toUpperCase() === seccionUrl.toUpperCase();
      }).pop();

      if (_.isArray(categoryData.children) && categoryData.children.length) {
        const subcategoryData = categoryData.children.filter((item) => {
          return item.href && item.href.toUpperCase() === subcategory.toUpperCase();
        }).pop();

        if (_.isArray(subcategoryData.children) && subcategoryData.children.length) {
          return subcategoryData.children;
        }
      }
    }
    return null;
  }

  render() {
    const baseUrl = 'servicios';
    const { category, subcategory, service } = this.props.params;
    const serviceData = this.getData(category, subcategory, service);
    const menuItems = this.getMenuItems(servicesData, baseUrl, category, subcategory);
    const rootUrl = [baseUrl, category, subcategory].join('/');

    return (<div>
      <Header data={serviceData.header} />
      <Body data={serviceData.content} menuItems={menuItems} rootUrl={rootUrl} />
      <Footer data={dataBlocks.block1} />
    </div>);
  }
}

ServiceInner.propTypes = {
  params: React.PropTypes.any,
};
