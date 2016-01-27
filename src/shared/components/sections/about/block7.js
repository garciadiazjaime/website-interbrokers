import React from 'react';

import Engine1 from '../../engines/engine1';
import Wrapper1 from '../../elements/wrappers/wrapper1';
import Template1 from '../../templates/template1/';


export default class Block7 extends React.Component {

  render() {
    return (<Wrapper1 className="u">
        <div className="container-fluid">
          <div className="row">
            <Engine1 data={this.props.data} Template={Template1} />
          </div>
      </div>
    </Wrapper1>);
  }
}

Block7.propTypes = {
  data: React.PropTypes.array.isRequired,
};
