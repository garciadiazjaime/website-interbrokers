import React from 'react';

import BodyMenu from './bodyMenu';


export default class Engine2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div>
      <BodyMenu data={data} />
    </div>);
  }
}

Engine2.propTypes = {
  data: React.PropTypes.array.isRequired,
};
