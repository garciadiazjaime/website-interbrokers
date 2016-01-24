import React from 'react';

import Engine1 from '../../widgets/engine/engine1';
import Wrapper1 from '../../elements/wrappers/wrapper1';


export default class Block7 extends React.Component {

  render() {
    return (<Wrapper1 className="u">
        <div className="container-fluid">
          <div className="row">
             <Engine1 data={this.props.data} />
          </div>
      </div>
    </Wrapper1>);
  }
}

Block7.propTypes = {
  data: React.PropTypes.array.isRequired,
};
