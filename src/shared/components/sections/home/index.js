import React from 'react';

import BlockA from './blockA';
import BlockB from './blockB';
import BlockC from './blockC';
import BlockD from './blockD';
import BlockE from './blockE';
import data from './data';


export default class HomeSection extends React.Component {
  render() {
    return (<div className="container-fluid">
      <BlockA data={data.blockA} />
      <BlockB data={data.blockB} />
      <BlockC data={data.blockC} />
      <BlockD data={data.blockD} />
      <BlockE data={data.blockE} />
    </div>);
  }
}
