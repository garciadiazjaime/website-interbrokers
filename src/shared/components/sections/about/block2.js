import React from 'react';

export default class Block2 extends React.Component {
  render() {
    const { texts } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <h3><b>{texts.text1}</b></h3>
      <p>{texts.text2}</p>
    </div>
    <div className="col-sm-6">
      <h2><b>{texts.text3}</b></h2>
    </div>

    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
