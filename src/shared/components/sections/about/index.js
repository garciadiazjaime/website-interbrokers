import React from 'react';

import Block1 from './block1';
import Block3 from './block3';
import Block4 from './block4';
import Block5 from './block5';
import Block6 from './block6';
import Block7 from './block7';
import Block8 from './block8';

import data from './data';


export default class AboutSection extends React.Component {
  render() {
    return (<div>
      <Block1 data={data.block1} />
      <Block3 data={data.block3} />
      <Block4 data={data.block4} />
      <Block5 data={data.block5} />
      <Block6 data={data.block6} />
      <Block7 data={data.block7} />
      <Block8 data={data.block8} />
    </div>);
  }
}
