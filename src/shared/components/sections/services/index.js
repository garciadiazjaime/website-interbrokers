import React from 'react';

import Block1 from './template1/block1';
import Block2 from './template1/block2';
import Block3 from './template1/block3';
import data from './data2';


export default class ServicesSection extends React.Component {
  render() {
    return (<div>
      <Block1 data={data.block1} />
      <Block2 data={data.block2} />
      <Block3 data={data.block3} />
    </div>);
  }
}
