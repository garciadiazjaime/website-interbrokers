import React from 'react';

import Button1 from '../../elements/buttons/button1';


export default class Template4 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div>
        <Button1 href="unlink" className="sb" title={data.title}>
          {data.title}
        </Button1>
      </div>);
  }
}

Template4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
