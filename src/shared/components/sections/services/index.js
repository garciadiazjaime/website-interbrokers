import React from 'react';
import _ from 'lodash';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import dbData from './data';


export default class ServicesSection extends React.Component {

  getMenuData(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item) => {
        return {
          title: item.title,
          description: item.description,
          href: item.href,
          className: item.className,
        };
      });
    }
  }

  render() {
    const menuData = this.getMenuData(dbData.services);
    return (<div>
      <Block1 data={dbData.block1} />
      <Block2 data={menuData} />
      <Block3 data={dbData.services} />
    </div>);
  }
}
