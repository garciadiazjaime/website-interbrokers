import React from 'react';
import _ from 'lodash';

<<<<<<< HEAD
import Block1 from './template1/block1';
import Block2 from './template1/block2';
import Block3 from './template1/block3';
import data from './data2';
=======
import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import dbData from './data';
>>>>>>> c7780dcc87db66c38a12aa82c65675d4a93d19ee


export default class ServicesSection extends React.Component {

  getMenuData(data) {
    const items = [];
    if (_.isArray(data) && data.length) {
      data.map((item) => {
        if (item.isRoot) {
          items.push({
            title: item.title,
            description: item.description,
            href: item.href,
            className: item.className,
          });
        }
      });
    }
    return items;
  }

  getServicesData(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item) => {
        return {
          href: item.href,
          children: item.children,
        };
      });
    }
    return null;
  }

  render() {
    const menuData = this.getMenuData(dbData.services);
    const servicesData = this.getServicesData(dbData.services);

    return (<div>
      <Block1 data={dbData.block1} />
      <Block2 data={menuData} />
      <Block3 data={servicesData} />
    </div>);
  }
}
