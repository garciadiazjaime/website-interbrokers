import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import data from './data';


export default class ContactSection extends React.Component {
  render() {
    return (<div className="container-fluid">
      <Block1 data={data.block1} />
      <Block2 data={data.block2} />
    </div>);
  }
}
