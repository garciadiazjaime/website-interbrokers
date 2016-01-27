import React from 'react';

import Engine2 from '../../widgets/engine/engine2';


export default class Block3 extends React.Component {

  render() {
    return (<div className="container-fluid">
        <Engine2 data={this.props.data} />
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.array.isRequired,
};
