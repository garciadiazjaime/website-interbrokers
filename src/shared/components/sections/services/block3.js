import React from 'react';

import Engine1 from '../../engines/engine1';
import Template3 from '../../templates/template3';


export default class Block3 extends React.Component {


  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
        <Engine1 data={data} Template={Template3} />
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.array.isRequired,
};
