import React from 'react';

export default class Block7 extends React.Component {
  render() {
    const { texts } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <h2><b>{texts.text1}</b></h2>
    </div>
    </div>);

  }
}

Block7.propTypes = {
  data: React.PropTypes.object.isRequired,
};
