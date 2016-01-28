import React from 'react';
import _ from 'lodash';

import Header from './header';
import Body from './body';
import Footer from './footer';

import servicesData from '../db';
import dataBlocks from './data';
import Utils from './utils';


export default class ServiceInner extends React.Component {

  getDefaultService(data, categoryUrl, subcategoryUrl) {
    if (_.isArray(data) && data.length) {
      const categoryItems = Utils.setCategoryItems(data, categoryUrl);

      for (let i = 0, len = categoryItems.length; i < len; i++) {
        const { type, href } = categoryItems[i];

        if (!subcategoryUrl && type.toUpperCase() === 'LIST') {
          return categoryItems[i];
        } else if (href && href.toUpperCase() === subcategoryUrl.toUpperCase()) {
          return categoryItems[i];
        }
      }
    }
    return null;
  }

  getData(data, baseUrl, category, subcategory, service) {
    let subcategoryUrl = subcategory;
    let serviceUrl = service;
    try {
      if (!service) {
        const categoryUrl = [baseUrl, category].join('/');
        const defaultService = this.getDefaultService(data, categoryUrl, subcategory);
        subcategoryUrl = defaultService.href;
        serviceUrl = defaultService.children[0].href;
      }
      return {
        header: require('../db/' + category + '/' + subcategoryUrl + '/header_common'),
        content: require('../db/' + category + '/' + subcategoryUrl + '/' + serviceUrl),
      };
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  getMenuItems(data, baseUrl, category, subcategory) {
    let serviceData;

    if (_.isArray(data) && data.length) {
      if (!subcategory) {
        serviceData = this.getDefaultService(data, [baseUrl, category].join('/'));
      } else {
        const seccionUrl = [baseUrl, category].join('/');
        const categoryData = data.filter((item) => {
          return item.href && item.href.toUpperCase() === seccionUrl.toUpperCase();
        })[0];

        if (_.isArray(categoryData.children) && categoryData.children.length) {
          serviceData = categoryData.children.filter((item) => {
            return item.href && item.href.toUpperCase() === subcategory.toUpperCase();
          })[0];
        }
      }
    }

    if (_.isArray(serviceData.children) && serviceData.children.length) {
      return serviceData.children.map((item) => {
        return {
          title: item.title,
          href: [baseUrl, category, serviceData.href, item.href].join('/'),
        };
      });
    }
    return null;
  }

  render() {
    const baseUrl = 'servicios';
    const { category, subcategory, service } = this.props.params;
    const serviceData = this.getData(servicesData, baseUrl, category, subcategory, service);
    const menuItems = this.getMenuItems(servicesData, baseUrl, category, subcategory);

    return (<div>
      <Header data={serviceData.header} />
      <Body data={serviceData.content} menuItems={menuItems} />
      <Footer data={dataBlocks.block1} />
    </div>);
  }
}

ServiceInner.propTypes = {
  params: React.PropTypes.any,
};
