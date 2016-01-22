import React from 'react';

import HeaderMenu from './headerMenu';
import BodyMenu from './bodyMenu';


export default class Engine2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div>
      <HeaderMenu data={data} />
      <BodyMenu data={data} />
    </div>);
  }
}

Engine2.propTypes = {
  data: React.PropTypes.array.isRequired,
};
