import React from 'react';

import Engine1 from '../../engines/engine1';
import Template2 from '../../templates/template2';


export default class Block2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
      <Engine1 data={data} Template={Template2} />
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.array.isRequired,
};
