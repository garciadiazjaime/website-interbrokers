import React from 'react';
import _ from 'lodash';

import Header from './header';
import Body from './body';
import Footer from './footer';
import Block5 from './../../home/block5';

import servicesData from '../db';
import dataBlocks from './data';
import dataBlocksHome from '../../home/data';
import Utils from './utils';


export default class ServiceInner extends React.Component {

  getServiceData(data, categoryUrl, subcategoryUrl) {
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

  getData(data, category, categoryUrl, subcategory, service) {
    let subcategoryUrl = subcategory;
    let serviceUrl = service;
    try {
      if (!service) {
        const serviceData = this.getServiceData(data, categoryUrl, subcategory);
        if (serviceData && _.isArray(serviceData.children) && serviceData.children.length) {
          subcategoryUrl = serviceData.href;
          serviceUrl = serviceData.children[0].href;
        }
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

  getMenuItems(data, categoryUrl, subcategory) {
    if (_.isArray(data) && data.length) {
      const serviceData = this.getServiceData(data, categoryUrl, subcategory);

      if (_.isArray(serviceData.children) && serviceData.children.length) {
        return serviceData.children.map((item) => {
          return {
            title: item.title,
            href: [categoryUrl, serviceData.href, item.href].join('/'),
          };
        });
      }
    }
    return null;
  }

  render() {
    const { category, subcategory, service } = this.props.params;
    const categoryUrl = ['servicios', category].join('/');
    const serviceData = this.getData(servicesData, category, categoryUrl, subcategory, service);
    const menuItems = this.getMenuItems(servicesData, categoryUrl, subcategory);
    return (<div>
      <Header data={serviceData.header} />
      {
        category.toUpperCase() !== 'CONSULTORIA' && category.toUpperCase() !== 'NUEVO-ENTRANTE' ?
        <Body data={serviceData.content} menuItems={menuItems} service={service} /> : null
      }
      <Footer data={dataBlocks.block1}>
        { category.toUpperCase() === 'SEGUROS' ? <Block5 data={dataBlocksHome.block5} /> : null }
      </Footer>
    </div>);
  }
}

ServiceInner.propTypes = {
  params: React.PropTypes.any,
};
