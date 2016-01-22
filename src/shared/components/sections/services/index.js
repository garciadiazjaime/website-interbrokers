import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import data from './data';
import servicesData from './db';

// todo: continuar con permisos
export default class ServicesSection extends React.Component {
  render() {
    return (<div>
      <Block1 data={data.block1} />
      <Block2 data={servicesData} />
    </div>);
  }
}
