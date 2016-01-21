import React from 'react';

import Engine1 from '../../widgets/engine/engine1';
import Row1 from '../../elements/rows/row1';


export default class Block7 extends React.Component {

  render() {
    return (<Row1 className="d">
        <div className="container-fluid">
        <Engine1 data={this.props.data} />
      </div>
    </Row1>);
  }
}

Block7.propTypes = {
  data: React.PropTypes.array.isRequired,
};
