import React from 'react';
import _ from 'lodash';

import Header from './header';
import Body from './body';
import Footer from './footer';

import servicesData from '../db';
import dataBlocks from './data';


export default class ServiceInner extends React.Component {

  getDefaultService(data, categoryUrl, subcategoryUrl) {
    let category;
    if (_.isArray(data) && data.length) {
      category = data.filter((item) => {
        return item.isRoot && item.href === categoryUrl;
      })[0];

      if (category && _.isArray(category.children) && category.children.length) {
        if (!subcategoryUrl) {
          for (let i = 0, len = category.children.length; i < len; i++) {
            if (category.children[i].type.toUpperCase() === 'LIST') {
              return category.children[i];
            }
          }
        } else {
          for (let i = 0, len = category.children.length; i < len; i++) {
            const href = category.children[i].href ? category.children[i].href : null;
            if (href && href.toUpperCase() === subcategoryUrl.toUpperCase()) {
              return category.children[i];
            }
          }
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
