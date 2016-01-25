import React from 'react';

export default class Block1 extends React.Component {
  render() {
    const { texts } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <h1><b>{texts.text1}</b></h1>
      <p>{texts.text2}</p>
    </div>

    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
